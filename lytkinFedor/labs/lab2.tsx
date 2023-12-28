import {
  Text,
  View,
  Linking,
  Button,
  StyleSheet,
  Pressable,
} from "react-native";
import { TouchableOpacity, ScrollView, TouchableHighlight } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Ionicons from "react-native-vector-icons/Ionicons";
import { ListItem } from "@rneui/themed";

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
      <Text style={styles.title}>TheGuardian articles</Text>

      <ScrollView>
        {articles.map((article, index) => {
          return (
            <ListItem.Swipeable
              key={index}
              style={styles.swipe}
              rightContent={(reset) => (
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => setDelId(article.id)}
                >
                  <Ionicons name={"trash"} size={30}></Ionicons>
                </TouchableOpacity>
              )}
            >
              <ListItem.Content>
                <View style={styles.elements}>
                  <Text
                    style={styles.articles}
                    onPress={() => Linking.openURL(article.webUrl)}
                  >
                    {article.webTitle}
                  </Text>
                </View>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem.Swipeable>
          );
        })}
      </ScrollView>
      <TouchableOpacity style={styles.roundButtonNumber} onPress={update}>
        <Text>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 64,
  },
  articles: {
    fontSize: 15,
    textAlign: "left",
    borderBottomWidth: 1,
    borderColor: "black",
  },
  elements: {
    flex: 1,
    flexDirection: "row",
  },
  button: {
    margin: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#DB5151",
  },
  swipe: {
    width: 400,
  },
  roundButtonNumber: {
    margin: 1,
    width: 100,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#D2CCC7",
    bottom: 20,
    position: "absolute",
  },
});

export default Lab2;
