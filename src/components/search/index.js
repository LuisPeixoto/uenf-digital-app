import React, {Component} from 'react';
import {Icon} from 'native-base';
import {
  View,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import img from '../../assets/img/search.png';
import api from '../../services/api';
import NoResultsSearch from '../noItem/noResultsSearch';
import {itemsQuickAccess} from '../quickAccess/itemsSearchQuickAccess';
import LoadingSearch from '../search/loadingSearch';
import CardNoThumbnail from '../post/cardNoThumbnail';
import Card from '../post/card';
import SearchQuickAccess from '../quickAccess/searchQuickAccess';
import getDate from '../../lib/getDate';
import CardStudentAssociations from '../post/cardsSudentAssociations';

const {width} = Dimensions.get('window');

export default class SearchScreen extends Component {
  _isMounted = false;

  state = {
    productInfo: {},
    items: [],
    valueSearch: '',
    timePassed: false,
    page: 1,
    teste: true,
  };

  componentDidMount() {
    // this.loadProducts();

    if (this.state.valueSearch.length <= 2) {
      this.setState({items: []});
    }
    this.loading();
  }

  componentWillUnmount() {
    // this.loadProducts();

    this.setState({items: []});
  }

  loading() {
    this._isMounted = true;

    let timerState = setTimeout(() => {
      if (this._isMounted) {
        this.setState({timePassed: true});
      }
    }, 20000);
  }

  loadProducts = async (page = 1, text) => {
    try {
      const response = api.get(`/posts/search?q=${text}&p=${page}`);
      const {posts, ...productInfo} = (await response).data;
      if (page == 1) {
        this.setState({items: [...posts], productInfo, page});
      } else {
        this.setState({
          items: [...this.state.items, ...posts],
          productInfo,
          page,
        });
      }
    } catch (error) {
      if (page == 1) {
        this.setState({items: []});
      } else {
        this.setState({items: [...this.state.items]});
      }
    }
  };

  handleSearch = (text) => {
    this.setState({valueSearch: text, timePassed: false});
    if (text.length > 2) {
      this.componentDidMount();
      this.loadProducts(1, text);
    } else {
      if (!text) {
        this.setState({valueSearch: ''});
      }
      this.setState({items: []});
    }
  };

  postCard(date, item, index) {
    const {navigation} = this.props;
    return (
      <Card
        index={index}
        title={item.title}
        description={item.description}
        date={date}
        image={item.image}
        url={item.url}
        categories={item.categories}
        navigation={navigation}
      />
    );
  }

  postCardNoThumbnail(date, item, index) {
    const {navigation} = this.props;

    return (
      <CardNoThumbnail
        index={index}
        title={item.title}
        description={item.description}
        date={date}
        url={item.url}
        categories={item.categories}
        navigation={navigation}
      />
    );
  }

  renderNoItem = () => {
    return (
      <View style={styles.ContainerQuick}>
        {itemsQuickAccess.map((item, index) => {
          return (
            <View style={styles.BoxQuick} key={index}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => this.handleSearch(item.name)}>
                <SearchQuickAccess
                  name={item.name}
                  nameIcon={item.nameIcon}
                  typeIcon={item.typeIcon}
                />
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    );
  };

  renderNotFound = (text) => {
    if (!this.state.timePassed) {
      return <LoadingSearch />;
    } else {
      return <NoResultsSearch navigation={text} />;
    }
  };

  NoItem = () => {
    if (this.state.valueSearch == '' || this.state.valueSearch.length <= 2) {
      return <View>{this.renderNoItem()}</View>;
    } else {
      return <View>{this.renderNotFound(this.state.valueSearch)}</View>;
    }
  };

  renderItem = ({item, index}) => {
    var date = getDate(item.date);
    var image = String(item.image);
    image = !!image.match(/\.jpg|\.jpeg|\.png|\.gif/);
    if (this.state.valueSearch.length > 2) {
      if (item.categories == 'Associações estudantis') {
        return (
          <CardStudentAssociations
            index={index}
            navigation={this.props.navigation}
            title={item.title}
            description={item.description}
            instagram={item.instagram}
            image={item.image}
          />
        );
      } else if (item.image && image) {
        return this.postCard(date, item, index);
      } else {
        return this.postCardNoThumbnail(date, item, index);
      }
    } else if (index == 0) {
      return this.NoItem();
    }
  };

  loadMore = () => {
    const {page, productInfo} = this.state;
    if (page === productInfo.pages) {
      return;
    }

    const pageNumber = page + 1;

    this.setState({page: pageNumber});

    this.loadProducts(pageNumber, this.state.valueSearch);
  };

  SearchComponent = ({}) => (
    <View style={{alignItems: 'center'}}>
      {this.state.valueSearch.length <= 2 && (
        <View style={styles.containersImage}>
          <Image source={img} style={styles.Thumbnail} />
        </View>
      )}

      <View
        style={[
          this.state.valueSearch.length <= 2
            ? styles.ContainersNoItem
            : styles.Containers,
        ]}>
        <TextInput
          placeholder="Digite o que deseja..."
          placeholderTextColor="#BFBFBF"
          style={styles.TextInput}
          value={this.state.valueSearch}
          onChangeText={(text) => {
            this.handleSearch(text);
          }}
        />

        <View style={styles.Button}>
          <Icon style={styles.Icon} name="search" />
        </View>
      </View>
    </View>
  );

  render() {
    return (
      <FlatList
        data={this.state.items}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        contentContainerStyle={{flexGrow: 1}}
        renderItem={this.renderItem}
        ListEmptyComponent={this.NoItem}
        onEndReached={this.loadMore}
        ListHeaderComponent={this.SearchComponent}
      />
    );
  }
}

const styles = StyleSheet.create({
  Containers: {
    width: '90%',
    flexDirection: 'row',
    alignContent: 'stretch',
    flexWrap: 'wrap',
    marginTop: 40,
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    borderColor: '#EBF0F1',
    borderStyle: 'solid',
    borderWidth: 1,
  },

  ContainersNoItem: {
    width: '90%',
    flexDirection: 'row',
    alignContent: 'stretch',
    flexWrap: 'wrap',
    marginTop: 100,
    marginBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#ccc',
    borderColor: '#EBF0F1',
    borderStyle: 'solid',
    borderWidth: 1,
  },

  Thumbnail: {
    width: width,
    height: width * (25 / 54),
    resizeMode: 'cover',
  },

  containersImage: {
    width: '100%',
    height: 120,
  },

  TextInput: {
    width: '70%',
    height: 65,
    fontSize: 21,
    fontFamily: 'OpenSans-Regular',
    color: '#787878',
  },

  Icon: {
    color: '#7EBF83',
    fontSize: 32,
  },

  Button: {
    width: '20%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  ContainerQuick: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
    flexWrap: 'wrap',
    width: '100%',
  },

  BoxQuick: {
    width: '50%',
    padding: 10,
  },
});
