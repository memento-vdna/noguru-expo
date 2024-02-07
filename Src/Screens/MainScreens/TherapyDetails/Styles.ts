import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../Styles/Colors';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  backgroundContainer: {
    width: widthScreen,
    height: heightScreen,
  },
  safeAreaContainer: {
    flex: 1,
    backgroundColor: Colors.SoftPeach
  },
  mainContainer: {
    flex: 1,
  },
  headerMain: {
    backgroundColor: Colors.Cararra,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,

    elevation: 1,
  },
  headerContainer: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    marginTop: hp(10),
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp(3)
  },
  headerWrapper: {
    marginLeft: hp(2),
  },
  empty: {
    width: hp(2.5)
  },
  backIcon: {
    color: Colors.Charade,
  },
  titleText: {
    fontSize: 24,
    fontFamily: "SF-Pro-Bold",
    color: Colors.Charade,
  },
  scrollContent: {
    marginBottom: hp(6),
    marginTop: hp(2),
  },
  bottomButton: {
    width: widthScreen / 1.2,
    alignSelf: "center",
    height: hp(7.2),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp(2)
  },
  bottomButtonSecond: {
    width: widthScreen / 1.2,
    alignSelf: "center",
    height: hp(7),
    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp(3)
  },
  buttonInner: {
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  buttonUpTitle: {
    fontSize: 16,
    fontFamily: "SF-Pro-Regular",
    color: Colors.Charade,
  },
  priceUpTitle: {
    fontSize: 16,
    fontFamily: "SF-Pro-Semibold",
    color: Colors.Charade,
  },
  buttonTitle: {
    fontSize: 16,
    fontFamily: "SF-Pro-Regular",
    color: Colors.SoftPeach,
  },
  priceTitle: {
    fontSize: 16,
    fontFamily: "SF-Pro-Semibold",
    color: Colors.SoftPeach,
  },

  nextButton: {
    backgroundColor: Colors.Charade,
    width: widthScreen / 1.2,
    alignSelf: "center",
    height: hp(6),
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(5),
    borderRadius: 16
  },
  nextText: {
    fontSize: 16,
    color: Colors.SoftPeach,
    fontFamily: "SF-Pro-Regular",
  },
});
export default styles;