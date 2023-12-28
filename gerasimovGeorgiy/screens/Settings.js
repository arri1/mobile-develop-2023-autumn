import { Button, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Settings = () => {
  const nav  = useNavigation();
  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Button
        title={"logout"}
        onPress={() => {
          nav.replace("Login");
        }}
      />
    </View>
  );
};

export default Settings;
