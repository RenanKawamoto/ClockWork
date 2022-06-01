import React from "react";
import { Text, TextInput, Button } from "react-native";
import Bar from "../../components/Bar";
import { storeData, getData } from "../../../App";

export default function AlterarCard({navigation, route})
{
    const titulo = route.params['titulo'];
    const descricaoAntiga = route.params['descricaoAntiga']
    const [nome, onChangeNome] = React.useState("");
    const [descricao, onChangeDescricao] = React.useState("");
    return <>
        <Bar/>
        <Text>Titulo:</Text>
        <TextInput
            onChangeText={onChangeNome}
            placeholder={titulo}
            value={nome}
        />
        <Text>Descrição:</Text>
        <TextInput
            onChangeText={onChangeDescricao}
            placeholder={descricaoAntiga}
            value={descricao}
        />

        <Button title="Criar" onPress={
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
            
        }></Button>
        <Button title="Voltar" onPress={()=> navigation.goBack()}/>
    </>
}