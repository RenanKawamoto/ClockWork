import React, { useState } from 'react';
import { Text, FlatList, View, StyleSheet } from "react-native";
import NavBar from "../../components/NavBar";
import PlusButton from "./components/PlusButton";

import { getData, storeData } from '../../../App';

import Card from '../../components/Card';

export default function AFazer({route, navigation})
{
    const parametrosDaRota = route.params;
    const [listaAFazer, setListaAFazer] = useState([]);
    getData("listaAFazer").then((result) => {
        if(result !== null)
        {
            setListaAFazer(result);
        }
    })
    if(parametrosDaRota != undefined)
    {
        if(parametrosDaRota['parametrosDaRota'])
        {        
            getData("listaAFazer").then((result) => {
                if(result !== null)
                {
                    setListaAFazer(parametrosDaRota['valorCriado']);       
                }
            })            
        }
        if(parametrosDaRota['deleteAFazerCard'])
        {
            getData("listaAFazer").then((result) => {
                var lista = []
                if(JSON.parse(result) != null)
                {
                    lista = JSON.parse(result).lista;
                }
                for(var i = 0; i < lista.length; i++)
                {
                    if(lista[i].Nome == parametrosDaRota['titulo'])    
                    {
                        lista.splice(i, 1)
                    }
                }
                storeData("listaAFazer", JSON.stringify({lista: lista}))
                navigation.navigate('AFazer')
            })
        }
        if(parametrosDaRota['aFazerParaFazendo'])
        {
            getData("listaAFazer").then((result) => {
                var lista = []
                if(JSON.parse(result) != null)
                {
                    lista = JSON.parse(result).lista;
                }
                for(var i = 0; i < lista.length; i++)
                {
                    if(lista[i].Nome == parametrosDaRota['titulo'])    
                    {
                        lista.splice(i, 1)
                    }
                }
                storeData("listaAFazer", JSON.stringify({lista: lista}))
                navigation.navigate('Fazendo', {aFazerParaFazendo: true, titulo: parametrosDaRota['titulo'], descricao: parametrosDaRota['descricao']})
            })
        }
    }
    var cardsList;
    try{
        cardsList = JSON.parse(listaAFazer).lista
    }
    catch(e)
    {
    }
    console.log(cardsList)
    const FlatListBasics = () => {
        return (
          <View>
            <FlatList
              data={cardsList}
              renderItem={({item}) => <Card titulo={item.Nome} descricao={item.Descricao} navigation={navigation}/>}
            />
          </View>
        );
    }
    return <>
        <NavBar navigation={navigation}/>
        <Text>A Fazer</Text>
        <FlatListBasics/>
        <PlusButton navigation={navigation}/>
    </>
}

const style = StyleSheet.create({
    flatList: {
    }
})