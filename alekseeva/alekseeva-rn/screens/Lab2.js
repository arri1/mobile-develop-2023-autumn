import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../components/Button";

const Lab2 = () => {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  const getFunc = () => {
    setLoading(true);
    axios
      .get("https://official-joke-api.appspot.com/random_joke")
      .then((response) => {
        setJoke(response.data.setup + " ... " + response.data.punchline);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Ошибка при получении шутки:", error);
        setLoading(false);
      });
  };
  useEffect(() => {
    getFunc();
  }, []);

  return (
    <View
      style={{
        padding: 14,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        backgroundColor: "#F0F0F0",
      }}
    >
      <Text style={{ textAlign: "center" }}>{joke}</Text>
      <Button
        loading={loading}
        color={"#1244C5"}
        title={"Обновить"}
        height={100}
        width={100}
        borderRadius={25}
        onPress={() => {
          getFunc();
        }}
      />
    </View>
  );
};

export default Lab2;