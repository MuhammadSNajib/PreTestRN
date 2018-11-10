//import libraries
import { Platform, StyleSheet, Dimensions } from 'react-native';

//import file local
import { Colors } from './../utils/colors';

//global variable
const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width
const WIDTH_UNIT_TAB_BAR = SCREEN_WIDTH / 3

// define your styles and export
export const styles = StyleSheet.create({
  containerHeaderMain: {
    height: 60,
    width: SCREEN_WIDTH,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    flexDirection: 'row'
  },
  textTitleHeader: {
    color: '#FFFFFF',
    fontSize: 17,
    fontFamily: 'Roboto-Thin',
    fontWeight: '500',
    paddingHorizontal: 20
  },
  textCenter: {
    textAlign: 'center'
  },
  subStatusbar: {
    height: 24,
    backgroundColor: Colors.primary,
  },
  textInput: {
    paddingHorizontal: 0,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 40,
    paddingRight: 40,
    fontSize: 14,
    color: 'rgba(0,0,0,1)',
    borderBottomWidth: 1,
    borderBottomColor: '#b3b3b3',
    textAlignVertical: 'center',
    fontFamily: 'Roboto-Light',
    fontWeight: '300',
    height: 48,
  },
  buttonDisableLoading: {
    marginTop: 0,
    marginBottom: 0,
    marginRight: 10,
  },
  contentTabBar: {
    width: SCREEN_WIDTH,
    flexDirection: 'row',
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containUnitTabBar: {
    width: WIDTH_UNIT_TAB_BAR,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10
  },
  contentIconBack: {
    padding: 20,
  },
  iconBack: {
    fontSize: 25,
    color: '#ffffff'
  }
});