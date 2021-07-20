import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Icon} from 'native-base';

export default class NoResultsSearch extends Component {
  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <View style={styles.Container}>
          <Icon
            style={styles.Icon}
            name="magnify-remove-outline"
            type="MaterialCommunityIcons"
          />
          <Text style={styles.Text}>
            Não houve resultado para:"
            <Text style={styles.TextSecondary}>{this.props.navigation}</Text>"
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },

  Icon: {
    fontSize: 160,
    color: '#CFCFCF',
    textAlign: 'center',
  },

  Text: {
    fontSize: 24,
    textAlign: 'center',
    minHeight: 30,
    textAlignVertical: 'center',
    fontFamily: 'OpenSans-Regular',
    color: '#9F9FA1',
  },

  TextSecondary: {
    fontFamily: 'OpenSans-Bold',
    color: '#7EBF83',
  },
});
