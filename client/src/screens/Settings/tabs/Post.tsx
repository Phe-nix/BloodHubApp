import React from "react";
import { View, StyleSheet } from "react-native";
import SmallPostBox from "../../../core/components/SmallPostBox";
const App = () => {
  const handleDeletePost = () => {
    // Implement your logic for deleting the post here
    // This function can be passed as the onDelete prop to the SmallPostBox component
    console.log("Post deleted!");
  };

  return (
    <View style={styles.bgcolor}>
      <SmallPostBox onDelete={handleDeletePost} />
    </View>
  );
};

const styles = StyleSheet.create({
    bgcolor:{
        backgroundColor: "white",
        flex: 1,
    }
});
export default App;
