import React, {Component} from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
import Edicts from '../../assets/img/edicts.png';
import Events from '../../assets/img/events.png';

const {width} = Dimensions.get('window');

export default class Header extends Component {
  render() {
    const {title} = this.props;

    return (
      <View style={styles.Container}>
        <Image
          source={title === 'Eventos' ? Events : Edicts}
          style={styles.Thumbnail}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    marginBottom: 30,
  },

  Thumbnail: {
    width: width,
    height: width * (25 / 54),
    resizeMode: 'stretch',
  },
});
