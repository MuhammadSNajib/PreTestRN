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
  contentWrapper: {
    height: 250,
    width: '100%'
  },
  wrapper: {
    height: 250,
    width: SCREEN_WIDTH,
  },
  banner: {
    width: SCREEN_WIDTH,
    height: 250,
    // resizeMode: 'contain',
  },
  viewModalBox: {
    backgroundColor: 'transparent'
  },
  mainMenu: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 25
  },
  iconMainMenu: {
    width: 50,
    height: 50,
    marginBottom: 20
  },
  titleMainMenu: {
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
    // fontWeight: '500'
  }
});