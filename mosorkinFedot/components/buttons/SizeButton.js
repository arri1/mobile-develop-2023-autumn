import React from "react";
import {
  TouchableOpacity,
  ActivityIndicator,
  Text,
  StyleSheet,
} from "react-native";

export default function SizeButton({ onPress, text, style, loading }) {
  return (
    <TouchableOpacity disabled={loading} style={style} onPress={onPress}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={styles.textButton}>{text}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  textButton: {
    fontSize: 32,
  },
});
