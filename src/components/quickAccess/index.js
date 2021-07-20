import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import {Dimensions, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import {items} from './itemsFeedQuickAccess';

const windowWidth = Dimensions.get('window').width;

export default class Quickaccess extends Component {
  render() {
    const {navigation} = this.props;

    return (
      <FlatGrid
        itemDimension={windowWidth / 3.5}
        data={items}
        style={styles.Container}
        renderItem={({item, index}) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate('Início', {
                screen: item.screen,
                params: {
                  title: item.title,
                  url: item.link,
                  img: item.img,
                },
              })
            }>
            <View style={styles.Access}>
              <Icon
                style={styles.Icons}
                type={item.IconType}
                name={item.nameIcon}
              />
              <Text style={styles.Title}>{item.title}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    marginTop: 10,
    flex: 1,
    width: '97%',
    alignSelf: 'center',
  },

  Access: {
    height: 100,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    borderColor: '#EBF0F1',
    borderStyle: 'solid',
    borderWidth: 1,
  },

  Icons: {
    width: 60,
    height: 60,
    fontSize: 40,
    color: '#7EBF83',
    textAlign: 'center',
    textAlignVertical: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },

  Title: {
    fontSize: 16,
    color: '#7EBF83',
    textAlign: 'center',
    textAlignVertical: 'bottom',
    fontFamily: 'OpenSans-Regular',
  },
});
