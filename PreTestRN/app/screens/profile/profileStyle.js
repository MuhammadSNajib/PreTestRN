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
  row: {
    flexDirection: 'row',
  },
  contentCenter: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  subHeader: {
    backgroundColor: Colors.primary,
    height: 70,
  },
  contentTextGroup: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
  },
  iconGroup: {
    fontSize: 25,
    marginRight: 10,
    color: '#253238'
  },
  textLarge: {
    fontSize: 30,
    fontFamily: 'Roboto-Medium',
    color: '#253238',
    marginBottom: 20
  },
  textInfo: {
    fontSize: 20,
    fontFamily: 'Roboto-Medium',
    color: '#253238',
  },
  textSubInfo: {
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
    color: '#bfcdd4',
  },
  buttonContainer: {
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 15
  },
  button: {
    width: 180,
    backgroundColor: Colors.primary,
    paddingVertical: 11,
    paddingHorizontal: 11,
    borderRadius: 2,
    minHeight: 40,
  },
  buttonText: {
    color: Colors.button_text,
    textAlign: 'center',
    fontSize: 17,
    fontFamily: 'Roboto-Light'
  },
  textLargeCapital: {
    color: Colors.primary,
    textAlign: 'center',
    fontSize: 17,
    fontFamily: 'Roboto-Light',
    marginBottom: 15,
  },
  contentAvatar: {
    alignSelf: 'center',
    marginTop: -65,
  },
  avatar: {
    borderWidth: 4,
    borderColor: '#ffffff'
  },
  contentInfo: {
    alignItems: 'center',
    marginTop: 15
  },
  textInfoGrup: {
    marginTop: 20,
    alignItems: 'center'
  },
  textInfoGrupEnd: {
    marginVertical: 20,
    alignItems: 'center'
  }
});