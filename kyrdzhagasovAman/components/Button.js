import { Text, TouchableOpacity, ActivityIndicator } from "react-native";

const Button = ({ onPress, title, loading }) => {
  return (
    <TouchableOpacity
      disabled={loading}
      style={{
        marginTop: 10,
        height: 40,
        width: 200,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 14,
        backgroundColor: "green",
      }}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={{ color: "white" }}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};
export default Button;
