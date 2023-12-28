import { View, Text } from "react-native";
import Button from "../components/Button";


const Lab3 = ({navigation}) => {


  return (
    <View
      style={{
        padding: 14,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
    <Button title={"с useMemo"} onPress={()=>navigation.navigate('lab3.1')}/>
    <Button title={"без useMemo"} onPress={()=>navigation.navigate('lab3.2')}/>

    </View>
  );
};

export default Lab3;
