import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import Button from "../components/Button";
import axios from "axios";
import React from "react";
const Lab2 = () => {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(false);

  const getFunc = () => {
    setLoading(true);
    axios
      .get("https://catfact.ninja/fact")
      .then((data) => {
        setFact(data?.data?.fact);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getFunc();
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "rgb(255,192,203)",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ textAlign: "center" }}>{fact}</Text>
      <Button
        loading={loading}
        title={"Новый факт"}
        onPress={() => {
          getFunc();
        }}
      />
    </View>
  );
};

export default Lab2;
