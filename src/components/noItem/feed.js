import React, { Component, useEffect } from 'react';
import { Dimensions, View, StyleSheet, StatusBar } from 'react-native';
import LottieView from 'lottie-react-native';
import Error from './error'

class NotFoundFeed extends Component {

    _isMounted = false;

    state = {
        timePassed: false
    }

    componentDidMount() {
        this._isMounted = true;

        let timerState = setTimeout(() => {
            if (this._isMounted) {
                this.setState({ timePassed: true })
            }
        }, 60000)
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {

        const { navigation } = this.props
        navigation.setOptions({
            headerShown: false,
            cardStyle: { backgroundColor: '#7EBF83' }
        })

        navigation.dangerouslyGetParent()
            .setOptions({ gestureEnabled: false });

        if (!this.state.timePassed) {
            return (
                <View style={styles.Container}>
                    <LottieView
                        style={{ width: "50%" }}
                        source={require('../../assets/loading.json')}
                        autoPlay
                        loop
                    />
                </View >
            )
        } else {
            return <Error navigation={navigation} />
        }
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: "center",
        top: 0,
        left: 0,
        marginTop: "60%",
        width: "100%",
    },
})

export default NotFoundFeed
