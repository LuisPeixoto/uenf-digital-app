import React, { Component } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import {Icon} from 'native-base'

export default class SearchQuickAccess extends Component {
    render() {

        const { name, typeIcon, nameIcon } = this.props

        return (
            <View style={styles.Container}>
                <Icon style={styles.Icon} type={typeIcon} name={nameIcon} />
                <Text style={styles.Title}>{name}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        height: 100,

        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderRadius: 15,
    },

    Icon: {
        width: 60,
        height: 60,
        fontSize: 50,
        color: '#7EBF83',
        textAlign: "center",
        textAlignVertical: "center",
        alignContent: "center",
        justifyContent: "center"
    },

    Title: {
        fontSize: 18,
        color: '#7EBF83',
        textAlign: "center",
        textAlignVertical: "bottom",
        fontFamily: 'OpenSans-Medium',
        paddingBottom:10,
    },
})