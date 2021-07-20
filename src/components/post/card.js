import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import LoadItemInfo from './Info';

export default class Card extends Component {
  render() {
    const {
      navigation,
      index,
      title,
      description,
      date,
      image,
      url,
      categories,
    } = this.props;

    return (
      <View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate('Início', {
              screen: 'WebView',
              params: {
                url: url,
              },
            })
          }>
          <View style={styles.Container} key={index}>
            <View style={styles.Feed}>
              <Image source={{uri: image}} style={styles.Thumbnail} />
              <LoadItemInfo
                title={title}
                description={description}
                date={date}
                categories={categories}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    borderRadius: 15,
  },

  Thumbnail: {
    width: '100%',
    minHeight: 250,
    resizeMode: 'cover',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});
