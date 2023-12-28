import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const TodoList = () => {
  const [todoInput, setTodoInput] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todoInput === '') return;

    setTodos([...todos, todoInput]);
    setTodoInput('');
  };

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  useEffect(() => {
    // Этот эффект будет вызываться каждый раз, когда происходит изменение в состоянии todos
    console.log('todos changed:', todos);
  }, [todos]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To-Do List</Text>
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Введите задачу"
          value={todoInput}
          onChangeText={(text) => setTodoInput(text)}
        />
        <Button title="Добавить" onPress={addTodo} />
      </View>

      <FlatList
        data={todos}
        renderItem={({ item, index }) => (
          <View style={styles.todoContainer}>
            <Text style={styles.todoText}>{item}</Text>
            <Button title="Удалить" onPress={() => deleteTodo(index)} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  todoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  todoText: {
    flex: 1,
    fontSize: 16,
  },
});

export default TodoList;