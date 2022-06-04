import React, { useState } from 'react';
import { Text, StyleSheet } from "react-native";
import { useWindowDimensions} from "react-native";

export default function SemDados({lista})
{
    const { height, width } = useWindowDimensions();

    const style = StyleSheet.create({
        float: {
            textAlign: 'center',
            position: "absolute",
            top: height/6,
            alignSelf: "center",
            fontSize: 20,
            opacity: "50%"
        }
    })
    if(lista == null || lista.length == 0)
    {
        return <Text style={style.float}>
            Não existem cards nessa aba
        </Text>
    }
    return<Text></Text>  
}

