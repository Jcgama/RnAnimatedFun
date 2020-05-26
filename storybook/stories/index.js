import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {View} from 'react-native';
import Header from '../../src/components/Header';
import Card from '../../src/components/Card';
import COLORS from '../../src/constants/colors';
const style = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: COLORS.PRIMARY_BLUE,
};

const CenteredView = ({children}) => <View style={style}>{children}</View>;

storiesOf('Header', module).add('default view', () => (
  <CenteredView>
    <Header />
  </CenteredView>
));

storiesOf('Card', module).add('default view', () => (
  <CenteredView>
    <Card />
  </CenteredView>
));
