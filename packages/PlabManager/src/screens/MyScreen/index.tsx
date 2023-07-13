import React from 'react';
import WebView from 'react-native-webview';

const MyScreen = () => (
  <WebView
    source={{ uri: 'https://plabfootball.com' }}
    style={{ marginTop: 20 }}
  />
);

export default MyScreen;
