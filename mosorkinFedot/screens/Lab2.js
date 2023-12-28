import { useState, useEffect } from "react";
import axios from "axios";
import { View, StyleSheet } from "react-native";
import TaskList from "../components/TaskList";

const Lab2 = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://my-json-server.typicode.com/Silverthg/myjson/tasks")
      .then((response) => {
        setData(response.data);
      })
      .catch(() => {});
  }, []);

  const toggleTask = (id) => {
    setData(
      data.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item,
      ),
    );
  };

  return (
    <View style={styles.container}>
      <TaskList data={data} toggleTask={toggleTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#AD66D5",
  },
});

export default Lab2;
