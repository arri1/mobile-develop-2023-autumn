import { Text, TouchableOpacity, ActivityIndicator } from "react-native";

const Button = ({ onPress, title, loading }) => {
  return (
    <TouchableOpacity
      disabled={loading}
      style={{
        marginBottom: 15,
        height: 35,
        width: 153,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 14,
        backgroundColor: "#808AEC",
      }}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={{ color: "white", fontSize: 24 }}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};
export default Button;
