import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class Info extends Component {
  render() {
    const {title, description, date, categories} = this.props;

    return (
      <View style={styles.InfoFeed}>
        <Text style={styles.TitleFeed}>{title}</Text>
        <Text
          ellipsizeMode="tail"
          numberOfLines={2}
          style={styles.DescriptionFeed}>
          {description}...
        </Text>

        <View style={styles.DateAndCategoriesFeed}>
          <Text style={styles.DateFeed}>{date}</Text>
          <Text style={styles.CategoriesFeed}>{categories}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  InfoFeed: {
    width: '100%',
    padding: 10,
  },

  TitleFeed: {
    fontSize: 21,
    minHeight: 40,
    width: '100%',
    letterSpacing: -0.72,
    textAlignVertical: 'center',
    textAlign: 'left',
    justifyContent: 'center',
    fontFamily: 'OpenSans-Bold',
    color: '#676767',
    marginBottom: 8,
  },

  DescriptionFeed: {
    fontSize: 16,
    letterSpacing: -0.72,
    color: '#797979',
    paddingBottom: 10,
    lineHeight: 22,
    fontFamily: 'OpenSans-Regular',
    textAlign: 'justify',
    maxHeight: 120,
  },

  CategoriesFeed: {
    textAlign: 'right',
    flexBasis: '50%',
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    color: '#C0C0C0',
  },

  DateFeed: {
    textAlign: 'left',
    flexBasis: '50%',
    fontSize: 16,
    fontFamily: 'OpenSans-Regular',
    color: '#C0C0C0',
  },

  DateAndCategoriesFeed: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
});
