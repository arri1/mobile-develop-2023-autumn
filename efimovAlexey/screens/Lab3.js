import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useState, useEffect, useMemo } from "react";

export default function Lab3() {
  const [film, setFilm] = useState({
    name: "",
    year: "",
    poster: {
      url: "",
      previewUrl: "",
    },
    description: "",
  });

  const fetchData = async () => {
    try {
      const response = await fetch("https://api.kinopoisk.dev/v1.3/movie/435", {
        headers: {
          "X-API-KEY": "HYJ3FBW-7AN4CJ1-MWDVHE2-7M1DNT8",
          "Content-Type": "application/json",
        },
      });
      const jsonData = response.json();
      return jsonData;
    } catch {
      return {};
    }
  };

  const refresh = async () => {
    setFilm(await fetchData());
  };

  const datamemo = useMemo(async () => await fetchData(), []);

  useEffect(() => {
    console.log(film.name);
  }, [film]);

  return (
    <ScrollView style={styles.scrollview}>
      <View style={[styles.container]}>
        <TouchableOpacity style={styles.buttonGray} onPress={() => refresh()}>
          <Text
            style={{
              fontSize: 23,
              fontFamily: "Verdana",
              textAlign: "center",
              color: "white",
            }}
          >
            Обновить без memo
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonGray}
          onPress={async () => setFilm(await datamemo)}
        >
          <Text
            style={{
              fontSize: 23,
              fontFamily: "Verdana",
              textAlign: "center",
              color: "white",
            }}
          >
            Обновить с memo
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonGray} onPress={() => setFilm({})}>
          <Text
            style={{
              fontSize: 23,
              fontFamily: "Verdana",
              textAlign: "center",
              color: "white",
            }}
          >
            Удалить
          </Text>
        </TouchableOpacity>
        <View style={styles.headingContainer}>
          {/* <img src={film.poster.url} style={styles.image} /> */}
          <Text style={styles.name}>
            {film.name} {film.year}
          </Text>
        </View>
        <Text style={styles.description}>{film.description}</Text>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
    height: "100%",
    backgroundColor: "lightblue",
  },
  containerLoading: {
    flex: 1,
    backgroundColor: "gray",
    opacity: 0.3,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
  },
  container: {
    flex: 1,
    height: "100%",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
    gap: "20px",
  },
  headingContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },
  buttonGray: {
    height: 60,
    width: 300,
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "gray",
    justifyContent: "center",
    backgroundColor: "orange",
  },
  image: {
    maxWidth: "40%",
    width: "100%",
    height: "auto",
    borderRadius: 6,
  },
  name: {
    flex: 1,
    fontSize: 21,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    textAlign: "justify",
  },
});
