import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import Button from "../components/Button";

const Lab1 = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.bbb}>
        <Text>{count}</Text>
        <Button onPress={() => {setCount(count + 1);}}>
            title={"+1"}
        </Button>
    </View>
  );
};
const styles = StyleSheet.create({
    bbb:{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        gap: 10,
    },
});
export default Lab1;