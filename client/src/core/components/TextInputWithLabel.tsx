import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

interface TextInputWithLabelProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean; // Make secureTextEntry optional
  editable?: boolean; // Add an editable prop
}

const TextInputWithLabel: React.FC<TextInputWithLabelProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false, // Default value is false
  editable = true, // Set a default value
}) => {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.fieldTitle}>{label}</Text>
      <TextInput
        style={styles.fieldValue}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry} // Use the secureTextEntry prop
        editable={editable} // Apply the editable prop
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fieldContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  fieldTitle: {
    width: 100,
    fontWeight: "bold",
    fontSize: 16,
  },
  fieldValue: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#ED8085",
    paddingVertical: 4,
    fontSize: 16,
  },
});

export default TextInputWithLabel;
