import {
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  StyleSheet,
  ScrollView,
  Image,
  useMe,
} from "react-native";
import Button from "../components/Button";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../reduxComponents/counterSlice";

const ReduxLab = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View style={styles.blackcontainer}>
        <Text
          style={{
            fontSize: 34,
            fontFamily: "IBMPlexMono_400Regular",
            color: "#F4D994",
          }}
        >
          {count}
        </Text>
        <Button title="+" onPress={() => dispatch(increment())} />
        <Button title="-" onPress={() => dispatch(decrement())} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  blackcontainer: {
    flex: 1,
    maxHeight: 250,
    width: 316,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#241808",
    borderRadius: 25,
  },
});

export default ReduxLab;
