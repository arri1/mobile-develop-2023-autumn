import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import { connect } from 'react-redux';

const Lab2 = ({theme}) => {

  const [price, setPrice] = useState("");

  const getData = () => {
    axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((response) => {
        let rate = parseFloat(response.data.bpi.USD.rate_float).toFixed(2);
        let formattedRate = new Intl.NumberFormat('en-US').format(rate).toString().replace(/,/g, " ");
        setPrice(formattedRate);
      });
    console.info("Work")
    console.log(typeof price)
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={theme === 'light' ? styles.containerFirst : styles.containerSecond}>
      <Text style={styles.title}>BITCOIN RATE</Text>
      <Image
        style={styles.bitcoinImg}
        source={require('../assets/bitcoin.png')}
      />
      <Text style={styles.text}>${price}</Text>
      <TouchableOpacity style={styles.button} onPress={getData}>
        <Text style={styles.textButton}>
          Update
        </Text>
      </TouchableOpacity>
    </View>
  );
};


const mapStateToProps = (state) => ({
  theme: state.theme,
});


const styles = StyleSheet.create({
  containerFirst: {
    flex: 1,
    backgroundColor: '#2F3C5F',
    alignItems: 'center',
  },
  containerSecond: {
    flex: 1,
    backgroundColor: '#327CFF',
    alignItems: 'center',
  },
  button: {
    backgroundColor: "#EFF0F6", 
    minHeight: 38,
    width: 270,
    borderRadius: 41,
    justifyContent: 'center',
  },
  textButton: {
    fontSize: 15,
    fontFamily: "Roboto",
    fontWeight: "700",
    textAlign: "center",
    color: "#343333",
  },
  text:{
    color: "#F3F4F6",
    fontSize: 35,
    marginBottom: 30,
    fontFamily: "Roboto",
    fontWeight: "700",
  },
  bitcoinImg:{
    marginBottom:59
  },
  title:{
    color: '#F3F4F6',
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: "700",
    marginBottom: 56,
    marginTop: 120,
  }
});

export default connect(mapStateToProps)(Lab2);