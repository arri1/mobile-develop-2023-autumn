import React, { useState } from 'react';
import { View, FlatList, TextInput, Button, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from '../screens/Lab5action';

const TodoListScreen = () => {
  const [text, setText] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim() !== '') {
      dispatch(addTodo(text));
      setText('');
    }
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <View>
      <TextInput
        placeholder="Enter a task"
        value={text}
        onChangeText={setText}
      />
      <Button title="Add" onPress={handleAddTodo} />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>Text: {item.text}</Text>
            <Button
              title={item.completed ? 'Completed' : 'Incomplete'}
              onPress={() => handleToggleTodo(item.id)}
            />
            <Button
              title="Remove"
              onPress={() => handleRemoveTodo(item.id)}
            />
          </View>
        )}
      />
    </View>
  );
};

export default TodoListScreen;