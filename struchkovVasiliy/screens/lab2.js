/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  Button as RNButton,
  StyleSheet,
} from 'react-native';
import axios from 'axios';

function Lab2() {
  const [activity, setActivity] = useState('');
  const [loading, setLoading] = useState(false);

  const getActivity = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://www.boredapi.com/api/activity');
      setActivity(response?.data?.activity || 'No activity available');
    } catch (error) {
      /* empty */
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getActivity();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="black" />
      ) : (
        <>
          <Text style={styles.activityText}>{activity}</Text>
          <RNButton onPress={getActivity} title="Обновить" color="black" />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  activityText: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
    color: 'black',
  },
});

export default Lab2;
