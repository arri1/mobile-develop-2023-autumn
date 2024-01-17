import { Text, View, StyleSheet } from "react-native";
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
    <View style={styles.container}>
      <View style={styles.whitecontainer}>
        <Text style={styles.text}>{joke}</Text>
      </View>
      <Button
        loading={loading}
        title={"Обновить"}
        onPress={() => {
          getFunc();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    gap: 10,
    backgroundColor: "rgb(25, 28, 41)",
  },
  text: {
    textAlign: "center",
    verticalAlign: "middle",
    marginTop: 95,
    color: "rgb(255, 255, 255)",
    fontSize: 15,
    marginHorizontal: 10,
  },
  whitecontainer: {
    display: "flex",
    marginBottom: -55,
    width: 220,
    height: 268,
    alignItems: "center",
    backgroundColor: "rgb(48, 46, 60)",
    borderRadius: 20,
  },
});

export default Lab2;
