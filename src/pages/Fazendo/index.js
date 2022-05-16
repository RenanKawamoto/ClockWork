import React, { useState } from 'react';
import { Text, View, FlatList } from "react-native";
import NavBar from "../../components/NavBar";

import { getData, storeData } from '../../../App';

import Card from '../../components/CardFazendo';

export default function Fazendo({route, navigation})
{
    const parametrosDaRota = route.params;
    const [listaFazendo, setListaFazendo] = useState({lista:[]});
    getData("listaFazendo").then((result) => {
        if(result !== null)
        {
            setListaFazendo(result);
        }
        else
        {
            console.log("AQuiiiii")
            storeData("listaFazendo", JSON.stringify({lista: []}));
        }
    })
    if(parametrosDaRota != undefined)
    {
        if(parametrosDaRota['aFazerParaFazendo'])
        {        
            getData("listaFazendo").then((result) => {
                console.log(JSON.parse(result))
                var lista = JSON.parse(result).lista;
                lista.unshift({Nome: parametrosDaRota['titulo'], Descricao: parametrosDaRota['descricao']});
                storeData("listaFazendo", JSON.stringify({lista: lista}))
                navigation.navigate('AFazer')
            })         
        }
        if(parametrosDaRota['deleteFazendoCard'])
        {
            getData("listaFazendo").then((result) => {
                var lista = JSON.parse(result).lista;
                for(var i = 0; i < lista.length; i++)
                {
                    if(lista[i].Nome == parametrosDaRota['titulo'])    
                    {
                        lista.splice(i, 1)
                    }
                }
                storeData("listaFazendo", JSON.stringify({lista: lista}))
                navigation.navigate('Fazendo')
            })
        }
    }
    var cardsList;
    try{
        cardsList = JSON.parse(listaFazendo).lista
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
        <Text>Fazendo</Text>
        <FlatListBasics/>
    </>
}