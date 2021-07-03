import React, { Component } from 'react';
import { View, StyleSheet, Text} from 'react-native';
import {Icon} from 'native-base'

export default class Card extends Component {
    render() {

        const { index, title, description, date } = this.props

        return (
            <View style={styles.Containers} key={index}   >
                <View style={styles.Feed}  >
                    <View style={styles.Info}>
                        <Text style={styles.Title} >{title}</Text>
                        <Text style={styles.Description} >{description}</Text>
                        <View style={styles.DateAndCategories}  >
                            <View style={styles.DateAndIcon} >
                                <Icon style={styles.DateIcon} name="clock-o" type="FontAwesome" />
                                <Text style={styles.Date, styles.DateText}  >{date}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Containers: {
        width: "100%",
        flexDirection: "row",
        alignContent: "stretch",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        paddingRight: 10,
        paddingLeft: 10,
        borderColor: "#ddd",
        borderStyle: "solid",
        borderBottomWidth: 1,
        backgroundColor: "#fff",
    },

    Feed: {
        width: "97%",
        minHeight: 100,
    },

    Thumbnail: {
        width: "100%",
        minHeight: 300,

    },

    Info: {
        width: "100%",
        padding: 10,
    },

    Description: {
        color: "#666",
        paddingBottom: 10,
        lineHeight: 20,
        textAlign: 'justify'
    },


    Title: {
        fontSize: 20,
        minHeight: 30,
        textAlignVertical: "center",
        textAlign: "left",
        fontFamily: 'OpenSans-Regular',
        color: "#676767",
        marginBottom: 5
    },

    Icon: {
        fontSize: 30,
        color: "#fff",
        textAlign: "center"
    },

    Categories: {
        textAlign: "right",
        flexBasis: "50%",
        fontSize: 14,
        fontFamily: 'OpenSans-Regular',
        color: '#C0C0C0'
    },

    Date: {
        fontSize: 14,
        textAlignVertical: "center",
    },

    DateText: {
        marginLeft: 5,
        color: '#C0C0C0',
        alignSelf: "center",
        fontFamily: 'OpenSans-Regular',
    },


    DateIcon: {
        fontSize: 16,
        fontFamily: 'OpenSans-Regular',
        color: '#C0C0C0',
        textAlignVertical: "center",
        alignSelf: "center",
        top: 1,

    },

    DateContent: {
        textAlign: "left",
        flexBasis: "50%",
    },

    DateAndIcon: {
        width: "100%",
        flexDirection: "row",
        alignItems: 'flex-end',
    },

    backTextWhite: {
        color: '#FFF',
    },
    rowFront: {
        alignItems: 'center',
        backgroundColor: '#CCC',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 50,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: 'red',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
    }

})