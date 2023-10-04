import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 10
  },
  profile: {
    flexDirection: "row",
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'red',
    marginRight: 10,
  },
  userName: {
    fontSize: 16
  },
  subHeader: {
    fontSize: 12,
    color: '#856464'
  },
  addPhoto: {
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#505050',
    // height: 150,
    alignItems: 'center',
  },
  addIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  underline: {
    borderWidth: 0.5,
    borderColor: '#909090',
    marginVertical: 5
  },
  input: {
    borderWidth: 0.5,
    borderColor: '#505050',
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  button:{
    borderRadius: 100,
    backgroundColor: '#ED8085',
    margin: 5,
    paddingVertical: 10,
  },
  text:{
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  }
});