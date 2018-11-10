//import liraries
import React, { Component } from 'react';
import { View, Text, BackHandler, ScrollView, Image, FlatList, RefreshControl, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { Button, Icon } from 'react-native-elements';
import geolib from 'geolib';

//import file local
import Header from './../../../components/Header';
import { styles } from './../merchantStyle';
import { Function } from './../../../utils/Function';
import { getMerchantAPI } from './../merchantAction';
import { Customs } from '../../../components/utils/customs';

// create a component
class Merchant extends Component {

  static navigationOptions = (props) => ({
    header: () => (
      <Header {...props}
        title="MERCHANT"
        back={true} />
    )
  })

  constructor(props) {
    super(props)
    this.state = {
      latitude: 0,
      longitude: 0,
      licensingReadLocation: '',
      page: 1
    }
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this)
  }

  componentDidMount() {
    this.getGeolocation()
    this.props.getMerchant(this.props.auth.token, false, 1)
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

  getGeolocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => this.getGeocodeLocation(position.coords),
      (error) => { this.setState({ licensingReadLocation: error.message }) },
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
    navigator.geolocation.setRNConfiguration({ skipPermissionRequests: true });
  }

  getGeocodeLocation(data) {
    this.setState({ latitude: data.latitude, longitude: data.longitude })
  }

  _navigationGotoDetailMerchant(values) {
    this.props.navigation.navigate('DetailMerchant', { values })
  }

  _onRefresh() {
    this.props.getMerchant(this.props.auth.token, true, 1)
  }

  _renderFooter = () => {
    let { isLoading, isLoadingNext } = this.props.merchant

    if (isLoading == false && isLoadingNext == true) {
      return (
        <View  style={{paddingVertical: 30}} >
          <ActivityIndicator {...Customs.LoadingFooter} />
        </View>
      )
    } else {
      return (<View />)
    }
  }

  _loadMore = () => {
    let {
      isLoading,
      isLoadingNext,
      isError,
      isSuccess,
      page,
      fullData,
      listData,
    } = this.props.merchant

    if (listData.length < fullData.countAll && isLoading != true && isError != true) {
      this.props.getMerchant(this.props.auth.token, false, this.state.page + 1)
      this.setState({ page: this.state.page+1 })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.merchant.listData}
          keyExtractor={(item, index) => index}
          ListFooterComponent={this._renderFooter}
          extraData={this.state}
          onEndReached={this._loadMore}
          onEndReachedThreshold={0.5}
          refreshControl={
            <RefreshControl
              refreshing={this.props.merchant.isLoading}
              onRefresh={this._onRefresh.bind(this)}
              {...Customs.RefreshControl}
            />
          }
          renderItem={({ item, index }) => (
            <View style={[{ width: '100%' }, styles.contentListLarge, styles.row]}>
              <View style={{ width: '50%' }}>
                <Image source={{ uri: item.merchant.picture_1 }} style={styles.avatarList} />
              </View>
              <View style={[{ width: '50%' }, styles.contentInfoList]}>
                <View style={[{ width: '100%' }, styles.infoList]}>
                  <View>
                    <Text style={styles.textInfoList}>{item.name}</Text>
                    <Text style={styles.subTextInfoList}>{item.merchant.address}</Text>
                    <View style={[styles.row, styles.contentTextDistance]}>
                      <Icon name="ios-pin" type="ionicon" iconStyle={styles.iconDistance} />
                      <Text style={styles.textDistance}>
                        {`${Function.thousandsFormat(Math.round(geolib.getDistance(
                          { latitude: this.state.latitude, longitude: this.state.longitude },
                          { latitude: 51.525, longitude: 7.4575 }
                        ) / 1000))} Km`}
                      </Text>
                    </View>
                  </View>
                  <Button
                    title={"VISIT"}
                    onPress={() => { this._navigationGotoDetailMerchant(item) }}
                    buttonStyle={[styles.button]}
                    textStyle={[styles.buttonText]}
                    containerViewStyle={[styles.buttonContainer]} />
                </View>
              </View>
            </View>
          )} />
      </View>
    );
  }
}

//make this component available to the app
function mapStateToProps(state) {
  return {
    auth: state.auth,
    merchant: state.merchant,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getMerchant: (token, refresh, page) => dispatch(getMerchantAPI(token, refresh, page)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Merchant)
