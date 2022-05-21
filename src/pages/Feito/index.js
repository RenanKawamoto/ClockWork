import React, { useState } from 'react';
import { Text, View, FlatList } from "react-native";
import NavBar from "../../components/NavBar";

import { getData, storeData } from '../../../App';

import Card from '../../components/CardFeito';

export default function Feito({route, navigation})
{
    const parametrosDaRota = route.params;
    const [listaFeito, setListaFeito] = useState({lista:[]});
    getData("listaFeito").then((result) => {
        if(result !== null)
        {
            setListaFeito(result);
        }
        else
        {
            storeData("listaFeito", JSON.stringify({lista: []}));
        }
    })
    if(parametrosDaRota != undefined)
    {
        if(parametrosDaRota['fazendoParaFeito'])
        {        
            getData("listaFeito").then((result) => {
                var lista = []
                if(JSON.parse(result) != null)
                {
                    lista = JSON.parse(result).lista;
                }
                lista.unshift({Nome: parametrosDaRota['titulo'], Descricao: parametrosDaRota['descricao']});
                storeData("listaFeito", JSON.stringify({lista: lista}))
                navigation.navigate('Fazendo')
            })         
        }
        if(parametrosDaRota['deleteFeitoCard'])
        {
            getData("listaFeito").then((result) => {
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
                storeData("listaFeito", JSON.stringify({lista: lista}))
                navigation.navigate('Feito')
            })
        }
    }
    var cardsList;
    try{
        cardsList = JSON.parse(listaFeito).lista
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
        <Text>Feito</Text>
        <FlatListBasics/>
    </>
}