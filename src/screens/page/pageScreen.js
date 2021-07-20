import React, {Component, useEffect} from 'react';
import Page from '../../components/page';

class SearchScreen extends Component {
  render() {
    const {navigation, title, img} = this.props.route.params;
    this.props.navigation.setOptions({
      headerTitle: title,
    });

    return <Page navigation={this.props.navigation} title={title} img={img} />;
  }
}

export default SearchScreen;
