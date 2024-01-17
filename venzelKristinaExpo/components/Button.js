import { Text, TouchableOpacity, ActivityIndicator } from "react-native";

const Button = ({ onPress, title, loading }) => {
  return (
    <TouchableOpacity
      disabled={loading}
      style={{
        height: 30,
        width: 132,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 15,
        backgroundColor: "rgb(132, 77, 222)",
        marginTop: 5,
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
