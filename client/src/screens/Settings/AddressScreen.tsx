import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  Text,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./style/AddressScreen.style";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


interface LocationScreenProps {
  // Define any props your component needs here
}

const LocationScreen: React.FC<LocationScreenProps> = () => {
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
      `http://localhost:3000/address/${userId}`
    );
    const address = response.data.address.address;
    if (address) {
      setLocationSet(true);
    } else {
      setLocationSet(false);
    }
  };
  
  const handleSave = async () => {
    const userId = await AsyncStorage.getItem("userId");
    if (locationSet) {
      try {
        const { data: res } = await axios.post(
          "http://localhost:3000/address/update",
          {
            userId: userId,
            address: name,
            latitude: latestMarker?.latitude,
            longitude: latestMarker?.longitude,
          }
        );
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const { data: res } = await axios.post(
          "http://localhost:3000/address/add",
          {
            userId: userId,
            address: name,
            latitude: latestMarker?.latitude,
            longitude: latestMarker?.longitude,
          }
        );
      } catch (error) {
        console.log(error);
      }
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

  
    const handleMapPress = async (event: any) => {
      const { latitude, longitude } = event.nativeEvent.coordinate;
      setLatestMarker({ latitude, longitude });
    
      // Reverse geocode the coordinates to get the name
      const locationName = await reverseGeocode(latitude, longitude);
    
      // Set the name in the search bar
      setName(locationName);
    };

  const reverseGeocode = async (latitude: number, longitude: number) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyDzrf9J0CJvAGlHEHaBXTggIGG0hfF96ug`
      );

      if (response.data.results.length > 0) {
        const locationName = response.data.results[0].formatted_address;
        return locationName;
      } else {
        console.error("No results found for reverse geocoding.");
        return "Custom Location"; // Default name if no results found
      }
    } catch (error) {
      console.error("Error during reverse geocoding:", error);
      return "Custom Location"; // Default name on error
    }
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

      <View style={[styles.panel, { marginTop: 50 }]}>
        <View style={styles.panelContent}>
          <FontAwesome
            name="map-marker"
            size={24}
            color="#ED8085"
            style={styles.icon}
          />
          <Text style={styles.panelText}>Place an accurate pin</Text>
        </View>
        <Text style={styles.panelText}>Click the map to adjust.</Text>
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
          onPress={handleMapPress}
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

      <View style={{ paddingBottom: 20 }}>
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default LocationScreen;
