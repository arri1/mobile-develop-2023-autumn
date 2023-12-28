import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import TodoItem from "../TodoItem";
import Loading from "../Loading";

const Lab2 = ({ navigation }) => {
  const [tasks, setTasks] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Error", "Unable data");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleToggle = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  if (IsLoading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>To-Do List</Text>
      <ScrollView>
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task.title}
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
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default Lab2;
