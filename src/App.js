import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import ToDoList from './components/ToDoList';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ToDoList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
  },
});

export default App;
