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

import ToDoList from "./components/ToDoList";

export default function App() {
  const [count, setCount] = useState(0);

  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const onAdd = () => {
    setTasks((prevState) => {
      const tasks = [...prevState];
      tasks.push({ id: tasks.length, title: text, done: false });
      return tasks;
    }); // Добавляем новую задачу 

    setText(""); //Очищаем поле
  };

  const toggle = (id) => {
    const dublicateTasks = [...tasks];
    const taskIndex = tasks.findIndex((task) => task.id === id);
    dublicateTasks[taskIndex].done = !dublicateTasks[taskIndex].done;
    setTasks(dublicateTasks);
  };

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
      <TextInput style={styles.input} placeholder="Enter task" value={text} onChangeText={setText} />
        <Button title={"Add"} onPress={onAdd} />
        <ToDoList tasks={tasks} toggle={toggle} />
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
  input: {
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 1    
  }
});
