import {React, useState, Button, View, ViewStyle} from 'react';

export default function App() {
  // Объявляем новую переменную состояния "count"
  const [count, setCount] = useState(0);

  return (
    <ViewStyle>
      <View>Вы нажали {count} раз</View>
      <Button onClick={() => setCount(count + 1)}>
        Нажми на меня
      </Button>
    </ViewStyle>
  );
}