import { View, Text, StyleSheet } from "react-native";


export default function Card({ titulo, descricao })
{
    return <View style={[style.view, style.shadowProps]}>
        <Text style={style.titulo}>{titulo}</Text>
        <Text style={style.descricao}>{descricao}</Text>
    </View>
}

const style = StyleSheet.create({
    view: {
        alignSelf: "center",
        width: "90%",
        height: 100,
        padding: 15,
        borderRadius: 15,
        marginTop: 10,
        marginBottom: 10
    },
    titulo: {
        fontSize: 24,
        fontWeight: "bold"
    },
    descricao: {
        fontSize: 15,
        color: "#606060"
    },
    shadowProps: {
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 9,
    },
});


