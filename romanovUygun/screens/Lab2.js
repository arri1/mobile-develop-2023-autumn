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

const Lab2 = () => {
  const [loading, setLoading] = useState(false);
  const dummyURL = "https://catfact.ninja/breeds";

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
    <View>
      <ScrollView>
        {breeds.map((breed) => {
          return (
            <View style={styles.breedPost}>
              <View style={styles.breedDetails}>
                <Text style={styles.title}> {breed.breed}</Text>
                <Text> Country: {breed.country}</Text>
                <Text> OriginL: {breed.origin}</Text>
                <Text> Coat: {breed.coat}</Text>
                <Text> Pattern: {breed.coat}</Text>
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
    margin: 10,
  },
  title: {
    fontSize: 20,
    color: "black",
  },
  breedPost: {
    flexDirection: "row",
    margin: 5,

    borderBottomWidth: 1,
  },
  text: {
    color: "grey",
  },
});

export default Lab2;
