// @flow
import React from 'react';
import {Image, View, Text} from 'react-native';
import styles from './style';

export default function Header() {
  return (
    <View style={styles.container}>
      <Image source={require('./img/sauron.png')} style={styles.image} />
      <Text style={styles.text}>I see you</Text>
    </View>
  );
}
