import React, {Component} from 'react';
import {ActivityIndicator, View} from 'react-native';

export default class LoadingSearch extends Component {
  render() {
    return (
      <View style={{alignItems: 'center', width: '100%'}}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }
}
