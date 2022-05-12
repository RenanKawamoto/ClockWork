import { Text } from "react-native";
import NavBar from "../../components/NavBar";

export default function Fazendo({navigation})
{
    return <>
        <NavBar navigation={navigation}/>
        <Text>Fazendo</Text>
    </>
}