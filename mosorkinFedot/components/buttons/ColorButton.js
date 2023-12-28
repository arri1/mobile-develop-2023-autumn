import { TouchableOpacity, ActivityIndicator, StyleSheet, Image } from "react-native";

export default function ColorButton({ onPress, loading }) {
  return (
    <TouchableOpacity
      disabled={loading}
      style={styles.changeColorButton}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Image
          style={styles.changeColorImg}
          source={require("../../imgs/chngcolor.png")}
        />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  changeColorButton: {
    width: 50,
    height: 50,
    right: 30,
    position: "absolute",
    top: 80,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
  },
  changeColorImg: {
    width: 50,
    height: 50,
  },
});
