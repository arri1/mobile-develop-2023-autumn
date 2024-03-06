import { Text, TouchableOpacity, ActivityIndicator } from "react-native";

const Button = ({
  onPress,
  title,
  loading,
  color,
  height,
  width,
  borderRadius,
  titleSize,
  lineHeight,
}) => {
  return (
    <TouchableOpacity
      disabled={loading}
      style={{
        height: height,
        width: width,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: borderRadius,
        backgroundColor: color,
      }}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text
          style={{
            color: "white",
            fontSize: titleSize,
            lineHeight: lineHeight,
          }}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};
export default Button;
