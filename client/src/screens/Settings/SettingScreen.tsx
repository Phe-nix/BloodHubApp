import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons"; // Assuming you're using Expo for FontAwesome

type SectionHeaderProps = {
  title: string;
};

type SettingOptionProps = {
  title: string;
  icon: string;
};

const SettingScreen: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      <SectionHeader title="General Settings" />
      <View style={styles.settingGroup}>
        <SettingOption title="My Profile" icon="user" />
        <SettingOption title="My Address" icon="home" />
        <SettingOption title="Notifications" icon="bell" />
      </View>
      <SectionHeader title="Information" />
      <View style={styles.settingGroup}>
        <SettingOption title="History" icon="history" />
        <SettingOption title="Bookmarks" icon="bookmark" />
      </View>
      <SectionHeader title="Help & About" />
      <View style={styles.settingGroup}>
        <SettingOption title="Help Center" icon="question-circle" />
        <SettingOption title="About" icon="info-circle" />
      </View>
    </ScrollView>
  );
};

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => (
  <View style={styles.sectionHeader}>
    <Text style={[styles.sectionHeaderText, styles.redText]}>{title}</Text>
  </View>
);

const SettingOption: React.FC<SettingOptionProps> = ({ title, icon }) => (
  <TouchableOpacity style={styles.settingOption}>
    <View style={styles.settingTextContainer}>
      <FontAwesome name={icon} style={styles.settingIcon} />
      <Text style={styles.settingOptionText}>{title}</Text>
    </View>
    <FontAwesome name="angle-right" style={styles.rightIcon} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  sectionHeader: {
    backgroundColor: "#F2F2F2",
    paddingVertical: 10,
    paddingLeft: 15,
    marginBottom: 10,
    borderBottomColor: "red",
    borderBottomWidth: 1,
  },
  sectionHeaderText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  redText: {
    color: "black",
  },
  settingGroup: {
    backgroundColor: "#E2E2E2",
    borderRadius: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  settingOption: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  settingOptionText: {
    fontSize: 16,
    marginLeft: 10,
  },
  rightIcon: {
    fontSize: 20,
    color: "gray", // Change the color to your preference
  },
  settingTextContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingIcon: {
    fontSize: 20,
    marginRight: 10,
    color: "black", // Change the color to your preference
  },
});

export default SettingScreen;
