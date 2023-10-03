import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Icon, Switch } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./style/EditNotificationScreen.style";

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

export default ManageNotificationsScreen;
