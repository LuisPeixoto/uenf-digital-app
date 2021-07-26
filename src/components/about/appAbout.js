import React, {Component} from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import logo from '../../assets/logos/logoAbout.png';
import {items} from './itemsAppAbout';

const {height} = Dimensions.get('window');

export default class OptionsAbout extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <ScrollView>
        <View style={styles.info}>
          <Image source={logo} style={styles.logo} />
          <Text style={styles.name}>UENF Digital</Text>
          <Text style={styles.description}>Versão: 1.0.0</Text>
          <Text style={styles.description}>Compilado em: 23/06/2021</Text>
        </View>

        <View>
          {items.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate('Início', {
                    screen: item.screen,
                    params: {
                      url: item.url,
                      margintop: 0,
                    },
                  })
                }>
                <View style={styles.container}>
                  <View
                    style={
                      index === 0 ? styles.button : styles.buttonSecondary
                    }>
                    <Text
                      style={
                        index === 0 ? styles.title : styles.titleSecondary
                      }>
                      {item.title}
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    width: '95%',
    minHeight: 68,
    backgroundColor: '#7EBF83',
    borderRadius: 8,
    flexDirection: 'row',
  },

  buttonSecondary: {
    width: '95%',
    minHeight: 68,
    backgroundColor: '#DEDEDE',
    borderRadius: 8,
    flexDirection: 'row',
  },

  info: {
    marginTop: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 124,
  },

  container: {
    width: '100%',
    flexDirection: 'row',
    alignContent: 'stretch',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 12,
    paddingRight: 10,
    paddingLeft: 10,
  },

  logo: {
    width: 100,
    height: 100,
    marginBottom: 16,
  },

  title: {
    fontSize: 24,
    width: '100%',
    textAlignVertical: 'center',
    textAlign: 'center',
    paddingHorizontal: 20,
    fontFamily: 'OpenSans-Regular',
    color: '#fff',
  },

  titleSecondary: {
    fontSize: 24,
    width: '100%',
    textAlignVertical: 'center',
    textAlign: 'center',
    paddingHorizontal: 20,
    fontFamily: 'OpenSans-Regular',
    color: '#8F8F8F',
  },

  name: {
    fontSize: 24,
    minHeight: 20,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontFamily: 'OpenSans-Regular',
    letterSpacing: 1.5,
    color: '#676767',
  },

  description: {
    fontSize: 16,
    textAlignVertical: 'center',
    textAlign: 'center',
    letterSpacing: 1.0,
    fontFamily: 'OpenSans-Regular',
    color: '#A8A8A8',
  },
});
