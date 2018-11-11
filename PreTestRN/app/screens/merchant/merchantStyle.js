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
    flexDirection: 'row'
  },
  contentListLarge: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#bfcdd4'
  },
  avatarList: {
    height: 180,
    width: '100%'
  },
  contentInfoList: {
    paddingLeft: 15
  },
  infoList: {
    flex: 1,
    justifyContent: 'space-between'
  },
  textInfoList: {
    fontSize: 18,
    fontFamily: 'Roboto-Light',
    fontWeight: '500',
    color: '#253238'
  },
  subTextInfoList: {
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
    color: '#253238'
  },
  contentTextDistance: {
    alignItems: 'center',
    marginTop: 10
  },
  iconDistance: {
    fontSize: 15,
    marginRight: 10
  },
  textDistance: {
    fontSize: 15,
    fontFamily: 'Roboto-Bold',
    color: '#253238'
  },
  buttonContainer: {
    marginLeft: 0,
    marginRight: 0,
  },
  button: {
    minWidth: '100%',
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
  header: {
    height: 250,
    width: '100%'
  },
  banner: {
    width: SCREEN_WIDTH,
    height: 250,
    position: 'absolute',
    top: 0,
  },
  subBanner: {
    width: SCREEN_WIDTH / 3,
    height: 100,
    borderWidth: 0.5,
    borderColor: '#ffffff'
  },
  textDetailInfo: {
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
    fontWeight: '500',
    color: '#253238'
  },
  subTextDetailInfo: {
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
    color: '#253238'
  },
  contentListtDetail: {
    padding: 20
  }
});