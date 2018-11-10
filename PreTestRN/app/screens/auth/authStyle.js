//import libraries
import { Platform, StyleSheet, Dimensions } from 'react-native';

//import file local
import { Colors } from './../../components/utils/colors';

//global variable
const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

// define your styles and export
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  contentBrand: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  textBrand: {
    color: Colors.primary,
    fontFamily: 'Roboto-Medium',
    fontSize: 50,
    fontWeight: '500',
    padding: 30
  },
  contentForm: {
    marginTop: 50,
    paddingHorizontal: 25
  },
  formGroup: {
    marginVertical: 15,
  },
  inputIconContainer: {
    position: 'absolute',
    top: 13,
    left: 5,
  },
  inputIcon: {
    fontSize: 20,
    color: '#b3b3b3',
  },
  inputSecureIconContainer: {
    position: 'absolute',
    top: 16,
    right: 10,
  },
  inputSecureIcon: {
    fontSize: (Platform.OS === 'ios') ? 15 + font_size_ios : 15,
    color: 'rgba(0,0,0,0.4)',
  },
  inputSecureActiveIcon: {
    fontSize: (Platform.OS === 'ios') ? 15 + font_size_ios : 15,
    color: 'rgba(0,0,0,0.7)',
  },
  forgotPasswordText: {
    fontSize: 14,
    fontFamily: 'Roboto-Regular',
    textAlign: 'right',
    color: '#b3b3b3',
    backgroundColor: 'transparent',
    marginTop: 5,
    marginBottom: 10,
  },
  buttonContainer: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: 20,
  },
  button: {
    minWidth: 80,
    backgroundColor: Colors.primary,
    paddingVertical: 11,
    paddingHorizontal: 11,
    borderRadius: 2,
    minHeight: 55,
  },
  buttonText: {
    color: Colors.button_text,
    textAlign: 'center',
    fontSize: 17,
    fontFamily: 'Roboto-Light'
  },
  buttonDisable: {
    minWidth: 80,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 55,
  },
  buttonDisableText: {
    color: Colors.primary,
    textAlign: 'center',
    fontSize: 17,
    fontFamily: 'Roboto-Light'
  },
});