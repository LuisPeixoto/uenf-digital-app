import React, {Component} from 'react';
import {BackHandler} from 'react-native';
import {WebView} from 'react-native-webview';
import {modificationsDom} from './modificationsDomLibrary';

export default class App extends Component {
  WEBVIEW_REF = React.createRef();

  state = {
    canGoBack: false,
    url: '',
    marginTop: 0,
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }

  handleBackButton = () => {
    if (this.state.canGoBack) {
      this.WEBVIEW_REF.current.goBack();
      return true;
    }
  };

  onNavigationStateChange = (navState) => {
    this.setState({
      canGoBack: navState.canGoBack,
    });
  };

  render() {
    const {url, margintop} = this.props.route.params;

    return (
      <WebView
        ignoreSslError={true}
        source={{uri: url}}
        injectedJavaScript={modificationsDom}
        javaScriptEnabled={true}
        style={{marginTop: margintop, width: '240%'}}
        ref={this.WEBVIEW_REF}
        startInLoadingState={true}
        scalesPageToFit={true}
        onNavigationStateChange={this.onNavigationStateChange}
      />
    );
  }
}
