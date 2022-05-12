import {View, Text, TouchableOpacity, StyleSheet} from "react-native";


export default function NavBar({navigation})
{
    return <View style={style.view}>
        <Text style={style.title}>
            Clock Work
        </Text>
        <View style={style.viewButtons}>
            <TouchableOpacity onPress={()=> navigation.navigate('AFazer')} style={style.button}>
                <Text style={style.textButton}>A Fazer</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('Fazendo')} style={style.button}>
                <Text style={style.textButton}>Fazendo</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('Feito')} style={style.button}>
                <Text style={style.textButton}>Feito</Text>
            </TouchableOpacity>
        </View>
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
    viewButtons: {
        flexDirection: "row"
    },
    button: {
        width: "33.33%",
        padding: 20,
        textAlign: "center",
    },
    textButton: {
        color: "white",
        fontSize: 13
    }
  })