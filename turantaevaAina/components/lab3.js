import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const lab3 = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all');
  const [completedTodos, setCompletedTodos] = useState([]);

  useEffect(() => {
    loadTodos();
  }, []);

  useEffect(() => {
    saveTodos();
  }, [todos, completedTodos]);

  const loadTodos = async () => {
    try {
      const savedTodos = await AsyncStorage.getItem('todos');
      if (savedTodos !== null) {
        setTodos(JSON.parse(savedTodos));
      }
    } catch (error) {
      console.error('Error loading todos:', error);
    }
  };

  const saveTodos = async () => {
    try {
      await AsyncStorage.setItem('todos', JSON.stringify(todos));
      await AsyncStorage.setItem('completedTodos', JSON.stringify(completedTodos));
    } catch (error) {
      console.error('Error saving todos:', error);
    }
  };

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: todos.length + 1, text: newTodo }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteTodo = (id) => {
    const deletedTodo = todos.find(todo => todo.id === id);
    if (deletedTodo) {
      const updatedTodos = todos.filter(todo => todo.id !== id);
      setTodos(updatedTodos);
      setCompletedTodos([...completedTodos, {...deletedTodo, completed: true}]);
    }
  };

  const filteredTodos = useMemo(() => {
    if (filter === 'all') {
      return todos.concat(completedTodos);
    } else if (filter === 'completed') {
      return completedTodos;
    } else {
      return todos.filter(todo => !todo.completed);
    }
  }, [todos, completedTodos, filter]);
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          value={newTodo}
          onChangeText={text => setNewTodo(text)}
          placeholder="Enter a new todo..."
        />
        <TouchableOpacity style={styles.addButton} onPress={addTodo}>
          <Text style={styles.addButtonText}>Add Todo</Text>
        </TouchableOpacity>
        <View style={styles.filterButtons}>
          <TouchableOpacity style={[styles.filterButton, filter === 'all' && styles.activeFilter]} onPress={() => setFilter('all')}>
            <Text>All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.filterButton, filter === 'completed' && styles.activeFilter]} onPress={() => setFilter('completed')}>
            <Text>Completed</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.filterButton, filter === 'active' && styles.activeFilter]} onPress={() => setFilter('active')}>
            <Text>Active</Text>
          </TouchableOpacity>
        </View>
        <FlatList
            data={filteredTodos}
                renderItem={({ item }) => (
    <View style={styles.todoItem}>
      <TouchableOpacity onPress={() => toggleTodo(item.id)}>
        <Text style={[styles.todoText, item.completed && styles.completed]}>{item.text}</Text>
      </TouchableOpacity>
      {!item.completed && (
        <TouchableOpacity onPress={() => deleteTodo(item.id)}>
          <Text style={styles.deleteButton}>Delete</Text>
        </TouchableOpacity>
      )}
    </View>
  )}
  keyExtractor={item => item.id.toString()}
  contentContainerStyle={styles.listContainer}
/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '80%',
  },
  input: {
    marginBottom: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  },
  addButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  todoText: {
    flex: 1,
  },
  completed: {
    textDecorationLine: 'line-through',
  },
  deleteButton: {
    color: 'red',
    fontSize: 16,
  },
  filterButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  filterButton: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  activeFilter: {
    backgroundColor: 'lightblue',
  },
  listContainer: {
    flexGrow: 1,
  },
});

export default lab3;
