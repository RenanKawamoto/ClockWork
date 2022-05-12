import { Text } from "react-native";
import NavBar from "../../components/NavBar";
import PlusButton from "./components/PlusButton";

export default function AFazer({navigation})
{
    return <>
        <NavBar navigation={navigation}/>
        <Text>A Fazer</Text>
        <PlusButton navigation={navigation}/>
    </>
}