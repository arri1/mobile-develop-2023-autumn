import React from 'react';
import { connect } from 'react-redux';
import { toggleTheme } from '../src/actions';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

const Lab5 = ({ theme, toggleTheme }) => (
    <View style={theme === 'light' ? styles.containerFirst : styles.containerSecond}>
    <TouchableOpacity style={styles.button} onPress={toggleTheme}>
      <Text style={styles.textButton}>
        Change Theme
      </Text>
    </TouchableOpacity>
  </View>
);


const mapStateToProps = (state) => ({
    theme: state.theme,
  });


const mapDispatchToProps = {
  toggleTheme,
};


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

export default connect(mapStateToProps, mapDispatchToProps)(Lab5);