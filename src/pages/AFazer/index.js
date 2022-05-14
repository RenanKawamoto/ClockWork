import React, { useState } from 'react';
import { Text, FlatList, View, StyleSheet } from "react-native";
import NavBar from "../../components/NavBar";
import PlusButton from "./components/PlusButton";

import { getData } from '../../../App';

import Card from '../../components/Card';

export default function AFazer({route, navigation})
{
    const created = route.params;
    const [listaAFazer, setListaAFazer] = useState([]);
    getData("listaAFazer").then((result) => {
        if(result !== null)
        {
            setListaAFazer(result);
        }
    })
    if(created != undefined)
    {
        if(created['created'])
        {        
            getData("listaAFazer").then((result) => {
                if(result !== null)
                {
                    setListaAFazer(created['valorCriado']);       
                }
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
              renderItem={({item}) => <Card titulo={item.Nome} descricao={item.Descricao}/>}
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