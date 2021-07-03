import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import LoadItemInfo from './loadItemInfo'

export default class ItemFeedNoThumbnail extends Component {
    render() {

        const { navigation, index, title, description, date, url, categories } = this.props

        return (
            <View>
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Início', { screen: 'WebView', params: { url: url }, })}>
                    <View style={styles.Container} key={index}   >
                        <View style={styles.Feed}>
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
        )
    }
}

const styles = StyleSheet.create({
    Container: {
        width: "100%",
        flexDirection: "row",
        alignContent: "stretch",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 12,
        paddingRight: 10,
        paddingLeft: 10
    },

    Feed: {
        width: "97%",
        minHeight: 100,
        backgroundColor: "#fff",
        borderRadius: 15,
        borderColor: "#EBF0F1",
        borderStyle: "solid",
        borderWidth: 1,
    },

})