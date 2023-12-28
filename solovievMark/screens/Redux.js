import {
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  StyleSheet,
  ScrollView,
  Image,
  useMe,
  Button,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../reduxComponents/reduxCounter";

const Redux = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(increment())}
      >
        <Text>+1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => dispatch(decrement())}
      >
        <Text>-1</Text>
      </TouchableOpacity>
      <Text>{count}</Text>

      <StatusBar style="auto" />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
});

export default Redux;
