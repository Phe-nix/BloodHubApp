import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  Image,
  Touchable,
  TouchableOpacity,
  Linking,
  Alert,
  FlatList,
  Animated,
} from "react-native";
import Swiper from "react-native-swiper";
import { styles } from "./BloodScreen.style";
import axios from "axios";
import aType from "../../../assets/hospital/Blood_A.png";
import bType from "../../../assets/hospital/Blood_B.png";
import oType from "../../../assets/hospital/Blood_O.png";
import abType from "../../../assets/hospital/Blood_AB.png";
import Card from "./components/Card";
import Label from "./components/Label";
import Constants from "expo-constants";
import Panigation from "../../core/Panigation";
import { Dimensions } from "react-native";

interface Hospital {
  hospitalName: string;
  image: any;
  location: string;
  link: string;
  id: string;
}

const BloodScreen = () => {
  const screenWidth = Dimensions.get("window").width; // Get the screen width
  const [hospitals, setHospitals] = useState<any>([]);
  const [a_positiveneed, seta_positive] = useState("");
  const [b_positiveneed, setb_positive] = useState("");
  const [o_positiveneed, seto_positive] = useState("");
  const [ab_positiveneed, setab_positive] = useState("");
  const [a_negative, seta_negative] = useState("");
  const [b_negative, setb_negative] = useState("");
  const [o_negative, seto_negative] = useState("");
  const [ab_negative, setab_negative] = useState("");
  const [a_positiveReceive, seta_positiveReceive] = useState("");
  const [b_positiveReceive, setb_positiveReceive] = useState("");
  const [o_positiveReceive, seto_positiveReceive] = useState("");
  const [ab_positiveReceive, setab_positiveReceive] = useState("");

  const [shouldRenderComponent, setShouldRenderComponent] = useState(false);

  const delayRender = useCallback(() => {
    setTimeout(() => {
      setShouldRenderComponent(true);
    }, 2000); // Adjust the delay time as needed (in milliseconds)
  }, []);

  useEffect(() => {
    // Call the delayRender function to start the delay before rendering
    delayRender();

    // Other useEffect code
  }, [delayRender]);

  const _renderItem = (item: Hospital) => (
    <TouchableOpacity
      key={item.id}
      style={{ alignItems: "center" }}
      onPress={async () => {
        const supported = await Linking.canOpenURL(item.link);

        if (supported) {
          await Linking.openURL(item.link);
        } else {
          Alert.alert(`Don't know how to open this URL: ${item.link}`);
        }
      }}
    >
      <Image
        source={{ uri: item.image }}
        style={{ width: screenWidth, height: 200 }}
      />
      <Text style={styles.hospitalName}>{item.hospitalName}</Text>
    </TouchableOpacity>
  );

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        const response = await axios.get(
          `${Constants.expoConfig?.extra?.API_URL}/hospital`
        );
        const hospitalData = response.data.hospital;
        console.log(hospitalData);
        if (Array.isArray(hospitalData) && hospitalData.length > 0) {
          setHospitals(hospitalData);
        } else {
          console.error("Received empty or malformed hospital data.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `${Constants.expoConfig?.extra?.API_URL}/blood`
        );
        const bloodData = response.data.blood; // Access the "blood" array
        if (Array.isArray(bloodData) && bloodData.length > 0) {
          const firstBloodEntry = bloodData[0]; // Access the first entry in the array
          seta_positive(firstBloodEntry.aPositiveNeed);
          setb_positive(firstBloodEntry.bPositiveNeed);
          seto_positive(firstBloodEntry.oPositiveNeed);
          setab_positive(firstBloodEntry.abPositiveNeed);
          seta_negative(firstBloodEntry.aNegativeNeed);
          setb_negative(firstBloodEntry.bNegativeNeed);
          seto_negative(firstBloodEntry.oNegativeNeed);
          setab_negative(firstBloodEntry.abNegativeNeed);
          seta_positiveReceive(firstBloodEntry.aPositiveReceive);
          setb_positiveReceive(firstBloodEntry.bPositiveReceive);
          seto_positiveReceive(firstBloodEntry.oPositiveReceive);
          setab_positiveReceive(firstBloodEntry.abPositiveReceive);
        } else {
          console.error("Received empty or malformed blood data.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
    fetchHospitals();
  }, []);

  const scrollX = useRef(new Animated.Value(0)).current;

  const handleOnScroll = (event: any) => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      }
    )(event);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <ScrollView>
          <View>
            <View style={styles.title}>
              <Text style={styles.hospital}>โรงพยาบาล</Text>
            </View>
            <View style={[styles.underLine_1, { marginBottom: 25 }]} />
          </View>

          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <FlatList
              data={hospitals}
              renderItem={({ item }) => _renderItem(item)}
              horizontal
              pagingEnabled
              snapToAlignment="center"
              showsHorizontalScrollIndicator={false}
              onScroll={handleOnScroll}
            />
          </View>
          
          <View style={{ marginTop: 10 }}>
            <Panigation data={hospitals} scrollX={scrollX} />
          </View>

          <View style={[styles.underLine_2, { marginTop: 15 }]} />
          <View style={styles.title}>
            <Text style={styles.hospital}>สภากาชาดไทย</Text>
            <Text style={styles.hospital}></Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between", // Make sure it's "space-between"
              marginTop: 20,
              marginHorizontal: 20,
            }}
          >
            <View style={styles.underLine_3} />
            <View style={styles.underLine_3} />
          </View>
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Text style={{ fontSize: 15 }}>ปริมาณเลือดในคลังข้อมูล</Text>
            <Text style={{ fontSize: 15 }}>ณ วันที่ 3 สิงหาคม 2566</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 15,
              marginHorizontal: 10,
              marginTop: 20,
            }}
          >
            <Card
              unit={a_positiveneed}
              image={aType}
              recieve={a_positiveReceive}
            />
            <Card
              unit={b_positiveneed}
              image={bType}
              recieve={b_positiveReceive}
            />
            <Card
              unit={o_positiveneed}
              image={oType}
              recieve={o_positiveReceive}
            />
            <Card
              unit={ab_positiveneed}
              image={abType}
              recieve={ab_positiveReceive}
            />
          </View>
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Text>กรุ๊ปเลือดพิเศษที่ต้องการ</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              gap: 15,
              marginHorizontal: 10,
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            <Label bloodType={"A-"} unit={a_negative} />
            <Label bloodType={"B-"} unit={b_negative} />
            <Label bloodType={"O-"} unit={o_negative} />
            <Label bloodType={"AB-"} unit={ab_negative} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default BloodScreen;
