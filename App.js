import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store/configure-store';

import Main from './src/containers/Main';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}