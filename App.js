import {SafeAreaView} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AFazer from './src/pages/AFazer';
import Fazendo from './src/pages/Fazendo';
import Feito from './src/pages/Feito';
import CriarCard from './src/pages/CriarCard';

const Stack = createNativeStackNavigator();

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


