import { StyleSheet, Text, View,Button } from 'react-native';

export default function HomeScreen(){
  return(
    <View style={styles.container}>
        <Text style={styles.text}>My Home Page</Text>

      </View>
  );
}

const styles = StyleSheet.create(
  {
    container:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
    },
    text:{
      fontSize:24,
      fontWeight:"bold",
      marginBottom:16,
    },
  }
);
