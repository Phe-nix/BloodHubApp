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
      <SmallPostBox onDelete={handleDeletePost} />
  );
};

export default App;
