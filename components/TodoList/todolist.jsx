import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

const ToDoList = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (task.trim()) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { key: new Date().toISOString(), task },
      ]);
      setTask('');
    }
  };

  const deleteTask = (taskId) => {
    setTodos(todos.filter((todo) => todo.key !== taskId));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>To-Do List</Text>
      <View style={styles.addTaskView}>
        <TextInput
          placeholder="Enter Text Here .."
          style={styles.inputText}
          value={task}
          onChangeText={setTask}
        />
        <TouchableOpacity style={styles.taskButton} onPress={addTask}>
          <Text style={{ color: 'white', fontWeight: '600' }}>Add Task</Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable list */}
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <View style={styles.todoItem}>
            <Text style={styles.todoText}>{item.task}</Text>
            <TouchableOpacity onPress={() => deleteTask(item.key)}>
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.key}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default ToDoList;

const styles = StyleSheet.create({
  container: {
    // flex: 1, // Make the container fill the screen
    padding: 20,
    backgroundColor: 'lightblue',
    display: 'flex',
    justifyContent:'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 40,
    color: 'blue',
    marginVertical: 10,
    textAlign: 'center',
  },
  addTaskView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    alignItems: 'center',
    width: '75vw',
  },
  inputText: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
  },
  taskButton: {
    backgroundColor: 'blue',
    padding: 10,
    marginLeft: 10,
    borderRadius: 9,
  },
  todoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    width: '35vw',
  },
  todoText: {
    fontSize: 16,
  },
  deleteText: {
    color: '#d9534f',
    fontSize: 14,
  },
  listContent: {
    paddingBottom: 20, // Add padding at the bottom to ensure tasks are not cut off
  },
});
