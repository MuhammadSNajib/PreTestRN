//import liraries
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, Platform, ToolbarAndroid } from 'react-native';
import { Icon } from 'react-native-elements';

//import file local
import StatusBar from './StatusBar';

import { styles } from './utils/styles';

// create a component
class Header extends Component {
  render() {
    return (
      <View>
        <StatusBar />
        {Platform.OS === "android" && Platform.Version >= 20 ?
          <View style={styles.subStatusbar} />
          : null}
        {this.props.transparent === true ?
          <View style={[styles.containerHeaderMain, { backgroundColor: 'transparent' }]}>
            {this.props.back === true ?
              Platform.OS === 'android' ?
                <Icon name="md-arrow-back" type="ionicon" iconStyle={styles.iconBack} containerStyle={styles.contentIconBack} onPress={() => this.props.navigation.dispatch({ type: 'Navigation/BACK' })} />
                :
                <Icon name="ios-arrow-back" type="ionicon" iconStyle={styles.iconBack} containerStyle={styles.contentIconBack} onPress={() => this.props.navigation.dispatch({ type: 'Navigation/BACK' })} />
              : null}
            <Text style={[styles.textTitleHeader]}>{this.props.title}</Text>
          </View>
          :
          <View style={styles.containerHeaderMain}>
            {this.props.back === true ?
              Platform.OS === 'android' ?
                <Icon name="md-arrow-back" type="ionicon" iconStyle={styles.iconBack} containerStyle={styles.contentIconBack} onPress={() => this.props.navigation.dispatch({ type: 'Navigation/BACK' })} />
                :
                <Icon name="ios-arrow-back" type="ionicon" iconStyle={styles.iconBack} containerStyle={styles.contentIconBack} onPress={() => this.props.navigation.dispatch({ type: 'Navigation/BACK' })} />
              : null}
            <Text style={[styles.textTitleHeader]}>{this.props.title}</Text>
          </View>
        }
      </View>
    );
  }
}

//make this component available to the app
export default Header;
