import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import ColorButton from "../components/buttons/ColorButton";
import ButtonsContainer from "../components/ButtonsContainer";
import { auth, db } from "../firebase";

const Lab1 = () => {
  const [imageSize, setImageSize] = useState(100);
  const [backgroundColor, setBackgroundColor] = useState("#AD66D5");

  const handleColorButtonClick = () => {
    setBackgroundColor(generateRandomColor());
  };

  const increaseImageSize = () => {
    const newSize = imageSize + 50;

    if (newSize <= 350) {
      setImageSize(imageSize + 50);
    }
  };
  const decreaseImageSize = () => {
    const newSize = imageSize - 50;

    if (newSize >= 50) {
      setImageSize(imageSize - 50);
    }
  };

  const generateRandomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
  };

  const postsQuerySnapshot = db
    .collection("posts")
    .where("user_id", "==", auth.currentUser.uid)
    .orderBy("timestamp", "desc")
    .get();

  return (
    <View style={styles.container(backgroundColor)}>
      <Image
        source={require("../imgs/logo1.png")}
        style={{ width: imageSize, height: imageSize }}
      />
      <ButtonsContainer
        decreaseImageSize={decreaseImageSize}
        increaseImageSize={increaseImageSize}
      />
      <ColorButton onPress={handleColorButtonClick} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: (backgroundColor) => ({
    flex: 1,
    backgroundColor: backgroundColor,
    alignItems: "center",
    justifyContent: "center",
  }),
});

export default Lab1;
