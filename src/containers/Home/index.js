/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';
import styles from './style';
import COLORS from '../../constants/colors';
import Header from '../../components/Header';

const Home: () => React$Node = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={COLORS.PRIMARY_BLUE}
      />
      <SafeAreaView style={styles.container}>
        <Header />
      </SafeAreaView>
    </>
  );
};

export default Home;
