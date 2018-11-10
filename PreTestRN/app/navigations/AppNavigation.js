import React from 'react';
import { View, Platform } from 'react-native';
import { connect } from 'react-redux';
import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import { reduxifyNavigator, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

import { Colors } from './../components/utils/colors';

import TabBar from './../components/TabBar';

import Login from './../screens/auth/screens/login';
import Home from './../screens/home/screens/home';
import Help from './../screens/help/help';
import Profile from './../screens/profile/screens/profile';
import Merchant from './../screens/merchant/screens/merchant';
import DetailMerchant from './../screens/merchant/screens/detailMerchant';

const middleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const UnAuthNavigation = createStackNavigator({
  Login: { screen: Login }
}, {
    initialRouteName: 'Login',
    headerMode: 'none'
  })

const TabHome = createStackNavigator({
  Home: { screen: Home }
})

const TabHelp = createStackNavigator({
  Help: { screen: Help }
})

const TabProfile = createStackNavigator({
  Profile: { screen: Profile }
})

const AuthNavigation = createStackNavigator({
  Main: {
    screen: createBottomTabNavigator({
      Home: TabHome,
      Help: TabHelp,
      Profile: TabProfile,
    }, {
        backBehavior: 'none',
        lazy: true,
        animationEnabled: true,
        tabBarPosition: 'bottom',
        showIcon: true,
        tabBarComponent: (props) => <TabBar {...props} />,
        tabBarOptions: {
          inactiveTintColor: '#ffffff',
          activeTintColor: '#000000',
          showLabel: false,
          showIcon: true,
          indicatorStyle: {
            opacity: 0
          },
        }
      }, {
        initialRouteName: 'Home',
        headerMode: 'none'
      }),
    navigationOptions: (props) => ({
      header: null
    })
  },
  Merchant: {
    screen: Merchant
  },
  DetailMerchant: {
    screen: DetailMerchant
  },
}, {
    initialRouteName: 'Main',
  })

const RouteConfigs = {
  UnAuthNavigation: { screen: UnAuthNavigation },
  AuthNavigation: { screen: AuthNavigation }
}

const SwitchNavigatorConfig = {
  initialRouteName: 'UnAuthNavigation'
}

const RootNavigation = createSwitchNavigator(RouteConfigs, SwitchNavigatorConfig);
const AppWithNavigationState = reduxifyNavigator(RootNavigation, 'root');

const mapStateToProps = state => ({
  state: state.nav,
});

const AppNavigation = connect(mapStateToProps)(AppWithNavigationState);

export { RootNavigation, AppNavigation, middleware };