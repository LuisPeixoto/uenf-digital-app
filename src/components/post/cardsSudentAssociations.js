import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { Icon } from 'native-base'

export default class ItemFeedNoThumbnail extends Component {
    render() {

        const { navigation, index, title, description, image, instagram } = this.props

        return (
            <View>
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate('Início', { screen: 'WebView', params: { url: `http://instagram.com/${instagram}/` }, })}>
                    <View style={styles.Container} key={index}   >
                        <View style={styles.Feed}>
                            <View style={styles.ContainerImage}>
                                <Image source={{ uri: image }} style={styles.Thumbnail} />
                            </View>
                            <View style={styles.InfoFeed}>
                                <Text style={styles.TitleFeed} >{title}</Text>
                                <Text ellipsizeMode='tail' style={styles.DescriptionFeed} >{description}</Text>
                                <View style={styles.DateAndCategoriesFeed}  >
                                    <Icon style={styles.DateIcon} name="instagram" type="AntDesign" />
                                    <Text style={styles.DateFeed} >{instagram}</Text>
                                </View>
                            </View>
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

    InfoFeed: {
        width: "100%",
        padding: 10
    },

    TitleFeed: {
        fontSize: 28,
        minHeight: 40,
        width: "100%",
        letterSpacing: -0.72,
        textAlignVertical: "center",
        textAlign: "center",
        justifyContent: "center",
        fontFamily: 'OpenSans-Bold',
        color: "#676767",
        marginBottom: 8,
        marginBottom: 8
    },

    ContainerImage: {
        width: "100%",
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#C6EDC9",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
    },

    Thumbnail: {
        width: "50%",
        minHeight: 100,
        borderRadius: 100 / 2,
        resizeMode: 'contain',

    },

    DescriptionFeed: {
        fontSize: 16,
        letterSpacing: -0.72,
        color: "#797979",
        paddingBottom: 10,
        lineHeight: 22,
        fontFamily: 'OpenSans-Regular',
        textAlign: 'justify',

    },

    CategoriesFeed: {
        textAlign: "right",
        flexBasis: "50%",
        fontSize: 16,
        fontFamily: 'OpenSans-Regular',
        color: '#C0C0C0'
    },

    DateFeed: {
        textAlign: "left",
        flexBasis: "50%",
        fontSize: 16,
        fontFamily: 'OpenSans-Regular',
        color: '#C0C0C0',
        textAlignVertical: 'center',

    },

    DateAndCategoriesFeed: {
        width: "100%",
        flexDirection: "row",
        alignItems: 'flex-end',
        textAlignVertical: 'center',
    },

    DateIcon: {
        fontSize: 18,
        fontFamily: 'OpenSans-Regular',
        color: '#C0C0C0',
        marginHorizontal: 5,
        textAlignVertical: "center",
        alignSelf: "center",
        top: 1,


    }

})