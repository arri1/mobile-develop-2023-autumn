import React, { useMemo, useCallback, useState } from "react";
import { TouchableOpacity, SafeAreaView, StyleSheet, Text } from "react-native";

const expensiveFunction = (Timer) => {
  let i = 0;
  while (i < 20000000) i++;
  return i;
};

const Lab3 = () => {
  const [num, setNum] = useState(0);
  const [memoNum, setMemoNum] = useState(0);
  const [callbackNum, setCallbackNum] = useState(0);

  const memorizeExpnesiveFunction = useMemo(
    () => expensiveFunction("fromUseMemo"),
    []
  );

  const memoIterate = () => {
    setMemoNum(memorizeExpnesiveFunction);
  };
  const iterate = () => {
    setNum(expensiveFunction("iterate without memo"));
  };

  const memorizedCallback = useCallback(() => {
    setCallbackNum(callbackNum + 1);
  }, [callbackNum]);

  const resetState = () => {
    setNum(0);
    setMemoNum(0);
    setCallbackNum(0);
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <SafeAreaView
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "50%",
        }}
      >
        <Text style={styles.text}>num with memo: {memoNum}</Text>
        <Text style={styles.text}>num without memo: {num}</Text>
        <Text style={styles.text}>num from callback: {callbackNum}</Text>
      </SafeAreaView>
      <SafeAreaView
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginLeft: "5%",
          width: "90%",
          height: "30%",
          alignItems: "flex-end",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            memoIterate();
          }}
          style={styles.lilButton}
        >
          <Text style={{ color: "white", fontWeight: "600", fontSize: 12 }}>
            FWMemo
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            iterate();
          }}
          style={styles.lilButton}
        >
          <Text style={{ color: "white", fontWeight: "600", fontSize: 12 }}>
            FWoMemo
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            memorizedCallback();
          }}
          style={styles.lilButton}
        >
          <Text style={{ color: "white", fontWeight: "600", fontSize: 12 }}>
            CCallback
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          resetState();
        }}
        style={styles.Rbutton}
      >
        <Text style={{ color: "white", fontWeight: "600", fontSize: 12 }}>
          RESET
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Lab3;

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "rgb(217,217,217)",
    height: "100%",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  text: {
    lineHeight: 53,
    color: "#000",
    alignSelf: "center",
    fontSize: 24,
  },
  Rbutton: {
    backgroundColor: "black",
    borderRadius: 15,
    width: "90%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
    alignSelf: "center",
  },
  lilButton: {
    backgroundColor: "black",
    width: "30%",
    height: "50%",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
