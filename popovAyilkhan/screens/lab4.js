import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import {gql, useQuery} from "@apollo/client";
import { useEffect } from 'react';
import { connect } from 'react-redux';


const VIEWER = gql`
  query Viewer{
    viewer{
      name
    }
  }
`;


const Lab4 = ({theme}) => {
  const [name, setName] = useState("");

  const navigation = useNavigation();

  const { loading, error, data, refetch } = useQuery(VIEWER, { fetchPolicy: 'network-only' });

  const viewerHandler = () => {
    console.log(data)
    if (data && data.viewer) {
      setName(data.viewer.name);
    }
  } 

  useEffect(() => {
    viewerHandler();
  }, [loading]);

  const logoutHandler = async () => {
    await AsyncStorage.removeItem('token'); 
    navigation.replace('Login');
  };


  const updateHandler = async () =>{
    await refetch();
    viewerHandler();
  }
  

  return (
    <View style={theme === 'light' ? styles.containerFirst : styles.containerSecond}>
      <View style={styles.allContainer}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Profile</Text>
          <TouchableOpacity style={styles.buttonSettings} onPress={() => navigation.navigate("Settings")}>
            <Image
              source={require('../assets/settings.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.containerProfile}>
          <Image
            source={require('../assets/user.png')}
          />
          <Text style={styles.text}>Hello, {name}</Text>
        </View>
        <TouchableOpacity style={styles.buttonUpdate} onPress={updateHandler}>
          <Text style={styles.textButton}>
            Update
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={logoutHandler}>
          <Text style={styles.textButton}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
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
  allContainer:{
    flex: 1,
    // alignItems: 'center',
  },
  containerTitle:{
    marginTop: 107,
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title:{
    color: "#F3F4F6",
    fontSize: 20,
    fontFamily: "Roboto",
    fontWeight: "700",
  },
  buttonSettings:{
    width:24,
    height:24
  },
  containerProfile:{
    marginTop: 62,
    alignItems: "center",
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  userImg:{
    height: 28,
    width: 28
  },
  text:{
    color: "#F3F4F6",
    fontSize: 15,
    fontFamily: "Roboto",
    fontWeight: "700",
    paddingLeft: 14,
    // paddingVertical:10
  },
  buttonUpdate:{
    backgroundColor: "#EFF0F6", 
    height: 38,
    width: 270,
    borderRadius: 41,
    justifyContent: 'center',
    marginTop: 132
  },
  button: {
    backgroundColor: "#EFF0F6", 
    height: 38,
    width: 270,
    borderRadius: 41,
    justifyContent: 'center',
    marginTop: 20
  },
  textButton: {
    fontSize: 15,
    fontFamily: "Roboto",
    fontWeight: "700",
    textAlign: "center",
    color: "#343333",
  },
});


export default connect(mapStateToProps)(Lab4);