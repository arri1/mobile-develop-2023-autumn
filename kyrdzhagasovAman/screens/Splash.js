import { useNavigation } from "@react-navigation/native";
import { Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Splash = () => {
  const nav = useNavigation();

  checkToken = async () => {
    try {
      let value = await AsyncStorage.getItem("token").then(() => {
        if (value == null) {
          nav.replace("Login");
        } else {
          nav.replace("Tab");
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  setTimeout(() => {
    checkToken();
  }, 2000);

  return (
    <View
      style={{
        height: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "green",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "white",
        }}
      >
        Мобильная разработка
      </Text>
    </View>
  );
};

export default Splash;
