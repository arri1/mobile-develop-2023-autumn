import { ScrollView, StyleSheet } from "react-native";
import TaskItem from "./TaskItem";

const TaskList = ({ data, toggleTask }) => (
  <ScrollView style={styles.taskList}>
    {data
      .slice()
      .sort((a, b) => a.checked - b.checked)
      .map((item) => (
        <TaskItem key={item.id} item={item} toggleTask={toggleTask} />
      ))}
  </ScrollView>
);

const styles = StyleSheet.create({
  taskList: {
    marginTop: 20,
  },
});

export default TaskList;
