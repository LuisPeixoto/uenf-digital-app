import React, {Component} from 'react';
import getRealm from '../../services/realm';
import {FlatList} from 'react-native';
import moment from 'moment';
import NoNotification from '../../components/noItem/notification';
import CardNotification from '../../components/notification/cardNotification';
import getDate from '../../lib/getDate';

export default class Notification extends Component {
  state = {
    productInfo: {},
    items: [],
    refreshing: false,
    page: 1,
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async (page = 1) => {
    const realm = await getRealm();
    const data = realm.objects('Notification');

    for (var items = 0; items < data.length; items++) {
      if (data.isValid()) {
        if (items == 0) {
          this.setState({items: []});
        }
        this.setState({items: [data[items], ...this.state.items]});
      } else {
        continue;
      }
    }
  };

  renderItem = ({item, index}) => {
    return (
      <CardNotification
        index={index}
        title={item.title}
        description={item.description}
        date={getDate(moment(item.date).format('YYYY-MM-DD HH:mm:ss'))}
      />
    );
  };

  onRefresh() {
    this.setState({refreshing: true});
    this.loadProducts().then(() => {
      this.setState({refreshing: false});
    });
    this.loadProducts();
  }

  render() {
    return (
      <FlatList
        data={this.state.items}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        contentContainerStyle={{flexGrow: 1}}
        renderItem={this.renderItem}
        refreshing={this.state.refreshing}
        onRefresh={this.onRefresh.bind(this)}
        ListEmptyComponent={NoNotification}
      />
    );
  }
}
