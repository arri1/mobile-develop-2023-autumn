import { View, StyleSheet } from "react-native";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";


const Logout = () => {
  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <Button
        title={"Logout"}
        onPress={() => {
          nav.replace("Login");
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    gap: 10,
    backgroundColor: "rgb(200, 200, 140)",
  },
});
export default Logout;
