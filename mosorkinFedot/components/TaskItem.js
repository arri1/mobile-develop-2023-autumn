import { View } from "react-native";
import { CheckBox } from "react-native-elements";
import { StyleSheet } from "react-native";

const TaskItem = ({ item, toggleTask }) => (
  <View style={[styles.item, item.checked && styles.completedTask]}>
    <CheckBox
      title={item.title}
      checked={item.checked}
      onPress={() => toggleTask(item.id)}
      containerStyle={{
        backgroundColor: "transparent",
        borderWidth: 0,
      }}
      textStyle={{ color: item.checked ? "#ccc" : "#000000", fontSize: 20 }}
    />
  </View>
);

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: "#FFD300",
    borderRadius: 15,
  },
  completedTask: {
    backgroundColor: "#A65400",
    fontColor: "#000000",
  },
});

export default TaskItem;
