import React, { useState, useMemo } from 'react';
import { View, Text} from 'react-native';
import Button from "../components/Button";

const Lab3 = () => {
  const [count, setCount] = useState(0);

  const isEven = useMemo(() => {
    return count % 2 === 0;
  }, [count]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 15 }}>Count: {count}</Text>
      <Text style={{ fontSize: 15, marginTop: 10 }}>
        {isEven ? 'Even' : 'Odd'}
      </Text>
      <Button
        title="Increment"
        onPress={() => setCount(prevCount => prevCount + 1)}
        style={{fontSize: 15, padding:14}}
      />
    </View>
  );
};

export default Lab3;