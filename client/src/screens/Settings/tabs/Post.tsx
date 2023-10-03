import React from "react";
import { View, StyleSheet } from "react-native";
import SmallPostBox from "../../../core/components/SmallPostBox";

const Post = () => {
  const handleDeletePost = () => {
    // Implement your logic for deleting the post here
    // This function can be passed as the onDelete prop to the Post component
    console.log("Post deleted!");
  };

  return (
      <SmallPostBox onDelete={handleDeletePost} />
  );
};
export default Post;
