import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './ToDoItem.style';

const ToDoItem = ({setTodos, item}) => {
  const onPressHandler = () => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === item.id ? {...todo, isDone: !todo.isDone} : todo,
      ),
    );
  };

  const onLongPressHandler = () => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== item.id));
  };

  return (
    <TouchableOpacity
      onPress={onPressHandler}
      onLongPress={onLongPressHandler}
      style={item.isDone ? styles.containerDone : styles.container}>
      <Text style={item.isDone ? styles.textDone : styles.text}>
        {item.text}
      </Text>
    </TouchableOpacity>
  );
};

export default ToDoItem;
