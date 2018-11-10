//import liraries
import React, { Component } from 'react';
import { View, StatusBar as StatusBarCustom } from 'react-native';

//import file local
import { Colors } from './utils/colors';

// create a component
class StatusBar extends Component {
  render() {
    return (
      <StatusBarCustom
        translucent
        backgroundColor="rgba(0, 0, 0, 0.20)"
        animated />
    );
  }
}

//make this component available to the app
export default StatusBar;
