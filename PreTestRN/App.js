import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import appReducer from './app/redux/reducers';
import { AppNavigation, middleware } from './app/navigations/AppNavigation';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = persistReducer(persistConfig, appReducer);
const store = createStore(rootReducer, applyMiddleware(middleware, thunk));
const persistor = persistStore(store);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigation />
        </PersistGate>
      </Provider>
    );
  }
}