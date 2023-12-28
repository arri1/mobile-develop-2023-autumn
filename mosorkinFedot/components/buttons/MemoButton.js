import React from "react";
import {
  TouchableOpacity,
  ActivityIndicator,
  Text,
  StyleSheet,
} from "react-native";

export default function MemoButton({ onPress, text, loading }) {
  return (
    <TouchableOpacity
      disabled={loading}
      style={styles.memoButtons}
      onPress={onPress}
    >
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
    fontSize: 16,
  },
  memoButtons: {
    marginTop: 20,
    height: 40,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 14,
    backgroundColor: "orange",
    marginHorizontal: 10,
  },
});
