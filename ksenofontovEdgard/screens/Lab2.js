import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useEffect, useState } from "react";

export default function Lab2() {
  const [idea, setIdea] = useState({ item: "No idea yet" });

  const getIdea = () => {
    fetch("https://api.api-ninjas.com/v1/bucketlist", {
      headers: {
        "X-Api-Key": "0WUzmGF3Oho7lY0jsvLFWg==5wmHDlVyIqvPFkh9",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => setIdea(json))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getIdea();
  }, []);

  return (
    <View style={[styles.container]}>
      <TouchableOpacity style={styles.buttonStyle} onPress={() => getIdea()}>
        <Text style={{ fontSize: 18, fontFamily: "Ariel" }}>
          Get random bucket list idea
        </Text>
      </TouchableOpacity>
      <Text style={styles.text}>{idea.item}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(204, 153, 204)",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonStyle: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
  },
  text: {
    marginTop: 15,
    fontSize: 30,
    fontFamily: "Verdana",
    width: "80%",
    textAlign: "center",
  },
});
