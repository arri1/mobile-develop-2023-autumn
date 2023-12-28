import { Text, TouchableOpacity, ActivityIndicator } from "react-native";
import {
  useFonts,
  IBMPlexMono_400Regular,
} from "@expo-google-fonts/ibm-plex-mono";

const Button = ({ onPress, title, loading }) => {
  let [fontsLoaded] = useFonts({
    IBMPlexMono_400Regular,
  });

  return (
    <TouchableOpacity
      disabled={loading}
      style={{
        marginTop: 22,
        height: 38,
        borderRadius: 25,
        width: 272,
        alignItems: "center",
        backgroundColor: "rgba(244, 217, 148, 1)",
        justifyContent: "center",
      }}
      onPress={onPress}
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text
          style={{
            color: "rgba(36, 24, 8, 1)",
            fontFamily: "IBMPlexMono_400Regular",
            fontSize: 18,
          }}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};
export default Button;
