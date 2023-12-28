import React, { useState, useMemo } from 'react';
import { View, Text, Button } from 'react-native';

const Lab3 = () => {
  const [count, setCount] = useState(0);

  const isEven = useMemo(() => {
    return count % 2 === 0;
  }, [count]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Count: {count}</Text>
      <Text style={{ fontSize: 18, marginTop: 10 }}>
        {isEven ? 'Even' : 'Odd'}
      </Text>
      <Button
        title="Increment"
        onPress={() => setCount(prevCount => prevCount + 1)}
      />
    </View>
  );
};

export default Lab3;