import React from 'react';
import { AppRegistry } from 'react-native';
import App from './src/App';

const citizenApp = props => (
  <App />
);

AppRegistry.registerComponent('citizenApp', () => citizenApp);
