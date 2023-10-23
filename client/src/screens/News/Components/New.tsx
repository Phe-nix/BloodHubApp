import { View, Image, Text } from "react-native"
import { styles } from "./New.style"
import bookmark from "../../../../assets/icon/icon_bookmark.png"

const New = (props: any) => {
    return (
        <View>
            <View style={styles.underLine} />
            <View style={styles.news}>
                <Image style={styles.newsPicture} source={{uri: props.image}} />
                <View style={styles.box}>
                    <View>
                        <Text style={styles.title}>{props.title}</Text>
                        <Text style={styles.description}>{props.description}</Text>
                    </View>
                    <View style={styles.timeAndBookmark}>
                        <Text style={styles.timeNews}>{props.time}</Text>
                        <Image style={styles.bookmarkIcon} source={bookmark} />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default New;