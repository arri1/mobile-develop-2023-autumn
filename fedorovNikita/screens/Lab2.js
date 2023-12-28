import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";

const Lab2 = () => {
  const [dateState, setDateState] = useState(new Date());
  const [quote, setQuote] = useState('');

  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'cee3bd1e22msheedb98e87dec740p196316jsn6d22f5917037',
        'X-RapidAPI-Host': 'quotes-by-api-ninjas.p.rapidapi.com'
      }
    };
    fetch('https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes', options)
      .then(response => response.json())
      .then(data => setQuote(data[0].quote))
      .catch(error => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.date}>
        <Image
          source={require("../icons/calendar.png")}
          style={styles.image}
        />
        <Text>
          {dateState.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
        </Text>
        <View style={styles.space}></View>
        <Image
          source={require("../icons/clock.png")}
          style={styles.image}
        />
        <Text>
          {dateState.toLocaleString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
          })}
        </Text>
      </View>
      <Text>{quote}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    flexDirection:'column',
    alignItems:'center'
  },
  date: {
    justifyContent: 'center',
    flexDirection:'row',
    alignItems:'center'
  },
  image: {
    height: 30,
    width: 30,
  },
  space: {
    width: 20,
    height: 20,
  },
});

export default Lab2;