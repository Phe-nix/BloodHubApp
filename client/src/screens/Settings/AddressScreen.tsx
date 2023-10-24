import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  Text,
  ScrollView,
  FlatList,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./style/AddressScreen.style";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

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
  const [savedLocations, setSavedLocations] = useState<
    { name: string; latitude: number; longitude: number }[]
  >([]);

  useEffect(() => {
    const getLocation = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission to access location was denied");
        setLoadingLocation(false);
        return;
      }

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
    };
    getLocation();
  }, []);

  const handleSave = () => {
    if (name && region.latitude !== 0 && region.longitude !== 0) {
      // Create a new saved location object
      const newLocation = {
        name,
        latitude: region.latitude,
        longitude: region.longitude,
      };

      // Update the list of saved locations
      setSavedLocations([...savedLocations, newLocation]);

      // Clear the name and region
      setName("");
      setRegion({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    }
  };

  const handleSelectLocation = (data: any, details: any) => {
    // Extract the latitude and longitude from the selected location
    const { lat, lng } = details.geometry.location;
    setRegion({
      latitude: lat,
      longitude: lng,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
  };

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: "#E99999", height: 270 }}>
        <GooglePlacesAutocomplete
          placeholder="Search Location"
          onPress={handleSelectLocation}
          fetchDetails={true}
          query={{
            key: "AIzaSyDzrf9J0CJvAGlHEHaBXTggIGG0hfF96ug",
            language: "en",
          }}
          listViewDisplayed="auto" // Set this to "auto" to display suggestions without worrying about height
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
        <MapView style={styles.map} region={region} provider={PROVIDER_GOOGLE}>
          <Marker
            coordinate={{
              latitude: region.latitude,
              longitude: region.longitude,
            }}
            title="Your location"
          />
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
