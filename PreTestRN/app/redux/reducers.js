import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';

import { RootNavigation } from './../navigations/AppNavigation';

import auth from './../screens/auth/authReducer';
import merchant from './../screens/merchant/merchantReducer';

const nav = createNavigationReducer(RootNavigation);

const appReducer = combineReducers({
  nav,
  auth,
  merchant
});

export default appReducer;