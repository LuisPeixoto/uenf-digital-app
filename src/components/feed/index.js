import React, {Component} from 'react';
import {View, FlatList} from 'react-native';
import api from '../../services/api';
import QuickAccess from '../quickAccess/';
import NoFeed from '../noItem/feed';
import getDate from '../../lib/getDate';
import Card from '../post/card';
import CardNoThumbnail from '../post/cardNoThumbnail';

export default class Feed extends Component {
  state = {
    productInfo: {},
    items: [],
    page: 1,
    refreshing: false,
    QuickAccess: false,
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadQuickAccess() {
    const {navigation} = this.props;
    return <QuickAccess navigation={navigation} />;
  }

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

  loadProducts = async (page = 1) => {
    const response = api.get(`/posts?p=${page}`);
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
  };

  loadMore = () => {
    const {page, productInfo} = this.state;
    if (page === productInfo.pages) {
      return;
    }

    const pageNumber = page + 1;

    this.loadProducts(pageNumber);
  };

  onRefresh() {
    this.setState({refreshing: true});
    this.loadProducts().then(() => {
      this.setState({refreshing: false});
    });
    this.loadProducts();
  }

  renderItem = ({item, index}) => {
    var date = getDate(item.date);
    var image = String(item.image);
    image = !!image.match(/\.jpg|\.jpeg|\.png|\.gif/);

    if (index == 0) {
      if (item.image && image) {
        return (
          <View>
            {this.loadQuickAccess()}
            {this.postCard(date, item, index)}
          </View>
        );
      } else {
        return (
          <View>
            {this.loadQuickAccess()}
            {this.postCardNoThumbnail(date, item, index)}
          </View>
        );
      }
    } else {
      if (item.image && image) {
        return <View>{this.postCard(date, item, index)}</View>;
      } else {
        return <View>{this.postCardNoThumbnail(date, item, index)}</View>;
      }
    }
  };

  noFeed = () => {
    const {navigation} = this.props;

    return <NoFeed navigation={navigation} />;
  };

  render() {
    const {navigation} = this.props;
    navigation.setOptions({
      headerShown: true,
      cardStyle: {backgroundColor: '#F2F2F2'},
    });

    navigation.dangerouslyGetParent().setOptions({gestureEnabled: true});

    return (
      <FlatList
        data={this.state.items}
        extraData={this.state}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        renderItem={this.renderItem}
        refreshing={this.state.refreshing}
        onRefresh={this.onRefresh.bind(this)}
        ListEmptyComponent={this.noFeed}
        onEndReached={this.loadMore}
        onEndReachedThreshold={0.1}
      />
    );
  }
}
