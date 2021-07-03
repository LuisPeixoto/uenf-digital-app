import React, { Component } from 'react';
import { View} from 'react-native';
import LottieView from 'lottie-react-native';

export default class LoadingSearch extends Component {
    render() {

        return (
            <View style={{ alignItems: "center", width: "100%" }}>
            <LottieView style={{ width: "50%" }}
                colorFilters={[{
                    keypath: "searching",
                    color: "#000000"
                }]}
                source={require('../../assets/loading-green.json')} autoPlay loop />
        </View >
        );
    }
}

