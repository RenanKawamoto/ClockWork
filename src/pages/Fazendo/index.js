import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from "react-native";
import { useWindowDimensions} from "react-native";
import NavBar from "../../components/NavBar";
import SemDados from '../../components/SemDados';
import { getData, storeData } from '../../../App';

import Card from '../../components/CardFazendo';

export default function Fazendo({route, navigation})
{
    const { height, width } = useWindowDimensions();
    const style = StyleSheet.create({
        flatList: {
            height: height - 100
        }
    })
    const parametrosDaRota = route.params;
    const [listaFazendo, setListaFazendo] = useState({lista:[]});
    getData("listaFazendo").then((result) => {
        if(result !== null)
        {
            setListaFazendo(result);
        }
        else
        {
            storeData("listaFazendo", JSON.stringify({lista: []}));
        }
    })
    if(parametrosDaRota != undefined)
    {
        if(parametrosDaRota['fazendoParaFeito'])
        {
            getData("listaFazendo").then((result) => {
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
                storeData("listaFazendo", JSON.stringify({lista: lista}))
                navigation.navigate('Feito', {fazendoParaFeito: true, titulo: parametrosDaRota['titulo'], descricao: parametrosDaRota['descricao']})
            })
        }
        if(parametrosDaRota['feitoParaFazendo'])
        {        
            getData("listaFazendo").then((result) => {
                var lista = []
                if(JSON.parse(result) != null)
                {
                    lista = JSON.parse(result).lista;
                }
                lista.unshift({Nome: parametrosDaRota['titulo'], Descricao: parametrosDaRota['descricao']});
                storeData("listaFazendo", JSON.stringify({lista: lista}))
                navigation.navigate('Feito')
            })         
        }
        if(parametrosDaRota['aFazerParaFazendo'])
        {        
            getData("listaFazendo").then((result) => {
                var lista = []
                if(JSON.parse(result) != null)
                {
                    lista = JSON.parse(result).lista;
                }
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
        if(parametrosDaRota['fazendoParaAfazer'])
        {
            getData("listaFazendo").then((result) => {
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
                storeData("listaFazendo", JSON.stringify({lista: lista}))
                navigation.navigate('AFazer', {fazendoParaAfazer: true, titulo: parametrosDaRota['titulo'], descricao: parametrosDaRota['descricao']})
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
            <SemDados lista={cardsList}/>
          </View>
        );
    }
    return <>
        <NavBar navigation={navigation} aba={route.name}/>
        <FlatListBasics style={style.flatList}/>
    </>
}

