import { useEffect, useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import axios from "axios";
import Ionicons from "@expo/vector-icons/Ionicons";
import {
  useFonts,
  IBMPlexMono_400Regular,
} from "@expo-google-fonts/ibm-plex-mono";
const Lab2 = () => {
  const [loading, setLoading] = useState(false);
  const dummyURL = "https://catfact.ninja/breeds";
  let [fontsLoaded] = useFonts({
    IBMPlexMono_400Regular,
  });
  const [breeds, setBreeds] = useState([]);
  useEffect(() => {
    axios
      .get(dummyURL)
      .then(({ data }) => {
        setBreeds(data.data);
        Alert.alert("Данные получены");
      })
      .catch((err) => {
        console.log(err);
        Alert.alert(
          "Ошибка",
          "Ошибка получения данных https://catfact.ninja/breeds"
        );
      });
  }, []);
  console.log(breeds);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ScrollView>
        {breeds.map((breed) => {
          return (
            <View style={styles.breedPost}>
              <View style={styles.breedDetails}>
                <Text style={styles.titleText}>{breed.breed}</Text>
                <Text style={styles.detailsText}>Country: {breed.country}</Text>
                <Text style={styles.detailsText}>OriginL: {breed.origin}</Text>
                <Text style={styles.detailsText}>Coat: {breed.coat}</Text>
                <Text style={styles.detailsText}>Pattern: {breed.coat}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  breedDetails: {
    margin: 20,
  },
  detailsText: {
    color: "rgba(36, 24, 8, 1)",
    fontFamily: "IBMPlexMono_400Regular",
    fontSize: 14,
  },
  titleText: {
    color: "rgba(36, 24, 8, 1)",
    fontFamily: "IBMPlexMono_400Regular",
    fontSize: 24,
  },

  breedPost: {
    flexDirection: "row",
    margin: 22,
    marginBottom: 0,
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
  },
  text: {
    color: "grey",
  },
});

export default Lab2;
