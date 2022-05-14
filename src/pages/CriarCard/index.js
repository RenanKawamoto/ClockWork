import React from "react";
import { Text, TextInput, Button } from "react-native";
import Bar from "../../components/Bar";
import { storeData, getData } from "../../../App";

export default function CriarCard({navigation})
{
    const [nome, onChangeNome] = React.useState("");
    return <>
        <Bar/>
        <Text>CriarCard</Text>
        <TextInput
            onChangeText={onChangeNome}
            placeholder="Nome da atividade"
            value={nome}
        />

        <Button title="Criar" onPress={
            () => {
                getData("listaAFazer").then((result) => {
                    if(result == null)
                    {
                        var listaAFazerSemTarefas = JSON.stringify({"lista":[]})
                        storeData("listaAFazer", listaAFazerSemTarefas);
                        return;
                    }
                    var resultJSON = JSON.parse(result)
                    resultJSON["lista"].push({"Nome": nome, "CheckBox": false, "Checks": []})
                    storeData("listaAFazer", JSON.stringify(resultJSON))
                })
            }
        }></Button>
        <Button title="Voltar" onPress={()=> navigation.goBack()}/>
    </>
}