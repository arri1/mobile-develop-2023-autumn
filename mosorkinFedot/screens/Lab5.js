import React, { useEffect, useState } from "react";
import {
  FlatList,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { createPost, fetchPosts } from "../store/actions";
import { auth } from "../firebase";

const Lab5 = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const [newPostContent, setNewPostContent] = useState("");

  useEffect(() => {
    console.log("Fetching posts...");
    dispatch(fetchPosts())
      .then(() => console.log("Posts fetched successfully"))
      .catch((error) => console.error("Fetching posts failed: ", error));
  }, [dispatch]);

  const submitPost = () => {
    if (newPostContent.trim() !== "") {
      const postData = {
        content: newPostContent,
      };
      dispatch(createPost(postData))
        .then(() => {
          console.log("Post created successfully.");
          dispatch(fetchPosts());
        })
        .catch((error) => {
          console.error("Failed to create post: ", error);
        });
      setNewPostContent("");
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.postContainer}>
      <Text style={styles.postAuthor}>{item.email}</Text>
      <Text style={styles.postContent}>{item.content}</Text>
      <Text style={styles.postTimestamp}>
        {item.timestamp
          ? new Date(item.timestamp).toLocaleString()
          : "Recently"}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Напиши что-нибудь"
          value={newPostContent}
          onChangeText={setNewPostContent}
          style={styles.input}
        />
        <TouchableOpacity onPress={submitPost} style={styles.button}>
          <Text>Отправить</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#AD66D5",
  },
  list: {
    flex: 1,
    marginHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 90,
  },
  postContainer: {
    padding: 15,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    marginBottom: 20,
    minHeight: 60,
  },
  postAuthor: {
    fontWeight: "bold",
  },
  postContent: {
    fontSize: 16,
  },
  postTimestamp: {
    fontSize: 12,
    color: "#808080",
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "stretch",
    paddingHorizontal: 20,
    bottom: 70,
    paddingVertical: 20,
    backgroundColor: "#AD66D5",
  },
  input: {
    flex: 1,
    padding: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 10,
    backgroundColor: "#fff",
    alignSelf: "stretch",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: "#FFD300",
    justifyContent: "center",
    alignSelf: "stretch",
  },
});

export default Lab5;
