import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from "react-native";
import NavBar from "../../components/NavBar";
import { useWindowDimensions} from "react-native";

import { getData, storeData } from '../../../App';

import Card from '../../components/CardFeito';

export default function Feito({route, navigation})
{
    const parametrosDaRota = route.params;
    const [listaFeito, setListaFeito] = useState({lista:[]});
    const { height, width } = useWindowDimensions();
    const style = StyleSheet.create({
        flatList: {
            height: height - 100
        }
    })
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
        if(parametrosDaRota['feitoParaFazendo'])
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
                navigation.navigate('Fazendo', {feitoParaFazendo: true, titulo: parametrosDaRota['titulo'], descricao: parametrosDaRota['descricao']})
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
        <NavBar navigation={navigation} aba={route.name}/>
        <FlatListBasics/>
    </>
}