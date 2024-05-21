import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, Button, Text } from 'react-native';

export default function ProfilePage() {
  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
      <Button
          title="Logout"
          color="white"
        />
      </View>
      <StatusBar style="auto" />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnContainer: {
    marginTop: 25, 
    flexDirection: "row",
    backgroundColor: "black",
    padding: 5, 
    borderRadius: 30, 
    marginBottom: 20, 
    width: 180,
    justifyContent: "center",
  },
});