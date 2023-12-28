import React, { Text, TouchableOpacity, ActivityIndicator } from "react-native";

const Buttonb = ({ onPress, title, loading }) => (
  <TouchableOpacity
    disabled={loading}
    style={{
      height: 40,
      width: 200,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 14,
      backgroundColor: "blue",
      marginBottom: 15,
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

export default Buttonb;
