import React, {useState} from 'react';
import {View, FlatList} from 'react-native';
import styles from './ToDoList.style';
import Header from '../Header';
import Footer from '../Footer';
import ToDoItem from '../ToDoItem';

const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const renderItem = ({item}) => <ToDoItem setTodos={setTodos} item={item} />;

  return (
    <View style={styles.container}>
      <Header count={todos.filter(todo => !todo.isDone).length} />
      <FlatList
        data={todos}
        contentContainerStyle={styles.list}
        renderItem={renderItem}
      />
      <Footer setTodos={setTodos} />
    </View>
  );
};

export default ToDoList;
