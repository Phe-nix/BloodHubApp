import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  ScrollView,
  Image,
  ViewStyle,
} from "react-native";
import Swiper from "react-native-swiper";
import { styles } from "./BloodScreen.style";
import axios from "axios";

import Siriraj from "../../../assets/hospital/Siriraj.png";
import aType from "../../../assets/hospital/Blood_A.png";
import bType from "../../../assets/hospital/Blood_B.png";
import oType from "../../../assets/hospital/Blood_O.png";
import abType from "../../../assets/hospital/Blood_AB.png";
import Card from "./components/Card";
import Label from "./components/Label";

interface Hospital {
  image: any; // Update the type accordingly
  name: string;
}

const BloodScreen = () => {
  const hospitals: Hospital[] = [
    { image: Siriraj, name: "โรงพยาบาลศิริราช" },
    { image: Siriraj, name: "โรงพยาบาลกรุงเทพ" },
    { image: Siriraj, name: "โรงพยาบาลกรุงเทพ" },
    { image: Siriraj, name: "โรงพยาบาลกรุงเทพ" },
    { image: Siriraj, name: "โรงพยาบาลกรุงเทพ" },
  ];
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

  const _renderItem = (item: Hospital, index: number) => (
    <View style={{ alignItems: "center" }} key={index}>
      <Image source={item.image} style={{ width: 300, height: 200 }} />
      <Text style={styles.hospitalName}>{item.name}</Text>
    </View>
  );

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/blood");
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
  }, []);

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
          <View style={{ alignContent: "center", alignItems: "center" }}>
            <Swiper
              style={{ height: 280 }}
              showsButtons={false}
              dotStyle={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 5,
                backgroundColor: "rgba(0,0,0,.2)",
              }}
              activeDotStyle={{
                width: 30,
                height: 12,
                borderRadius: 6,
                marginHorizontal: 5,
                backgroundColor: "#F0888C",
              }}
            >
              {hospitals.map((item: Hospital, index: number) =>
                _renderItem(item, index)
              )}
            </Swiper>
          </View>
          <View style={styles.underLine_2} />
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
