import React, { useState, useEffect } from "react";
import { View, StyleSheet, TextInput, Button, Text, ActivityIndicator } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

interface FindHealthUnitScreenProps {
  // Define any props your component needs here
}

const FindHealthUnitScreen: React.FC<FindHealthUnitScreenProps> = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [markerCoordinates, setMarkerCoordinates] = useState({
    latitude: 0,
    longitude: 0,
  });
  const [initialRegion, setInitialRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [loadingLocation, setLoadingLocation] = useState(true); // Added loading state

  useEffect(() => {
    const getLocation = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission to access location was denied");
        setLoadingLocation(false); // Update loading state
        return;
      }

      try {
        const location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;
        setMarkerCoordinates({ latitude, longitude });
        setInitialRegion({
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
        setLoadingLocation(false); // Update loading state when location is fetched
      } catch (error) {
        console.error("Error fetching current location:", error);
        setLoadingLocation(false); // Update loading state on error
      }
    };

    getLocation();
  }, []);

  const handleSearch = async () => {
    try {
      const locations = await Location.geocodeAsync(searchQuery);
      if (locations.length > 0) {
        const firstLocation = locations[0];
        const { latitude, longitude } = firstLocation;
        setMarkerCoordinates({
          latitude,
          longitude,
        });
      }
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search Location"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <Button title="Search" onPress={handleSearch} />
      </View>

      {/* Display loading indicator if location is still being fetched */}
      {loadingLocation ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#fff" />
          <Text>Loading your location...</Text>
        </View>
      ) : (
        // Map view once location is fetched
        <MapView style={styles.map} initialRegion={initialRegion}>
          <Marker
            coordinate={markerCoordinates}
            title="Your location"
          />
        </MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E99999",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 30,
    marginHorizontal: 20,
    marginVertical: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
    width: "90%",
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontSize: 18,
    color: "#000000",
  },
  map: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default FindHealthUnitScreen;
