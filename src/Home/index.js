/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, View, Text, StatusBar} from 'react-native';

const Home: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView>
        <View>
          <Text>Ola mundo</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Home;
