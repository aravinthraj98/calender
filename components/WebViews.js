import React from 'react';
import {ScrollView} from 'react-native';
import {WebView} from 'react-native-webview';

function WebViews() {
  const uri =
    'http://stackoverflow.com/questions/35531679/react-native-open-links-in-browser';
  return <WebView source={{uri: 'https://gmail.com'}} />;
}
export default WebViews;
