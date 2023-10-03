import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import SmallNewsBox from "../../../core/components/SmallNewsBox";

const News: React.FC = () => {
  const [isVisibleArray, setIsVisibleArray] = useState([true, true, true]); // Initialize with three components visible

  const handleBookmark = (index: number) => {
    // Hide the SmallNewsBox component at the specified index when the bookmark icon is clicked
    const updatedVisibility = [...isVisibleArray];
    updatedVisibility[index] = false;
    setIsVisibleArray(updatedVisibility);
  };

  return (
    <ScrollView style={styles.bgcolor}>
      {isVisibleArray.map((isVisible, index) => (
        <SmallNewsBox
          key={index}
          isVisible={isVisible}
          onBookmarkPress={() => handleBookmark(index)}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bgcolor: {
    backgroundColor: "white",
    flex: 1,
  },
});

export default News;
