import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {View} from 'react-native';
import Header from '../../src/components/Header';
const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#dfdfdf',
};

const CenteredView = ({children}) => <View style={style}>{children}</View>;

storiesOf('Header', module).add('default view', () => (
  <CenteredView>
    <Header />
  </CenteredView>
));
