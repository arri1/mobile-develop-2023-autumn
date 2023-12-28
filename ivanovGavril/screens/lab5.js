import { View } from "react-native";
import { useSelector } from "react-redux";
import { Text } from "react-native-web";

const Lab5 = () => {
  const getUsername = useSelector((state) => {
    return state.user.email;
  });
  return (
    <View
      style={{
        padding: 14,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Text>{getUsername}</Text>
    </View>
  );
};
export default Lab5;
