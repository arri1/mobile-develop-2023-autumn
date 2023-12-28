import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, AsyncStorage } from 'react-native';
const TodoList = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  // Загрузка списка дел при монтировании
  useEffect(() => {
    const loadTodos = async () => {
      const savedTodos = await AsyncStorage.getItem('todos');
      if (savedTodos) {
        setTodos(JSON.parse(savedTodos));
      }
    };

    loadTodos();
  }, []);

  // Сохранение списка дел при каждом его изменении
  useEffect(() => {
    const saveTodos = async () => {
      await AsyncStorage.setItem('todos', JSON.stringify(todos));
    };

    saveTodos();
  }, [todos]);

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
        data={todos}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default TodoList;
