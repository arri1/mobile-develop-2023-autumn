import { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  StyleSheet,
  useCallback,
} from "react-native";
import Button from "../components/Button";
import {
  useFonts,
  IBMPlexMono_400Regular,
} from "@expo-google-fonts/ibm-plex-mono";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement100,
  increment100,
  decrement50,
} from "../reduxComponents/counterSlice";
const Lab1 = () => {
  let [fontsLoaded] = useFonts({
    IBMPlexMono_400Regular,
  });
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.blackcontainer}>
        <View style={styles.numbercontainer}>
          <Text
            style={{
              fontSize: 34,
              fontFamily: "IBMPlexMono_400Regular",
              color: "#F4D994",
            }}
          >
            {count}
          </Text>
        </View>
        <View style={styles.buttonontainer}>
          <Button title="+100" onPress={() => dispatch(increment100())} />
          <Button title="-100" onPress={() => dispatch(decrement100())} />
          <Button title="-50" onPress={() => dispatch(decrement50())} />
          <StatusBar style="auto" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    marginTop: 128,

    backgroundColor: "#F7F6F1",
    alignItems: "center",
  },
  blackcontainer: {
    flex: 1,
    maxHeight: 358,
    width: 316,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#241808",
    borderRadius: 25,
  },
  buttoncontainer: {
    margin: 22,
    alignItems: "center",
  },
  numbercontainer: {
    marginTop: 64,
    alignItems: "center",
  },
});

export default Lab1;
