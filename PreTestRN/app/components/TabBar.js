import React from 'react'
import { View, TouchableOpacity, TouchableHighlight, Keyboard } from 'react-native';
import { createIconSetFromFontello } from 'react-native-vector-icons';
import { Icon } from 'react-native-elements';

import { styles } from './../components/utils/styles';

class TabBar extends React.PureComponent {

  constructor(props) {
    super(props)

    this.keyboardWillShow = this.keyboardWillShow.bind(this)
    this.keyboardWillHide = this.keyboardWillHide.bind(this)

    this.state = {
      isVisible: true
    }
  }

  componentWillMount() {
    this.keyboardWillShowSub = Keyboard.addListener('keyboardDidShow', this.keyboardWillShow)
    this.keyboardWillHideSub = Keyboard.addListener('keyboardDidHide', this.keyboardWillHide)
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove()
    this.keyboardWillHideSub.remove()
  }

  keyboardWillShow = event => {
    this.setState({
      isVisible: false
    })
  }

  keyboardWillHide = event => {
    this.setState({
      isVisible: true
    })
  }

  _navigateMainScreen(item) {
    this.props.navigation.navigate(item.routeName)
  }

  render() {
    const { inactiveTintColor, activeTintColor, navigation } = this.props;
    return this.state.isVisible ?
      <View style={styles.contentTabBar}>
        {navigation.state.routes.map((item, index) => (
          <TouchableHighlight key={index} underlayColor={'transparent'} style={styles.containUnitTabBar} onPress={() => this._navigateMainScreen(item)}>
            {item.key === 'Home' ?
              <Icon name="ios-home" type="ionicon" color={navigation.state.index == 0 ? activeTintColor : inactiveTintColor} />
              : item.key === 'Help' ?
                <Icon name="md-help-circle" type="ionicon" color={navigation.state.index == 1 ? activeTintColor : inactiveTintColor} />
                :
                <Icon name="md-contact" type="ionicon" color={navigation.state.index == 2 ? activeTintColor : inactiveTintColor} />
            }
          </TouchableHighlight>
        ))}
      </View>
      :
      null
  }
}

export default TabBar