import React from 'react';
import {
  View,
  Text
} from 'react-native';

export default class SwipeCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    return;
  }
  render() {
    return (
      <View>
        <Text>{ "This is a card" }</Text>
      </View>
    );
  }
};
