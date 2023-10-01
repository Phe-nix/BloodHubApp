import React, { useState } from "react";
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { FontAwesome } from "@expo/vector-icons";

const LocationScreen = () => {
  const [address, setAddress] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [district, setDistrict] = useState("");
  const [province, setProvince] = useState("");
  const [region, setRegion] = useState({
    latitude: 13.7563, // Latitude of Bangkok, Thailand
    longitude: 100.5018, // Longitude of Bangkok, Thailand
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const handleSave = () => {
    // Handle form submission
  };

  return (
    <View style={styles.container}>
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
          <FontAwesome
            name="map-marker"
            size={24}
            color="#ED8085"
            style={styles.icon}
          />
          <Text style={styles.panelText}>Place an accurate pin</Text>
        </View>
        <Text style={{ color: "white" }}>Click the map to adjust.</Text>
      </View>

      <MapView style={styles.map} region={region}>
        {/* Add a marker for the selected location */}
        <Marker coordinate={region} />
      </MapView>
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  panel: {
    backgroundColor: "rgba(237, 128, 133, 0.5)", // Pink color with opacity
    width: "100%",
    padding: 12,
    marginTop: 12,
    flexDirection: "column", // Stack children elements vertically
    alignItems: "center", // Center horizontally
  },
  panelContent: {
    flexDirection: "row", // Make children elements align horizontally
    alignItems: "center", // Center vertically
    marginBottom: 6, // Add spacing between content and the text below
  },
  icon: {
    marginRight: 10, // Add spacing between icon and text
  },
  panelText: {
    color: "#ED8085",
    fontWeight: "bold",
    fontSize: 18,
  },
  input: {
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 12,
    fontSize: 16,
  },
  map: {
    height: 400,
    marginBottom: 15,
  },
  saveButton: {
    backgroundColor: "#ED8085", // You can change the color as needed
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    width: 350,
    height: 55,
    alignSelf: "center", // Center the button horizontally
  },
  saveButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default LocationScreen;
