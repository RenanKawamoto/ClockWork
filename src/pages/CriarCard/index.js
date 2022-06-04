import React from "react";
import { Text, TextInput, Button, StyleSheet, TouchableOpacity} from "react-native";
import Bar from "../../components/Bar";
import { storeData, getData } from "../../../App";
import { View } from "react-native-web";

export default function CriarCard({navigation})
{
    const [nome, onChangeNome] = React.useState("");
    const [descricao, onChangeDescricao] = React.useState("");
    function ButtonCriar({nome})
    {
        if(nome!=null && nome!="" && descricao!=null && descricao!="")
        {
            return <TouchableOpacity onPress={
                () => {
                    getData("listaAFazer").then((result) => {
                        var resultJSON = {"lista": []}
                        if(result != null)
                        {
                            var resultJSON = JSON.parse(result)
                        }
                        resultJSON["lista"].push({"Nome": nome, "Descricao": descricao})
                        storeData("listaAFazer", JSON.stringify(resultJSON))
                        navigation.navigate("AFazer", {created: true, valorCriado: JSON.stringify(resultJSON)})
                    })
                }
            }  style={style.button2}>
                <Text style={style.text}>Criar</Text>
            </TouchableOpacity>
        }
        return <TouchableOpacity style={style.button2}>
            <Text style={style.text}>Criar</Text>
        </TouchableOpacity>
    }
    return <>
        <Bar/>
        <View style={style.viewCard}>
            <Text style={style.titulo}>CriarCard</Text>
            <TextInput
                onChangeText={onChangeNome}
                placeholder="Nome da atividade (obrigatoria)"
                value={nome}
                style={style.textInput}
            />
            <TextInput
                onChangeText={onChangeDescricao}
                placeholder="Descricao (obrigatoria)"
                value={descricao}
                style={style.textInput}
            />
            <View style={style.buttonsContext}>
                <TouchableOpacity onPress={()=> navigation.goBack()} style={style.button}>
                    <Text style={style.text}>Voltar</Text>
                </TouchableOpacity>
                <ButtonCriar nome={nome}/>
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