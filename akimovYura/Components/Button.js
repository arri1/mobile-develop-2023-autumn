import { Text, TouchableOpacity, ActivityIndicator } from "react-native";

const Button = ({ onPress, title, loading }) => {
  return (
    <TouchableOpacity
      disabled={loading}
      style={{
        height: 50,
        width: 220,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        backgroundColor: "orange",
      }}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={{ color: "black" }}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};
export default Button;