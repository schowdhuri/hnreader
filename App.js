import React from 'react';
import { Text, View } from 'react-native';
import { Container } from "native-base";
import { Provider } from "react-redux";
import createMiddleware from "redux-saga";

import configureStore from "./store"; // eslint-disable-line import/default
import reducer from "./reducers";
import sagas from "./sagas";
import HNReader from "./pages";

const sagaMiddleware = createMiddleware();
const store = configureStore(reducer, sagaMiddleware);
sagaMiddleware.run(sagas);

export default class Root extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
        fontsLoaded: false
    };
  }
  async componentDidMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ fontsLoaded: true });
  }
  render() {
    return this.state.fontsLoaded
        ? (<Provider store={store}>
           <HNReader />
        </Provider>)
        : null;
  }
}
