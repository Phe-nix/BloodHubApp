import React, { useState, useEffect } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

interface FindHealthUnitScreenProps {
  // Define any props your component needs here
}

const FindHealthUnitScreen: React.FC<FindHealthUnitScreenProps> = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [markerCoordinates, setMarkerCoordinates] = useState({
    latitude: 0, // Updated with the current latitude
    longitude: 0, // Updated with the current longitude
  });

  const [initialRegion, setInitialRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [useCurrentLocation, setUseCurrentLocation] = useState(true); // Track whether to use current location

  useEffect(() => {
    // When the component mounts, get the current location and set the map's initial region
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission to access location was denied");
        return;
      }

      try {
        const location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;
        setMarkerCoordinates({ latitude, longitude });

        // Set the initial region based on the state
        if (useCurrentLocation) {
          setInitialRegion({
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
        }
      } catch (error) {
        console.error("Error fetching current location:", error);
      }
    })();
  }, [useCurrentLocation]);

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
        // Always set the initial region to the marker's location when searching
        setInitialRegion({
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
        // Update the state to stop using current location as the initial region
        setUseCurrentLocation(false);
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

      {/* Map */}
      <MapView style={styles.map} initialRegion={initialRegion}>
        <Marker coordinate={markerCoordinates} title="Health Unit Location" />
      </MapView>
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
});

export default FindHealthUnitScreen;
