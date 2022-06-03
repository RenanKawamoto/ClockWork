import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


export default function CardFazendo({ titulo, descricao, navigation })
{
    var desc = descricao;
    if(descricao.length > 30)
    {
        desc = descricao.substring(0,30) + "...";
    }
    return <View style={[style.view, style.shadowProps]}>
        <View style={style.tituloEDescricaoView}>
            <Text style={style.titulo}>{titulo}</Text>
            <Text style={style.descricao}>{desc}</Text>
        </View>
        <View style={style.viewButtons}>
            <TouchableOpacity style={[style.button, style.left]} onPress={() => navigation.navigate('Feito', {feitoParaFazendo: true, titulo: titulo, descricao: descricao}) }>
                <Text style={style.texto}>Fazendo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[style.button, style.right]} onPress={() => navigation.navigate('Feito', {deleteFeitoCard: true, titulo: titulo}) }>
                <Text style={style.excluir}>Excluir</Text>
            </TouchableOpacity>
        </View>
    </View>
}

const style = StyleSheet.create({
    view: {
        alignSelf: "center",
        width: "90%",
        height: 144,
        borderRadius: 15,
        marginTop: 40,
        marginBottom: 10
    },
    tituloEDescricaoView: {
        width: "100%",
        padding: 15
    },  
    titulo: {
        fontSize: 24,
        fontWeight: "bold"
    },
    descricao: {
        fontSize: 15,
        color: "#606060",
        margin: 12
    },
    shadowProps: {
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 9,
    },
    viewButtons: {
        width: "100%",
        alignSelf: "center",
        flexDirection: "row"
    },
    button: {
        width: "50%",
        padding: 13,
        backgroundColor: "#3557BD",
    },
    left: {
        borderBottomLeftRadius: 10,
    },
    right: {
        borderBottomRightRadius: 10,
        backgroundColor: "#FF4444",
        borderColor: "#303030",
        borderLeftWidth: 1
    },
    texto: {
        alignSelf: "center",
        fontWeight: "bold",
        color: "white"
    },
    excluir: {
        color: "white",
        fontWeight: "bold",
        alignSelf: "center"
    },
    tituloEDescricaoView: {
        width: "100%",
        padding: 15
    },  
});