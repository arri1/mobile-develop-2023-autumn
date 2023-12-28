import { Text, View, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../components/Button";

const Lab2 = () => {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(false);

  const getFunc = () => {
    setLoading(true);
    axios
      .get("https://dog-api.kinduff.com/api/facts")
      .then((data) => {
        setFact(data?.data?.facts);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getFunc();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.whitecontainer}>
        <Text style={styles.text}>{fact}</Text>
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
    backgroundColor: "rgb(200, 200, 140)",
  },
  text: {
    textAlign: "center",
    verticalAlign: "middle",
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 10,
    color: "rgba(65, 75, 75, 1)",
    fontSize: 20,
  },
  whitecontainer: {
    display: "flex",
    justifyContent: "center",
    width: 296,
    height: 330,
    alignItems: "center",
    backgroundColor: "rgba(170, 180, 140, 1)",
    borderRadius: 40,
    marginBottom: 25,
  },
});
export default Lab2;