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
        borderRadius: 163,
        backgroundColor: "rgba(238, 144, 134, 1)",
      }}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={{ color: "black", fontSize: 24 }}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};
export default Button;
