import {Text, TouchableOpacity, StyleSheet} from "react-native";
import { useWindowDimensions} from "react-native";


export default function PlusButton({navigation})
{
    const { height, width } = useWindowDimensions();

    const style = StyleSheet.create({
        button: {
            position: 'absolute',                                          
            width: 50,
            height: 50,
            backgroundColor: "#F8CC1D",
            borderRadius: 50,
            right: 20,
            bottom: 30
        },
        textButton: {
            color: "white",
            fontSize: 42,
            textAlign: "center"
        },
        shadowProps: {
            shadowColor: '#000000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.35,
            shadowRadius: 4,
        },
    });

    return <TouchableOpacity style={[style.button, style.shadowProps]} onPress={() => navigation.navigate('CriarCard')}>
        <Text style={style.textButton}>+</Text>
    </TouchableOpacity>
}

