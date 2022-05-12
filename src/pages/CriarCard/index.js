import { Text, Button } from "react-native";
import Bar from "../../components/Bar";

export default function CriarCard({navigation})
{
    return <>
        <Bar/>
        <Text>CriarCard</Text>
        <Button title="Voltar" onPress={()=> navigation.goBack()}/>
    </>
}