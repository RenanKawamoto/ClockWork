import { Text } from "react-native";
import NavBar from "../../components/NavBar";

export default function Feito({navigation})
{
    return <>
        <NavBar navigation={navigation}/>
        <Text>Feito</Text>
    </>
}