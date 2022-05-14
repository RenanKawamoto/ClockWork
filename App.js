import React, { useState } from 'react';
import { SafeAreaView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AsyncStorage from '@react-native-async-storage/async-storage';

import AFazer from './src/pages/AFazer';
import Fazendo from './src/pages/Fazendo';
import Feito from './src/pages/Feito';
import CriarCard from './src/pages/CriarCard';

const Stack = createNativeStackNavigator();

export const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (e) {
    // saving error
  }
}

export const getData = async (key) => {
  try {
    return await AsyncStorage.getItem(key)
  } catch(e) {
    // read error
  }
}

export default function App() {
  return (
    <SafeAreaView>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="AFazer">
          <Stack.Screen name="AFazer" component={AFazer}/>
          <Stack.Screen name="Fazendo" component={Fazendo}/>
          <Stack.Screen name="Feito" component={Feito}/>
          <Stack.Screen name="CriarCard" component={CriarCard}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}


