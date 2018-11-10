//import liraries
import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, ActivityIndicator, ToastAndroid } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';

// import file local
import StatusBar from './../../../components/StatusBar';
import { styles } from './../authStyle';
import { Customs } from '../../../components/utils/customs';
import { loginAPI, email, password, resetData } from './../authAction';

// create a component
class Login extends Component {

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)
    this.state = {
      passwordSecure: true
    }
  }

  componentDidMount() {
    let { token } = this.props.auth
    if (token != '') {
      this.props.navigation.navigate('AuthNavigation')
    }
  }

  componentDidUpdate() {
    let { isSuccess, loginResult } = this.props.auth
    if (loginResult != "") {
      if (isSuccess) {
        this.props.navigation.navigate('AuthNavigation')
        this.props.resetData()
      } else {
        if (loginResult === "no such user found") {
          ToastAndroid.show("Please check your email or password.", ToastAndroid.SHORT);
        } else if (loginResult === "passwords did not match") {
          ToastAndroid.show("Please check your password.", ToastAndroid.SHORT);
        } else {
          ToastAndroid.show(loginResult, ToastAndroid.SHORT);
        }
        this.props.resetData()
      }
    }
  }

  _passwordSecure(value) {
    this.setState({ passwordSecure: value })
  }

  _login() {
    this.props.login({
      email: this.props.auth.email,
      password: this.props.auth.password
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar />
        <KeyboardAwareScrollView scrollEnabled={true} keyboardShouldPersistTaps={"always"} extraScrollHeight={30}>
          <ScrollView keyboardShouldPersistTaps={"always"}>
            <View style={styles.contentBrand}>
              <Text style={styles.textBrand}>{"PRETEST RN"}</Text>
            </View>
            <View style={styles.contentForm}>
              <View style={styles.formGroup}>
                <Icon name="envelope" type="font-awesome" iconStyle={styles.inputIcon} containerStyle={styles.inputIconContainer} />
                <TextInput
                  {...Customs.TextInput}
                  placeholder={"Email"}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  autoCorrect={false}
                  value={this.props.auth.email}
                  onChangeText={(text) => { this.props.email(text) }}
                  returnKeyType={"next"}
                  onSubmitEditing={(event) => {
                    this.refs.password.focus();
                  }} />
              </View>
              <View style={styles.formGroup}>
                <Icon name="lock" iconStyle={styles.inputIcon} containerStyle={styles.inputIconContainer} />
                <TextInput
                  {...Customs.TextInput}
                  ref="password"
                  placeholder={"Password"}
                  value={this.props.auth.password}
                  secureTextEntry={this.state.passwordSecure}
                  onChangeText={(text) => { this.props.password(text) }}
                  returnKeyType={"done"} />
                {this.state.passwordSecure != true ? (
                  <TouchableOpacity style={styles.inputSecureIconContainer} onPress={() => { this._passwordSecure(true) }}>
                    <Icon name="eye" type="font-awesome" iconStyle={styles.inputSecureActiveIcon} />
                  </TouchableOpacity>
                ) : (
                    <TouchableOpacity style={styles.inputSecureIconContainer} onPress={() => { this._passwordSecure(false) }}>
                      <Icon name="eye-slash" type="font-awesome" iconStyle={styles.inputSecureIcon} />
                    </TouchableOpacity>
                  )}
              </View>
              <Text style={styles.forgotPasswordText}>{"Forgot your password?"}</Text>
              {this.props.auth.isLoading == true ?
                <View style={[styles.buttonContainer, styles.buttonDisable]}>
                  <ActivityIndicator {...Customs.LoadingButtonMain} />
                  <Text style={[styles.buttonDisableText]}>{"LOGIN"}</Text>
                </View>
                :
                <Button
                  title={"LOGIN"}
                  onPress={() => { this._login() }}
                  buttonStyle={[styles.button]}
                  textStyle={[styles.buttonText]}
                  containerViewStyle={[styles.buttonContainer]} />
              }
            </View>
          </ScrollView>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

//make this component available to the app
function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: (form) => dispatch(loginAPI(form)),
    email: (value) => dispatch(email(value)),
    password: (value) => dispatch(password(value)),
    resetData: () => dispatch(resetData())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
