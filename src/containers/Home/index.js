/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';
import styles from './style';
import COLORS from '../../constants/colors';

const Home: () => React$Node = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={COLORS.PRIMARY_BLUE}
      />
      <SafeAreaView style={styles.container}>
        <Text>Ola mundo</Text>
      </SafeAreaView>
    </>
  );
};

export default Home;
