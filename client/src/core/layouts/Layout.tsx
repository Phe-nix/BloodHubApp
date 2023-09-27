import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet } from "react-native";

interface Props {
  children: React.ReactNode
}

const Layer = ({children} : Props) => {
  return(
    <LinearGradient colors={['#F08286','#FAC8CA']} style={styles.linearGradient}>
      {children}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  linearGradient:{
    flex: 1,
  }
});
export default Layer;