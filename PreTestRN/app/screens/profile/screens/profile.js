//import liraries
import React, { Component } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import { Button, Icon, Avatar } from 'react-native-elements';
import { connect } from 'react-redux';

//import file local\
import Header from './../../../components/Header';
import { styles } from './../profileStyle';
import { getProfileAPI } from './../profileAction';
import { logout } from './../../auth/authAction';
import { Customs } from '../../../components/utils/customs';

// create a component
class Profile extends Component {

  static navigationOptions = (props) => ({
    header: () => (
      <Header {...props}
        title="PROFILE"
        back={false} />
    )
  })

  componentDidMount() {
    this.props.getProfile(this.props.auth.token)
  }

  _logout() {
    this.props.logout()
    this.props.navigation.navigate('Login')
  }

  render() {
    let statusUser;
    if (this.props.profile.data.status === 1) {
      statusUser = "Active"
    } else {
      statusUser = "Nonactive"
    }

    return (
      <View style={styles.container}>
        <View style={styles.subHeader} />
        {this.props.profile.isLoading == true && this.props.profile.data.length == 0 ?
          <View style={styles.contentCenter}>
            <ActivityIndicator {...Customs.LoadingMainScreen} />
            <Text>Loading...</Text>
          </View>
          :
          <View style={{ flex: 1 }} >
            <Avatar
              rounded
              activeOpacity={0.7}
              height={130}
              width={130}
              source={{ uri: this.props.profile.data.photo }}
              activeOpacity={0.7}
              avatarStyle={styles.avatar}
              containerStyle={styles.contentAvatar} />
            <ScrollView>
              <View style={styles.contentInfo}>
                <Text style={styles.textLarge}>{this.props.profile.data.name}</Text>
                {this.props.profile.data.canvasser != undefined ?
                  <Text style={styles.textInfo}>{`ID ${this.props.profile.data.canvasser.idcard}`}</Text>
                  :
                  <Text style={styles.textInfo}>{`ID -`}</Text>
                }
                <View style={[styles.row, styles.contentTextGroup]}>
                  <Icon name="md-contact" type="ionicon" iconStyle={styles.iconGroup} />
                  <Text style={styles.textInfo}>{this.props.profile.data.phone}</Text>
                </View>
                <View style={[styles.row, styles.contentTextGroup]}>
                  <Icon name="md-mail" type="ionicon" iconStyle={styles.iconGroup} />
                  <Text style={styles.textInfo}>{this.props.profile.data.email}</Text>
                </View>
                <View style={styles.textInfoGrup}>
                  <Text style={styles.textSubInfo}>{"Status"}</Text>
                  <Text style={styles.textInfo}>{statusUser}</Text>
                </View>
                <View style={styles.textInfoGrupEnd}>
                  <Text style={styles.textSubInfo}>{"Coordinator"}</Text>
                  {this.props.profile.data.canvasser != undefined ?
                    <Text style={styles.textInfo}>{this.props.profile.data.canvasser.user_coordinator.name}</Text>
                    :
                    <Text style={styles.textInfo}>{"-"}</Text>
                  }
                </View>
                <Button
                  title={"EDIT PROFILE"}
                  buttonStyle={[styles.button]}
                  textStyle={[styles.buttonText]}
                  containerViewStyle={[styles.buttonContainer]} />
                <Text style={styles.textLargeCapital}>{"CHANGE PASSWORD"}</Text>
                <Text style={styles.textLargeCapital} onPress={() => this._logout()} >{"LOG OUT"}</Text>
              </View>
            </ScrollView>
          </View>
        }
      </View>
    );
  }
}

//make this component available to the app
function mapStateToProps(state) {
  return {
    auth: state.auth,
    profile: state.profile,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getProfile: (token) => dispatch(getProfileAPI(token)),
    logout: () => dispatch(logout()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
