import {View, Text, StyleSheet} from "react-native";

export default function Bar()
{
    return <View style={style.view}>
        <Text style={style.title}>
            Clock Work
        </Text>
    </View>
}

export const style = StyleSheet.create({
    view: {
        backgroundColor: '#3557BD',
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
        borderBottomColor: '#404040',
        borderBottomWidth: 1,
        padding: 24,
    },
});