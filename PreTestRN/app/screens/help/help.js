//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

//import file local
import Header from './../../components/Header';

// create a component
class Help extends Component {

  static navigationOptions = (props) => ({
    header: () => (
      <Header {...props}
        title="HELP"
        back={false}  />
    )
  })

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textHeading} >Help, soon!</Text>
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  textHeading: {
    fontSize: 50,
  }
});

//make this component available to the app
export default Help;
