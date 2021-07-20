import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Icon} from 'native-base';

export default class Notification extends Component {
  render() {
    return (
      <View style={styles.Container}>
        <View style={styles.ContentIcon}>
          <Icon
            style={styles.Icon}
            name="notifications-outline"
            type="Ionicons"
          />
        </View>
        <Text style={styles.TextFirst}>Não há novas notificações</Text>
        <Text style={styles.TextSecondary}>
          Quando você receber uma notificação, será possível visualizar aqui
          mesmo.{' '}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
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
