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
import { styles } from "./style/AddressScreen.style";

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



export default LocationScreen;
