import React, {Component} from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {items} from './itemsAssignment';

export default class OptionsAbout extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <ScrollView>
        <View style={styles.containerInfo}>
          <View style={styles.info}>
            <Text style={styles.description}>
              Atribuições dos autores das imagens usadas no aplicativo.
            </Text>
          </View>
        </View>
        <View style={{marginTop: '8%'}}>
          {items.map((item, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate('Início', {
                    screen: 'WebView',
                    params: {
                      url: item.url,
                      margintop: 0,
                    },
                  })
                }>
                <View style={styles.Container} key={index}>
                  <View style={styles.Feed}>
                    <Image source={item.image} style={styles.Thumbnail} />
                    <Text style={styles.name}>{item.name}</Text>
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
  containerInfo: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 12,
    paddingRight: 10,
    paddingLeft: 10,
  },

  info: {
    marginTop: '10%',
    width: '95%',
    minHeight: 68,
    backgroundColor: '#DEDEDE',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 8,
  },

  Container: {
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

  Feed: {
    width: '97%',
    minHeight: 100,
    backgroundColor: '#fff',
    borderRadius: 8,
  },

  Thumbnail: {
    width: '100%',
    height: 250,
    resizeMode: 'stretch',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },

  name: {
    fontSize: 21,
    minHeight: 40,
    width: '100%',
    letterSpacing: -0.72,
    textAlignVertical: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    fontFamily: 'OpenSans-Light',
    color: '#676767',
    marginBottom: 8,
  },

  description: {
    fontSize: 18,
    minHeight: 20,
    textAlignVertical: 'center',
    textAlign: 'center',
    margin: 5,
    fontFamily: 'OpenSans-Regular',
    letterSpacing: 1.5,
    color: '#909090',
  },
});
