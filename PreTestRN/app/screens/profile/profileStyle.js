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
});