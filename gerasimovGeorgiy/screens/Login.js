import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const nav = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title={"go to reg"}
        onPress={() => {
          nav.push("Registration");
        }}
      />
      <Button
        title={"login"}
        onPress={() => {
          nav.replace("Tab");
        }}
      />
    </View>
  );
};

export default Login;
