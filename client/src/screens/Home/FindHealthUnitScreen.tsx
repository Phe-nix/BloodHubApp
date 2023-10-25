import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Text,
  ActivityIndicator,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import axios from "axios";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Constants from "expo-constants";

interface FindHealthUnitScreenProps {}

interface Hospital {
    id: string;
    hospitalName: string;
    location: string;
    link: string;
    createAt: string;
    image: string;
}

const FindHealthUnitScreen: React.FC<FindHealthUnitScreenProps> = ({ props }: any) => {
  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.25,
    longitudeDelta: 0.25,
  });
  const [loadingLocation, setLoadingLocation] = useState(true);
  const [latestMarker, setLatestMarker] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [name, setName] = useState("");
  const [UserAddress, setUserAddress] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const [hospitals, setHospitals] = useState<Hospital[]>([]);

  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.error("Permission to access location was denied");
      setLoadingLocation(false);
      return;
    }
    setTimeout(async () => {
      try {
        const location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;
        setRegion({
          latitude,
          longitude,
          latitudeDelta: 1,
          longitudeDelta: 1,
        });
        setUserAddress({ latitude, longitude });
        setLoadingLocation(false);
      } catch (error) {
        console.error("Error fetching current location:", error);
        setLoadingLocation(false);
      }
    }, 2000);
  };

  useEffect(() => {
    getLocation();
    Hospital();
  }, []);

  const Hospital = async () => {
    try {
      const response = await axios.get(`${Constants.expoConfig?.extra?.API_URL}/hospital`);
      const hospitalData: Hospital[] = response.data.hospital;
      setHospitals(hospitalData);
    } catch (error) {
      console.error(error);
    }
  };


  const handleSelectLocation = (data: any, details: any) => {
    const { lat, lng } = details.geometry.location;
    setRegion({
      latitude: lat,
      longitude: lng,
      latitudeDelta: 0.25,
      longitudeDelta: 0.25,
    });
    setLatestMarker({ latitude: lat, longitude: lng });
    setName(data.description);
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1,
            width: "100%",
          },
        ]}
      >
        <GooglePlacesAutocomplete
          placeholder="Search Location"
          onPress={handleSelectLocation}
          fetchDetails={true}
          query={{
            key: "AIzaSyDzrf9J0CJvAGlHEHaBXTggIGG0hfF96ug",
            language: "en",
          }}
          styles={{
            container: {
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 1,
              alignItems: "center",
              backgroundColor: "#E99999",
              paddingHorizontal: 20,
              paddingVertical: 10,
            },
          }}
        />
      </View>

      {loadingLocation ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#fff" />
          <Text>Loading your location...</Text>
        </View>
      ) : (
        <MapView style={styles.map} region={region} provider={PROVIDER_GOOGLE}>
          {UserAddress && (
            <Marker
              coordinate={{
                latitude: UserAddress.latitude,
                longitude: UserAddress.longitude,
              }}
              title="Your Location"
            />
          )}

          {hospitals.length > 0 &&
            hospitals.map((hospital) => (
              <Marker
                key={hospital.id}
                coordinate={{
                  latitude: parseFloat(hospital.location.split(",")[0]),
                  longitude: parseFloat(hospital.location.split(",")[1]),
                }}
                title={hospital.hospitalName}
              />
            ))}
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