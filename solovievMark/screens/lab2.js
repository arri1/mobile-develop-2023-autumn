import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState, useEffect } from "react";
var cities = [
  "Yakutsk",
  "London",
  "Moscow",
  "Saint Petersburg",
  "New York",
  "Toronto",
  "Ottawa",
  "Berlin",
  "Paris",
  "Tokyo",
];
var i = 0;
const Lab2 = () => {
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState(cities[i]);
  const [forecast, setForecast] = useState({
    temp: "0",
    humidity: "0",
    wind_speed: "0",
  });

  const getForecast = () => {
    setLoading(true);
    fetch("https://api.api-ninjas.com/v1/weather?city=" + city, {
      method: "GET",
      headers: {
        "X-Api-Key": "dvS+l6auPoSTfQ8DrRmTcg==sH8BjvmLlQyoBWs5",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => setForecast(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };
  const nextCity = () => {
    setLoading(true);
    if (i < cities.length - 1) {
      i++;
      setCity(cities[i]);
    } else {
      i = 0;
      setCity(cities[i]);
    }
  };
  const previousCity = () => {
    setLoading(true);
    if (i > 0) {
      i--;
      setCity(cities[i]);
    } else {
      i = cities.length - 1;
      setCity(cities[i]);
    }
  };
  useEffect(() => {
    getForecast();
  }, [city]);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text style={{ fontSize: 20, fontFamily: "Roboto" }}>Загрузка...</Text>
      ) : (
        <Text style={{ fontSize: 20, fontFamily: "Roboto" }}>
          Город: {city}
          {"\n"}
          Температура: {forecast.temp}°C
          {"\n"}
          Влажность: {forecast.humidity}%{"\n"}
          Скорость ветра: {forecast.wind_speed}m/s
        </Text>
      )}
      <View style={styles.buttonsCon}>
        <TouchableOpacity style={styles.button} onPress={previousCity}>
          <Text style={{ color: "black", fontFamily: "Roboto" }}>
            Previous city
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={nextCity}>
          <Text style={{ color: "black", fontFamily: "Roboto" }}>
            Next city
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};
const styles = StyleSheet.create({
  buttonsCon: {
    flexDirection: "row",
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "lightpink",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "lightblue",
    padding: 10,
    borderRadius: 5,
    margin: 10,
  },
});
export default Lab2;
