import React from 'react';
import {Text, TextInput, Pressable, View} from 'react-native';
import styles from './Footer.style';

const Footer = ({setTodos}) => {
  const [text, setText] = React.useState('');

  const toDoHandler = () => {
    setTodos(prevTodos => [
      ...prevTodos,
      {
        id: Math.random().toString(),
        text,
        isDone: false,
      },
    ]);
    setText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="Yapılacak..."
        placeholderTextColor="#808080"
        style={styles.input}
      />
      <Pressable
        disabled={text.length === 0}
        style={({pressed}) => [
          {backgroundColor: pressed ? '#b27300' : '#ffa500'},
          text.length > 0 ? styles.button : styles.buttonDisabled,
        ]}
        onPress={toDoHandler}>
        <Text style={styles.buttonText}>Kaydet</Text>
      </Pressable>
    </View>
  );
};

export default Footer;
