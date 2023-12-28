import React, { useState } from 'react';
import { View, FlatList, TextInput, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Button from "../components/Button";
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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="Enter a task"
        value={text}
        onChangeText={setText}
        style={{color: '#171E2B',fontSize: 15}}
      />
      <Button title="Add" onPress={handleAddTodo} />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <View style={{
                  alignItems: "center",
                  justifyContent: "center",}}>
              <Text>Text: {item.text}</Text>
            </View>
            <Button
              title={item.completed ? 'Completed' : 'Incomplete'}
              onPress={() => handleToggleTodo(item.id
                )}
                style={{
                  marginTop: 10,
                  height: 20,
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 30,
                  backgroundColor: "#171E2B",
                }}
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