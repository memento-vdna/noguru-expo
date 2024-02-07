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
  questionText: {
    fontSize: 14,
    fontFamily: "SF-Pro-Semibold",
    color: Colors.StormDust,
  },
  upperDataCotainer: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center"
  },
  dataContentWrap: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center"
  },
  mainDataCotainer: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center"
  },
  bottomContainer: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center"
  },
  dataWrapper: {
    width: widthScreen / 1.25,
    alignSelf: "center",
  },
  description: {
    fontSize: 16,
    fontFamily: "SF-Pro-Regular",
    color: Colors.StormDust,
    textAlign: "center",
    lineHeight: 26
  },
  descriptionBold: {
    fontSize: 16,
    fontFamily: "SF-Pro-Semibold",
    color: Colors.StormDust,
    marginTop: hp(2),
    textAlign: "center"
  },
  bottomButton: {
    width: widthScreen / 1.2,
    alignSelf: "center",
    height: hp(7),
    justifyContent: "center",
    alignItems: "center"
  },
  buttonInner: {
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
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

  showContainer: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 16,
    backgroundColor: Colors.SoftPeach,
    borderColor: Colors.Grey,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp(2.5),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,

    elevation: 1,
  },
  boxContainer: {
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: hp(2),
    marginBottom: hp(2)
  },
  listTitle: {
    fontSize: 16,
    fontFamily: "SF-Pro-Semibold",
    color: Colors.Charade,
    lineHeight: 26
  },
  listDes: {
    fontSize: 12,
    fontFamily: "SF-Pro-Regular",
    color: Colors.StormDust,
    lineHeight: 20
  },
  listIcon: {
    width: 24,
    height: 24,
  },
});
export default styles;