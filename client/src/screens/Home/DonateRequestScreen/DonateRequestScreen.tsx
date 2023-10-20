import { Text, View } from "react-native";
import {styles} from "./DonateRequestScreen.style"
import Request from "../Components/Request/Request"
import Profile from "../../../../assets/picture/kitten.png"



const DonateRequestScreen = () => {
    return (
        <View style={styles.background}>
            <View style={styles.container}>
                <Text style={styles.lastestRequest}>คำขอบริจาคล่าสุด</Text>
                <Request profile={Profile} name={"ศุภณัฐ อนุมาตร"} time={"22 พ.ค. 2546 · สุราษฎร์ธานี"} Tel={"0987654321"} Blood={"O-Negative"} Age={"อายุ 18 ปี"} Disease={"ภูมิแพ้"} />
                <Request profile={Profile} name={"ศุภณัฐ อนุมาตร"} time={"22 พ.ค. 2546 · สุราษฎร์ธานี"} Tel={"0987654321"} Blood={"O-Negative"} Age={"อายุ 18 ปี"} Disease={"ภูมิแพ้"} />
            </View>
        </View>
    )
}

export default DonateRequestScreen