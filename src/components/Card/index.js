import React from 'react';
import {View, Text} from 'react-native';
import styles from './style';

export default function Card() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>I am placeholder</Text>
      </View>
    </View>
  );
}
