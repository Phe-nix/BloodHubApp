import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Icon, Switch } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

const ManageNotificationsScreen = () => {
  const [isNotificationMuted, setNotificationMuted] = useState(false);
  const [isNewsNotification, setNewsNotification] = useState(false);
  const [isEmergencyPostNotification, setEmergencyPostNotification] = useState(false);
  const [isGeneralPostNotification, setGeneralPostNotification] = useState(false);


  const toggleNotificationMute = () => {
    const newValue = !isNotificationMuted;
    setNotificationMuted(newValue);
    setNewsNotification(newValue);
    setEmergencyPostNotification(newValue);
    setGeneralPostNotification(newValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Manage Your Notifications</Text>
      <View style={styles.notificationSettingRow}>
        <Icon
          name="bell"
          type="font-awesome"
          color="gray"
          size={28}
          iconStyle={styles.bellIcon}
        />
        <Text style={styles.muteText}>Mute All Notifications</Text>
        <Text style={styles.onOffText}>{isNotificationMuted ? "On" : "Off"}</Text>
        <Switch
          value={isNotificationMuted}
          onValueChange={toggleNotificationMute}
          color="#ED8085"
        />
      </View>
      <View style={styles.notificationSetting}>
        <Text style={styles.additionalText}>
          BloodHub may still send you important notifications about your account
          and news outside of your preferred notification settings.
        </Text>
      </View>
      <Text style={styles.title}>What Notifications You Receive</Text>
      <NotificationSettingRow
        title="News Notification"
        value={isNewsNotification}
        onValueChange={setNewsNotification}
      />
      <NotificationSettingRow
        title="Emergency Post Notification"
        value={isEmergencyPostNotification}
        onValueChange={setEmergencyPostNotification}
      />
      <NotificationSettingRow
        title="General Post Notification"
        value={isGeneralPostNotification}
        onValueChange={setGeneralPostNotification}
      />
    </View>
  );
};

const NotificationSettingRow = ({ title, value, onValueChange }:any) => {
  return (
    <View style={styles.notificationSettingRow}>
      <Icon
        name="newspaper-outline"
        type="ionicon"
        color="black"
        size={28}
        iconStyle={styles.bellIcon}
      />
      <Text style={styles.muteText}>{title}</Text>
      <Text style={styles.onOffText}>{value ? "On" : "Off"}</Text>
      <Switch
        value={value}
        onValueChange={onValueChange}
        color="#ED8085"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
    paddingLeft: 8,
  },
  notificationSetting: {
    borderTopColor: "#ED8085",
    borderTopWidth: 2,
    marginBottom: 24,
    marginTop: 16,
  },
  notificationSettingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  bellIcon: {
    marginRight: 16,
  },
  muteText: {
    flex: 1,
    fontSize: 18,
  },
  onOffText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 8,
    paddingRight: 16,
    color: "gray",
  },
  additionalText: {
    fontSize: 16,
    color: "gray",
    marginTop: 8,
  },
});

export default ManageNotificationsScreen;
