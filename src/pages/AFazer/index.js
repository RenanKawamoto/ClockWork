import { Text } from "react-native";
import NavBar from "../../components/NavBar";

export default function AFazer({navigation})
{
    return <>
        <NavBar navigation={navigation}/>
        <Text>A Fazer</Text>
    </>
}