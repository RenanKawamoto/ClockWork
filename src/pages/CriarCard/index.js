import React from "react";
import { Text, TextInput, Button } from "react-native";
import Bar from "../../components/Bar";
import { storeData, getData } from "../../../App";

export default function CriarCard({navigation})
{
    const [nome, onChangeNome] = React.useState("");
    const [descricao, onChangeDescricao] = React.useState("");
    return <>
        <Bar/>
        <Text>CriarCard</Text>
        <TextInput
            onChangeText={onChangeNome}
            placeholder="Nome da atividade"
            value={nome}
        />
        <TextInput
            onChangeText={onChangeDescricao}
            placeholder="Descricao da atividade"
            value={descricao}
        />

        <Button title="Criar" onPress={
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
        }></Button>
        <Button title="Voltar" onPress={()=> navigation.goBack()}/>
    </>
}