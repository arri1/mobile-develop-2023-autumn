import { View, Text } from "react-native";
import { useMemo, useState } from "react";
import Button from "../components/Button";

const MemoCounter = () => {
  const [countMemo, setMemo] = useState(0);
  const calculate = () => {
    let result = 0;
    for (let i = 0; i <= 50000000; i++) {
      result += 1;
    }
    return result;
  };
  const resultMemo = useMemo(() => calculate(), []);
  let calculated = resultMemo + countMemo;
  return (
    <View>
      <Text
        style={{
          fontSize: 36,
        }}
      >
        UseMemo
      </Text>
      <Text
        style={{
          fontSize: 40,
          textAlign: "center",
        }}
      >
        {calculated}
      </Text>
      <View
        style={{
          flexDirection: "row",
          gap: 60,
          marginBottom: 60,
        }}
      >
        <Button
          title={"-"}
          color={"#1244C5"}
          height={100}
          width={100}
          borderRadius={25}
          titleSize={128}
          lineHeight={121}
          onPress={() => setMemo(countMemo - 1)}
        />
        <Button
          title={"+"}
          color={"#1244C5"}
          height={100}
          width={100}
          borderRadius={25}
          titleSize={128}
          lineHeight={125}
          onPress={() => setMemo(countMemo + 1)}
        />
      </View>
    </View>
  );
};

const NoMemoCounter = () => {
  const [countNoMemo, setNoMemo] = useState(0);
  const calculate = () => {
    let result = 0;
    for (let i = 0; i <= 50000000; i++) {
      result += 1;
    }
    return result;
  };
  const resultNoMemo = calculate();
  let calculated = resultNoMemo + countNoMemo;
  return (
    <View>
      <Text
        style={{
          fontSize: 36,
        }}
      >
        NoUseMemo
      </Text>
      <Text
        style={{
          fontSize: 40,
          textAlign: "center",
        }}
      >
        {calculated}
      </Text>
      <View
        style={{
          flexDirection: "row",
          gap: 60,
        }}
      >
        <Button
          title={"-"}
          color={"#1244C5"}
          height={100}
          width={100}
          borderRadius={25}
          titleSize={128}
          lineHeight={121}
          onPress={() => setNoMemo(countNoMemo - 1)}
        />
        <Button
          title={"+"}
          color={"#1244C5"}
          height={100}
          width={100}
          borderRadius={25}
          titleSize={128}
          lineHeight={125}
          onPress={() => setNoMemo(countNoMemo + 1)}
        />
      </View>
    </View>
  );
};

const Lab3 = () => {
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
      <MemoCounter />
      <NoMemoCounter />
    </View>
  );
};

export default Lab3;
