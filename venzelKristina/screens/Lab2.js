import {Text, View, StyleSheet} from 'react-native';
import {useEffect, useState} from 'react';
import axios from 'axios';
import Button from '../components/Button';

const Lab2 = () => {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(false); 

  const getFunc = () => {
    setLoading(true);
    axios
      .get('https://official-joke-api.appspot.com/random_joke')
      .then(response => {
        setJoke(response.data.setup + ' ... ' + response.data.punchline);
        setLoading(false);
      })
      .catch(error => {
        console.error('Ошибка при получении шутки:', error);
        setLoading(false); 
      });
  };
  useEffect(() => {
    getFunc();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.whitecontainer}>
        <Text style={styles.text}>{joke}</Text>
      </View>
      <Button
        loading={loading}
        title={'Обновить'}
        onPress={() => {
          getFunc();
        }}
      />
    </View>
  );
};
export default Lab2;