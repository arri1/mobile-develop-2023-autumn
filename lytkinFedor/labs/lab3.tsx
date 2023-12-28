import React, { useMemo, useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Lab2 from "./lab2";

const list = [1, 4, 3, 2, 5];
const list2 = [1, 4, 3, 2, 5];
let sortCount = 0;
let sortCountUM = 0;
const sortList = () => {
  console.log("sort");
  sortCount++;
  return list.sort((a, b) => a - b);
};

const sortList2 = () => {
  console.log("sort2");
  sortCountUM++;
  return list2.sort((a, b) => a - b);
};

const Lab3 = () => {
  const [update, updateChange] = useState(false);

  const sortedList = sortList();
  const sortedList2 = useMemo(sortList2, []);

  console.log("app render");
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <View style={styles.elements}>
        <View style={styles.articles}>
          {sortedList.map((listItem) => (
            <Text key={listItem} style={styles.basicText}>
              {listItem}
            </Text>
          ))}
          <Text style={styles.hotText}>
            Count of sort without useMemo: {sortCount}
          </Text>
        </View>
        <View style={styles.articles}>
          {sortedList2.map((listItem) => (
            <Text key={listItem} style={styles.basicText}>
              {listItem}
            </Text>
          ))}
          <Text style={styles.hotText}>
            Count of sort with useMemo: {sortCountUM}
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.roundButtonNumber}
          onPress={() => updateChange(!update)}
        >
          <Text>Update change</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 60,
  },
  articles: {
    padding: 20,
    fontSize: 15,
    textAlign: "left",
    backgroundColor: "#E6E6E6",
    margin: 50,
    borderRadius: 20,
  },
  elements: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
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
    width: 200,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#D2CCC7",
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    bottom: 20,
  },
  basicText: {
    fontSize: 20,
  },
  hotText: {
    fontSize: 20,
    color: "tomato",
  },
});

export default Lab3;
