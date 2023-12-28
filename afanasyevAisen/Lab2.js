import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';

const TodoList = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {

  }, []);

  const addTodo = () => {
    if (todo.length > 0) {
      setTodos([...todos, todo]);
      setTodo('');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10 }}
        onChangeText={setTodo}
        value={todo}
        placeholder="Добавить новое дело"
      />
      <Button title="Добавить" onPress={addTodo} />
      <FlatList
        style={{ fontSize: 24, marginBottom: 20 }}
        data={todos}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default TodoList;
