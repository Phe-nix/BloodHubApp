import React, { useState, useEffect } from "react";
import { View, StyleSheet, TextInput, Button, Text, ActivityIndicator } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Constants from "expo-constants";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

interface FindHealthUnitScreenProps {
  // Define any props your component needs here
}

const FindHealthUnitScreen: React.FC<FindHealthUnitScreenProps> = ({navigation,props}:any) => {
  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const [loadingLocation, setLoadingLocation] = useState(true);
  const [name, setName] = useState(""); // State to store the name
  const [latestMarker, setLatestMarker] = useState<{ latitude: number; longitude: number } | null>(null);
  const [locationSet, setLocationSet] = useState<boolean>(false);
  console.log(locationSet)
  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.error("Permission to access location was denied");
      setLoadingLocation(false);
      return;
    }
  
    // Delay fetching the location by 2 seconds (2000 milliseconds)
    setTimeout(async () => {
      try {
        const location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;
        setRegion({
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        });
        setLoadingLocation(false);
      } catch (error) {
        console.error("Error fetching current location:", error);
        setLoadingLocation(false);
      }
    }, 2000); // Adjust the delay time as needed
  };
  
  useEffect(() => {
    getLocation();
    checkIfLocationIsSet();
  }, []);

  const checkIfLocationIsSet = async () => {
    const userId = await AsyncStorage.getItem("userId");
    const response = await axios.get(
      `${Constants.expoConfig?.extra?.API_URL}/address/${userId}`
    );
    const address = response.data.address.address;
    if (address) {
      setLocationSet(true);
      console.log("update");
      
    } else {
      setLocationSet(false);
      console.log("add");
    }
  };
  

  const handleSelectLocation = (data: any, details: any) => {
    const { lat, lng } = details.geometry.location;
    setRegion({
      latitude: lat,
      longitude: lng,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });

    // Update the latest marker when a new location is selected
    setLatestMarker({ latitude: lat, longitude: lng });
    setName(data.description);
  };


    return (
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: "#E99999",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1,
          }}
        >
          <GooglePlacesAutocomplete
            placeholder="Search Location"
            onPress={handleSelectLocation}
            fetchDetails={true}
            query={{
              key: "AIzaSyDzrf9J0CJvAGlHEHaBXTggIGG0hfF96ug",
              language: "en",
            }}
            styles={{ position: "absolute" }}
          />
        </View>
  
  
        {loadingLocation ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#fff" />
            <Text>Loading your location...</Text>
          </View>
        ) : (
          <MapView
            style={styles.map}
            region={region}
            provider={PROVIDER_GOOGLE}
          >
            {latestMarker && (
              <Marker
                coordinate={{
                  latitude: latestMarker.latitude,
                  longitude: latestMarker.longitude,
                }}
                title="Selected Location"
              />
            )}
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
