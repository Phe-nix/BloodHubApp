import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Button } from "../../core/components/Button";
import { styles } from "./style/EditAddressScreen.style";

const ProfileEditScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.border}>
        <Text style={styles.title}>Current location</Text>
        <Text style={styles.address}>123 Main Street, City, Country asndadadas, Thalind, 10230</Text>
      </View>
      <Button
          title="Change Location"
          buttonWidth={70}
          buttonHeight={15}
          to="Edit My Address"
          navigation={navigation}
        />
    </View>
  );
};


export default ProfileEditScreen;
