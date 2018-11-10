//import liraries
import React, { Component } from 'react';
import { View, Text, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';
import GridView from 'react-native-super-grid';

//import file local
import Header from './../../../components/Header';
import { styles } from './../homeStyle';
import { Customs } from '../../../components/utils/customs';

//global variable
const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

// create a component
class Home extends Component {

  static navigationOptions = (props) => ({
    header: () => (
      <Header {...props}
        title="PRETEST RN"
        back={false} />
    )
  })

  constructor(props) {
    super(props)
    this.state = {
      mainMenu: [
        { icon: require("./../../../assets/images/merchant.png"), name: "Merchant" },
        { icon: require("./../../../assets/images/simulasi-kredit.png"), name: "Simulasi Kredit" },
        { icon: require("./../../../assets/images/kredit.png"), name: "Kredit" },
        { icon: require("./../../../assets/images/cash-in.png"), name: "Cash In" },
        { icon: require("./../../../assets/images/bayar-tagihan.png"), name: "Bayar Tagihan" },
        { icon: require("./../../../assets/images/contact-care.png"), name: "Contact Care" }
      ]
    }
  }

  _navigationGotoMerchant() {
    this.props.navigation.navigate('Merchant')
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.contentWrapper}>
            <Swiper {...Customs.bannerSwipe} style={styles.wrapper}>
              {[1, 2, 3, 4].map((item, i) => (
                <Image key={i} source={require("./../../../assets/images/img-placeholder.png")} style={styles.banner} />
              ))}
            </Swiper>
          </View>
          <View style={styles.viewModalBox}>
            <GridView
              itemDimension={SCREEN_WIDTH / 4}
              items={this.state.mainMenu}
              renderItem={(item, i) => (
                <TouchableOpacity style={styles.mainMenu} onPress={() => i === 0 ? this._navigationGotoMerchant() : null}>
                  <Image source={item.icon} tintColor={i === 0 ? '#96D43B' : ''} style={styles.iconMainMenu} />
                  <Text style={styles.titleMainMenu}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

//make this component available to the app
export default Home;
