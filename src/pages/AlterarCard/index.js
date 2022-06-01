import React from "react";
import { Text, TextInput, StyleSheet, TouchableOpacity} from "react-native";
import Bar from "../../components/Bar";
import { storeData, getData } from "../../../App";
import { View } from "react-native-web";

export default function AlterarCard({navigation, route})
{
    const titulo = route.params['titulo'];
    const descricaoAntiga = route.params['descricaoAntiga']
    const [nome, onChangeNome] = React.useState("");
    const [descricao, onChangeDescricao] = React.useState("");
    return <>
        <Bar/>
        <View style={style.viewCard}>
            <Text style={style.titulo}>Alterar Card</Text>
            <Text>Titulo:</Text>
            <TextInput
                onChangeText={onChangeNome}
                placeholder={titulo}
                value={nome}
                style={style.textInput}
            />
            <Text>Descrição:</Text>
            <TextInput
                onChangeText={onChangeDescricao}
                placeholder={descricaoAntiga}
                value={descricao}
                style={style.textInput}
            />
            <View style={style.buttonsContext}>
                <TouchableOpacity title="Voltar" onPress={()=> navigation.goBack()} style={style.button}>
                    <Text style={style.text}>Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity title="Criar" onPress={
                    () => {
                        getData("listaAFazer").then((result) => {
                            var lista = []
                            if(JSON.parse(result) != null)
                            {
                                lista = JSON.parse(result).lista;
                            }
                            for(var i = 0; i < lista.length; i++)
                            {
                                if(lista[i].Nome == titulo)    
                                {
                                    lista.splice(i, 1)
                                    lista.splice(i, 0, {"Nome": nome, "Descricao": descricao})
                                }
                            }
                            storeData("listaAFazer", JSON.stringify({lista: lista}))
                            navigation.navigate("AFazer", {created: true, valorCriado: JSON.stringify({lista: lista})})
                        })
                    }
                    
                } style={style.button2}>
                    <Text style={style.text}>
                        Salvar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>

    </>
}

const style = StyleSheet.create({
    textInput: {
        alignSelf: "center",
        margin: 15,
        padding: 15,
        borderRadius: 10,
        width: "80%",
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    titulo:
    {
        fontSize: 20,
        fontWeight: "bold",
        margin: 20
    },
    viewCard:
    {
        margin: 40,
        width: "80%",
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        alignSelf: "center",
        alignItems: "center",
        borderRadius: 20,
    },
    buttonsContext:
    {
        marginTop:40,
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        alignSelf: "center"
    },
    button:
    {
        textAlign: "center",
        width: "50%",
        padding: 15,
        backgroundColor: "#FF3355",
        alignItems: "center",
        alignSelf: "center",
        borderBottomLeftRadius: 20
    },
    button2:
    {
        textAlign: "center",
        width: "50%",
        padding: 15,
        backgroundColor: "#3557BD",
        alignItems: "center",
        alignSelf: "center",
        borderBottomRightRadius: 20,
    },
    text:
    {
        color: "white"
    }
});