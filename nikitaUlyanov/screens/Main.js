import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Lent from "../components/Lent";
import Stories from "../components/Stories";

export default function Main({ navigation, route }) {
  var storiess = route.params?.storie;
  var postss = route.params?.post;
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity>
          <Image
            style={styles.colocol}
            source={require("../assets/header-icons/notif.png")}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.main}>
      <StatusBar style="auto" />

      <Text>{}</Text>
      <Stories storiess={storiess} />

      <Lent post={postss} />

      <View style={styles.footer}>
        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() => navigation.navigate("Main")}
        >
          <Image
            style={styles.icon}
            source={require("../assets/footer-icons/Home.png")}
          />

          <Text>Main</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() => navigation.navigate("Rec")}
        >
          <Image
            style={styles.icon}
            source={require("../assets/footer-icons/Rec.png")}
          />
          <Text>Wall</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() => navigation.navigate("ToDoList")}
        >
          <Image
            style={styles.icon}
            source={require("../assets/footer-icons/NewPost.png")}
          />
          <Text>TodoList</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ alignItems: "center" }}
          onPress={() => navigation.navigate("Profile")}
        >
          <Image
            style={styles.icon}
            source={require("../assets/footer-icons/Profile.png")}
          />
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingBottom: 10,
    backgroundColor: "#fff",
  },
  footer: {
    height: 64,
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    marginLeft: 20,
    fontFamily: "mp-eb",
    fontSize: 28,
  },
  icon: {
    width: 30,
    height: 30,
  },
  colocol: {
    width: 24,
    height: 24,
    marginRight: 21,
    resizeMode: "contain",
  },
});
