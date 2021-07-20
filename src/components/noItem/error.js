import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Icon} from 'native-base';

class Error extends Component {
  render() {
    const {navigation} = this.props;
    navigation.setOptions({
      cardStyle: {backgroundColor: '#F2F2F2'},
    });

    return (
      <View style={styles.Container}>
        <View style={styles.ContentIcon}>
          <Icon style={styles.Icon} name="construct" type="Ionicons" />
        </View>
        <Text style={styles.TextFirst}>
          Estamos passando por problemas técnicos
        </Text>
        <Text style={styles.TextSecondary}>
          Nossa equipe já está trabalhando para normarlizar o quanto antes,
          tente novamente mais tarde.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginTop: 150,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  ContentIcon: {
    width: 150,
    height: 150,
    margin: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    justifyContent: 'center',
    borderRadius: 180 / 2,
  },

  Icon: {
    fontSize: 130,
    color: '#CFCFCF',
    textAlign: 'center',
  },

  TextFirst: {
    fontSize: 32,
    width: '80%',
    textAlign: 'center',
    minHeight: 30,
    textAlignVertical: 'center',
    marginBottom: 10,

    fontFamily: 'OpenSans-Regular',
    color: '#7EBF83',
  },

  TextSecondary: {
    fontSize: 16,
    width: '80%',
    textAlign: 'center',
    minHeight: 30,
    textAlignVertical: 'center',

    fontFamily: 'OpenSans-Regular',
    color: '#9F9FA1',
  },
});

export default Error;
