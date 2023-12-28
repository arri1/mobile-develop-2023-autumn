import { Text, TouchableOpacity, ActivityIndicator } from "react-native";

const Button = ({ onPress, title, loading }) => {
  return (
    <TouchableOpacity
      disabled={loading}
      style={{
        marginTop: 10,
        height: 20,
        width: 100,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 14,
        backgroundColor: "purple",
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