import React from 'react';
import {Text, View} from 'react-native';
import styles from './Header.style';

const Header = ({count}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Yapılacaklar</Text>
      <Text style={styles.count}>{count}</Text>
    </View>
  );
};

export default Header;
