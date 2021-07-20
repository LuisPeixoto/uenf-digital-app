import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Edicts from '../../assets/img/edicts.png';
import Events from '../../assets/img/events.png';

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
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
});
