import { Text, View, Linking, Button, StyleSheet } from "react-native";
import { TouchableOpacity, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const src =
  "https://content.guardianapis.com/search?page=2&q=debate&api-key=test";
const Lab2 = () => {
  const [articles, setArticles] = useState([]);
  const [delId, setDelId] = useState(0);

  useEffect(() => {
    const updatedArray = articles.filter((article) => {
      return article.id !== delId;
    });

    setArticles(updatedArray);
    console.log("update");
  }, [delId]);

  const update = () => {
    axios.get(src).then((data) => {
      setArticles(data.data.response.results);
    });
  };

  useEffect(() => {
    update();
  }, []);

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
      <Text>TheGuardian articles</Text>
      {articles.map((article) => {
        return (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={styles.articles}
              onPress={() => Linking.openURL(article.webUrl)}
            >
              {article.webTitle}
            </Text>
            <Text onPress={() => setDelId(article.id)}>(x)</Text>
          </View>
        );
      })}
      <Button title="Update" onPress={update}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  articles: {
    textAlign: "left",
  },
});

export default Lab2;
