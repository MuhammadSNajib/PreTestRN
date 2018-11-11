import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';

import { RootNavigation } from './../navigations/AppNavigation';

import auth from './../screens/auth/authReducer';
import merchant from './../screens/merchant/merchantReducer';
import profile from './../screens/profile/profileReducer';

const nav = createNavigationReducer(RootNavigation);

const appReducer = combineReducers({
  nav,
  auth,
  merchant,
  profile
});

export default appReducer;