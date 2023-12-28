import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import TodoItem from "../Components/TodoItem";

const Lab2 = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setTasks(data["todos"]);
      });
  }, []);

  const handleToggle = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>To-Do List</Text>
      <ScrollView>
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task.todo}
            completed={task.completed}
            onToggle={() => handleToggle(task.id)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(240, 221, 150)",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default Lab2;