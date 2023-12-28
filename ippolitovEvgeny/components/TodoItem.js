import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CheckBox from "expo-checkbox";

const TodoItem = ({ task, completed, onToggle }) => {
  return (
    <View
      style={[styles.container, { borderBottomWidth: 1, borderColor: "#ccc" }]}
    >
      <Text style={styles.taskText}>{task}</Text>
      <CheckBox
        value={completed}
        onValueChange={onToggle}
        style={styles.checkBox}
        color={"#1E78FF"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    paddingVertical: 10,
  },
  taskText: {
    flex: 1,
    fontSize: 18,
  },
  checkBox: {
    marginLeft: "auto",
  },
});

export default TodoItem;
