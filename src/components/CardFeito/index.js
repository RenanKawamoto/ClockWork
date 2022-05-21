import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


export default function CardFazendo({ titulo, descricao, navigation })
{
    var desc = descricao;
    if(descricao.length > 30)
    {
        desc = descricao.substring(0,30) + "...";
    }
    return <View style={[style.view, style.shadowProps]}>
        <Text style={style.titulo}>{titulo}</Text>
        <Text style={style.descricao}>{desc}</Text>
        <View style={style.viewButtons}>
            <TouchableOpacity style={style.button} onPress={() => navigation.navigate('Feito', {deleteFeitoCard: true, titulo: titulo}) }>
                <Text style={style.excluir}>Excluir</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.button}>
                <Text>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.button}>
                <Text>Fazendo</Text>
            </TouchableOpacity>
        </View>
    </View>
}

const style = StyleSheet.create({
    view: {
        alignSelf: "center",
        width: "90%",
        height: 130,
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
        alignSelf: "right",
        flexDirection: "row"
    },
    button: {
        width: "25%",
        textAlign: "right",
        padding: 10
    },
    excluir: {
        color: "red"
    }
});