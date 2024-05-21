import { StatusBar } from "expo-status-bar";
import React, { useReducer, useState, useEffect } from "react";
import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";


export default function App() {
  const [count, setCount] = useState(0);
  const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;


  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/logo.png")} />
      <Text>Вы кликнули {count} раз</Text>
      <Button
        onPress={() => {
          setCount(count + 1);
        }}
        title={'+ 1'}
      />
      <Button
        onPress={() => {
          setCount(count - 1);
        }}
        title={'- 1'}
      />
      <Button
        onPress={() => {
          setCount(count * 2);
        }}
        title={'* 2'}
      />
      <Button
        onPress={() => {
          setCount(count / 2);
        }}
        title={'/ 2'}
      />
      <Button
        onPress={() => {
          setCount(count * 0);
        }}
        title={'Reset'}
      />
      <Text>{post.title}</Text>
      <Text>{post.body}</Text>

      <StatusBar style = 'auto'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  image: {
    marginBottom: 50,
  },
});