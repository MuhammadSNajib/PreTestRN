import { styles } from "./styles"
import { Colors } from './colors'

export const Customs = {
  TextInput: {
    style: [styles.textInput],
    underlineColorAndroid: "transparent",
    underlineColorios: "transparent",
    placeholderTextColor: '#b3b3b3'
  },
	LoadingButtonMain: {
		color: Colors.primary,
		size: "small",
		style: [styles.buttonDisableLoading]
	},
	LoadingFooter: {
		color: Colors.primary,
		size: "large",
		style: [styles.buttonDisableLoading]
	},
  bannerSwipe: {
    autoplay: true,
    removeClippedSubviews: false,
    paginationStyle: [{ bottom: 10, flex: 0, alignContent: 'flex-end', }],
    activeDotColor: Colors.primary,
    dotColor: 'gray',
  },
	RefreshControl: {
		colors: [Colors.primary, Colors.primary, Colors.primary],
		tintColor: Colors.primary
	},
}