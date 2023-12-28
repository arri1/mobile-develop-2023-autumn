import React from "react";

import { View, Text, StyleSheet } from "react-native";

import CheckBox from 'expo-checkbox';




const TodoItem = ({ task, completed, onToggle }) => {

    return (

      <View style={styles.container}>

        <Text style={styles.taskText}>{task}</Text>

        <CheckBox

          value={completed}

          onValueChange={onToggle}

          style={styles.checkBox}

        />

      </View>

    );

  };




  const styles = StyleSheet.create({

    container: {

      flexDirection: 'row',

      alignItems: 'center',

      marginBottom: 10,

    },

    taskText: {

      flex: 1,

    },

    checkBox: {

      marginLeft: 'auto',

    },

  });




  export default TodoItem;