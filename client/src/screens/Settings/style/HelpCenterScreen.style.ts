import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E99999",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 30,
    padding:10,
    margin: 20,
    width: "auto",
  },
  searchInput: {
    marginLeft: 12,
    fontSize: 15,
    color: "#000000",
  },
  whitecontainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: "100%",
    padding: 20 // Add padding to your content as needed
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10
  },
  resourceItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
    // Adjust the spacing between items as needed
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#E99999",
    justifyContent: "center",
    alignItems: "center",
  },
  resourceTitle: {
    fontSize: 18,
    color: "black",
    marginLeft: 10
  },
});

