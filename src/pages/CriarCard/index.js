import { Text } from "react-native";
import NavBar from "../../components/NavBar";

export default function CriarCard({navigation})
{
    return <>
        <NavBar navigation={navigation}/>
        <Text>CriarCard</Text>
    </>
}