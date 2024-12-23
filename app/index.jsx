import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ToDoList from '../components/TodoList/todolist'


const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <ToDoList />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})