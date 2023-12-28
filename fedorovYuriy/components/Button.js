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
        backgroundColor: "rgba(193, 124, 116, 1)",
      }}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={{ color: "rgba(42, 61, 69, 1)", fontSize: 24 }}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};
export default Button;
