//import liraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';

//import file local\
import Header from './../../../components/Header';
import { styles } from './../profileStyle';

// create a component
class Profile extends Component {

  static navigationOptions = (props) => ({
    header: () => (
      <Header {...props}
        title="PROFILE"
        back={false}  />
    )
  })

  render() {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
      </View>
    );
  }
}

//make this component available to the app
export default Profile;
