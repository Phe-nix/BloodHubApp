import { Image, StyleSheet, Text, View } from "react-native";

const AppHeader = ({header, subheader} : any) => {
  return (
    <View style={styles.headerApp}>
      <Image source={require("../../../assets/Logo.png")} style={styles.img}/>
      <Text style={styles.header}>{header}</Text>
      <Text style={[styles.subheader, styles.text]}>{subheader}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerApp: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 180,
    height: 180,
    marginTop: 30
  },
  header: {
    fontSize: 44,
    fontWeight: 'bold',
    color: '#333',
    marginVertical: 10
  },
  subheader: {
    fontSize: 16,
    lineHeight: 27,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#856464'
  },
  text: {
    color: '#856464'
  }
});

export default AppHeader;