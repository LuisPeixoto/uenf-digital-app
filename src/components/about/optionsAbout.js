import React, {Component} from 'react';
import {
  TouchableOpacity,
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {Icon} from 'native-base';
import {FlatList} from 'react-native-gesture-handler';
import img from '../../assets/img/about.png';
import {items} from './itemsOptionsAbout';

const {width} = Dimensions.get('window');

export default class OptionsAbout extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <ScrollView>
        <View>
          <Image source={img} style={styles.Thumbnail} />
        </View>
        <FlatList
          data={items}
          style={{marginTop: 50}}
          keyExtractor={(item, index) => {
            return index.toString();
          }}
          renderItem={({item, index}) => (
            <View>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate('Início', {
                    screen: item.screen,
                    params: {
                      url: item.url,
                      margintop: 0,
                    },
                  })
                }>
                <View style={styles.Containers}>
                  <View style={styles.Feed}>
                    <Icon
                      style={styles.Icon}
                      name={item.nameIcon}
                      type={item.typeIcon}
                    />
                    <Text style={styles.Title}>{item.title}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  Icon: {
    fontSize: 50,
    color: '#7EBF83',
    marginVertical: 20,
    margin: 10,
    marginLeft: 20,
  },

  Feed: {
    width: '97%',
    minHeight: 80,
    backgroundColor: '#fff',
    borderRadius: 15,
    flexDirection: 'row',
    borderRightColor: '#7EBF83',
    borderRightWidth: 8,
  },

  Containers: {
    width: '100%',
    flexDirection: 'row',
    alignContent: 'stretch',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 12,
    paddingRight: 10,
    paddingLeft: 10,
  },

  Thumbnail: {
    width: width,
    height: width * (25 / 54),
    resizeMode: 'cover',
  },

  Title: {
    fontSize: 24,
    width: '80%',
    textAlignVertical: 'center',
    textAlign: 'left',
    paddingHorizontal: 20,
    fontFamily: 'OpenSans-Regular',
    color: '#7EBF83',
  },

  Category: {
    fontSize: 24,
    minHeight: 50,
    textAlignVertical: 'center',
    textAlign: 'center',
    fontFamily: 'OpenSans-Medium',
    textTransform: 'uppercase',
    marginBottom: 10,
    color: '#676767',
  },
});
