//import liraries
import React, { Component } from 'react';
import { View, Text, BackHandler, Image, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';

//import file local
import Header from './../../../components/Header';
import { styles } from './../merchantStyle';

// create a component
class DetailMerchant extends Component {

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)
    this.data = this.props.navigation.state.params.values
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this)
  }

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButtonClick)
  }

  _goBack() {
    this.props.navigation.dispatch({ type: 'Navigation/BACK' })
  }

  handleBackButtonClick() {
    this._goBack()
    return true
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <Image source={{ uri: this.data.merchant.picture_1 }} style={styles.banner} />
            <Header {...this.props}
              title={""}
              transparent={true}
              back={true} />
          </View>
          <View style={styles.row}>
            <Image source={{ uri: this.data.merchant.picture_1 }} style={styles.subBanner} />
            <Image source={{ uri: this.data.merchant.picture_2 }} style={styles.subBanner} />
            <Image source={{ uri: this.data.merchant.picture_3 }} style={styles.subBanner} />
          </View>
          <View style={styles.contentListtDetail}>
            <Text style={styles.textDetailInfo}>{this.data.name.toUpperCase()}</Text>
            <View style={[styles.row, styles.contentTextDistance]}>
              <Icon name="ios-pin" type="ionicon" iconStyle={styles.iconDistance} />
              <Text style={styles.textDistance}>{this.data.merchant.address}</Text>
            </View>
          </View>
          <View style={styles.contentListtDetail}>
            <Text style={styles.textDetailInfo}>{"Owner"}</Text>
            <View style={[styles.row, styles.contentTextDistance]}>
              <Icon name="md-contact" type="ionicon" iconStyle={styles.iconDistance} />
              <Text style={styles.subTextDetailInfo}>{this.data.merchant.pic_name}</Text>
            </View>
            <View style={[styles.row, styles.contentTextDistance]}>
              <Icon name="ios-call" type="ionicon" iconStyle={styles.iconDistance} />
              <Text style={styles.subTextDetailInfo}>{this.data.merchant.pic_phone}</Text>
            </View>
            <View style={[styles.row, styles.contentTextDistance]}>
              <Icon name="md-mail" type="ionicon" iconStyle={styles.iconDistance} />
              <Text style={styles.subTextDetailInfo}>{this.data.merchant.pic_email}</Text>
            </View>
            <View style={[styles.row, styles.contentTextDistance]}>
              <Icon name="md-clipboard" type="ionicon" iconStyle={styles.iconDistance} />
              <Text style={styles.subTextDetailInfo}>{this.data.merchant.postal_code}</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

//make this component available to the app
export default DetailMerchant;
