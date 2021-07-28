import React, {Component} from 'react';
import {FlatList} from 'react-native';
import api from '../../services/api';
import LoadingSearch from '../search/loadingSearch';
import CardNoThumbnail from '../post/cardNoThumbnail';
import Card from '../post/card';
import getDate from '../../lib/getDate';
import CardStudentAssociations from '../post/cardsSudentAssociations';
import Header from '../page/header';
import Error from '../noItem/error';
import {View} from 'native-base';

export default class Page extends Component {
  _isMounted = false;

  state = {
    productInfo: {},
    items: [],
    timePassed: false,
    page: 1,
  };

  componentDidMount() {
    this.loadProducts();
    this.loading();
  }

  loading() {
    this._isMounted = true;

    let timerState = setTimeout(() => {
      if (this._isMounted) {
        this.setState({timePassed: true});
      }
    }, 60000);
  }

  loadProducts = async (page = 1) => {
    const {title} = this.props;
    try {
      const response = api.get(`/posts/search?q=${title}&p=${page}`);

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

  renderNotFound = () => {
    const {navigation} = this.props;
    if (!this.state.timePassed) {
      return <LoadingSearch />;
    } else {
      return (
        <View style={{marginTop: -140}}>
          <Error navigation={navigation} />
        </View>
      );
    }
  };

  renderItem = ({item, index}) => {
    var date = getDate(item.date);
    var image = String(item.image);
    image = !!image.match(/\.jpg|\.jpeg|\.png|\.gif/);
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

  header = () => {
    const {title} = this.props;
    return <Header title={title} />;
  };

  render() {
    return (
      <FlatList
        data={this.state.items}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        contentContainerStyle={{flexGrow: 1}}
        renderItem={this.renderItem}
        ListEmptyComponent={this.renderNotFound}
        onEndReached={this.loadMore}
        ListHeaderComponent={this.header}
      />
    );
  }
}
