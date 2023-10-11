import React, { useState, useEffect } from "react";
import { Text, View, TextInput, TouchableOpacity, ActivityIndicator, ScrollView } from "react-native";
import MapView, { Marker, Region } from 'react-native-maps';
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./style/AddressScreen.style";
import * as Location from "expo-location";

const LocationScreen = () => {
  const [address, setAddress] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [district, setDistrict] = useState("");
  const [province, setProvince] = useState("");
  const [region, setRegion] = useState<Region | null>(null);
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
        setRegion({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
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
      <TextInput
        style={styles.input}
        placeholder="Address"
        value={address}
        onChangeText={(text) => setAddress(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="House No. / Moo / Soi"
        value={houseNo}
        onChangeText={(text) => setHouseNo(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Sub-District / District"
        value={district}
        onChangeText={(text) => setDistrict(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Province / Country / Postal Code"
        value={province}
        onChangeText={(text) => setProvince(text)}
      />
      <View style={styles.panel}>
        <View style={styles.panelContent}>
          <FontAwesome name="map-marker" size={24} color="#ED8085" style={styles.icon} />
          <Text style={styles.panelText}>Place an accurate pin</Text>
        </View>
        <Text style={{ color: "white" }}>Click the map to adjust.</Text>
      </View>

      {loadingLocation ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text>Loading your location...</Text>
        </View>
      ) : (
        <MapView style={styles.map} region={region}>
          {/* Add a marker for the selected location */}
          <Marker coordinate={region} />
        </MapView>
      )}

      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LocationScreen;
