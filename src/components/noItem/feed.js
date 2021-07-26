import React, {Component} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import LottieView from 'lottie-react-native';
import Error from './error';

const {width, height} = Dimensions.get('window');

class NotFoundFeed extends Component {
  _isMounted = false;

  state = {
    timePassed: false,
  };

  componentDidMount() {
    this._isMounted = true;

    let timerState = setTimeout(() => {
      if (this._isMounted) {
        this.setState({timePassed: true});
      }
    }, 60000);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const {navigation} = this.props;
    navigation.setOptions({
      headerShown: false,
      cardStyle: {backgroundColor: '#7EBF83'},
    });

    navigation.dangerouslyGetParent().setOptions({gestureEnabled: false});

    if (!this.state.timePassed) {
      return (
        <View style={styles.Container}>
          <LottieView
            style={{width: width / 2.5}}
            source={require('../../assets/loading.json')}
            autoPlay
            loop
          />
        </View>
      );
    } else {
      return <Error navigation={navigation} />;
    }
  }
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    width: width,
    height: height,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default NotFoundFeed;
