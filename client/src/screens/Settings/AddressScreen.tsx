import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  Button,
  ActivityIndicator,
  Text,
  ScrollView,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./style/AddressScreen.style";

interface LocationScreenProps {
  // Define any props your component needs here
}

const LocationScreen: React.FC<LocationScreenProps> = (props) => {
  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.01, // Adjust this value for initial zoom level
    longitudeDelta: 0.01, // Adjust this value for initial zoom level
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
        setRegion({
          latitude,
          longitude,
          latitudeDelta: 0.01, // Adjust this value for loading zoom level
          longitudeDelta: 0.01, // Adjust this value for loading zoom level
        });
        setLoadingLocation(false); // Update loading state when location is fetched
      } catch (error) {
        console.error("Error fetching current location:", error);
        setLoadingLocation(false); // Update loading state on error
      }
    };

    getLocation();
  }, []);

  const handleSave = () => {
    // Handle form submission
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <TextInput style={styles.input} placeholder="Address" />
        <TextInput style={styles.input} placeholder="House No. / Moo / Soi" />
        <TextInput style={styles.input} placeholder="Sub-District / District" />
        <TextInput
          style={styles.input}
          placeholder="Province / Country / Postal Code"
        />
      </View>

      <View style={styles.panel}>
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
        <MapView style={styles.map} region={region}>
          <Marker
            coordinate={{
              latitude: region.latitude,
              longitude: region.longitude,
            }}
            title="Your location"
          />
        </MapView>
      )}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
      
    </ScrollView>
  );
};

export default LocationScreen;
