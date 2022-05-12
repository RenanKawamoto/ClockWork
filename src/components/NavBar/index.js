import {View, Text, TouchableOpacity, Button} from "react-native";


export default function NavBar({navigation})
{
    return <View>
        <Text>
            NavBar
        </Text>
        <View>
            <TouchableOpacity onPress={()=> navigation.navigate('AFazer')}>
                <Text>A Fazer</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('Fazendo')}>
                <Text>Fazendo</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('Feito')}>
                <Text>Feito</Text>
            </TouchableOpacity>
        </View>
    </View>
}

