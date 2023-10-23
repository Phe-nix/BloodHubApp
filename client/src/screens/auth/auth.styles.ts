import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerApp: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 150,
    height: 150,
  },
  header: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10,
  },
  subheader: {
    fontSize: 16,
    lineHeight: 27,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerPanel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 20,
  },
  panel: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    height: '100%',
    shadowColor: '#171717',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#856464',
    width: '100%',
    paddingVertical: 10,

  },
  text: {
    color: '#856464',
  },
  // RNPickerSelect styles
});

export const pickerSelectStyles = {
  inputIOS: {
    color: '#856464', // Your text color
  },
};
