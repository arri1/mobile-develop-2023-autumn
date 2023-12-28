import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { connect } from 'react-redux';

const Lab1 = ({ theme }) => {
  
  const [isPressed, setPressed] = useState(false);

  const changeText = () => {
    setPressed(!isPressed)
  };

  const textColor = isPressed ? '#E77C2E' : '#3FDA3C';

  return (
    <View style={theme === 'light' ? styles.containerFirst : styles.containerSecond}>
      <Text style={styles.title} >TEXT COLOR</Text>
      <Text style={{color: textColor, marginTop: 160, fontSize: 35, fontFamily: 'Roboto', fontWeight: "700",}}>Hello world!</Text>
      <TouchableOpacity style={styles.button} onPress={changeText}>
        <Text style={styles.textButton}>
          Change color
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}


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
  title:{
    color: '#F3F4F6',
    fontSize: 20,
    fontFamily: 'Roboto',
    fontWeight: "700",
    marginTop: 120
  }, 
  button:{
    width: 270,
    height: 38,
    backgroundColor: '#EFF0F6',
    marginTop: 133,
    borderRadius: 41, 
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  textButton:{
    color: '#343333',
    fontSize: 15,
    fontFamily: 'Roboto',
    fontWeight: "700",
  }
});

export default connect(mapStateToProps)(Lab1);