import React, { Component } from 'react';
import { View, StyleSheet, Dimensions, Image } from 'react-native';
import Edicts from '../../assets/img/edicts.png'
import Events from '../../assets/img/events.png'
// import Eventss from '../../assets/img/events.png'

const { width } = Dimensions.get('window');




export default class Header extends Component {
    render() {
        const { title } = this.props

        return (
            <View style={{ alignItems: "center", marginBottom: 30 }}>
                <Image
                    source={
                        title == "Eventos" ? Events : Edicts
                    }
                    style={styles.Thumbnail}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({

    Thumbnail: {
        width: "100%",
        height: 180,
        resizeMode: 'cover'
    },
})