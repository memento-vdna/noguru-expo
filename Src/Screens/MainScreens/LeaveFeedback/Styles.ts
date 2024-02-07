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
  mainDataContainer: {
    flex: 0.75,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  dataWrapper: {
    width: widthScreen / 1.2,
    alignSelf: "center",
  },
  description: {
    fontSize: 16,
    fontFamily: "SF-Pro-Regular",
    color: Colors.StormDust,
    lineHeight: 26,
    marginTop: hp(3.5)
  },
  descriptionBold: {
    fontSize: 16,
    fontFamily: "SF-Pro-Semibold",
    color: Colors.StormDust,
    marginTop: hp(2),
    textAlign: "center"
  },
  bottomContainer: {
    flex: 0.2,
    justifyContent: "flex-end",
    alignItems: "center"
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
    // marginBottom: hp(3),
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
    marginTop: hp(1.5),
    marginBottom: hp(1.5)
  },
  line: {
    width: "100%",
    alignSelf: "center",
    height: hp(0.1),
    backgroundColor: Colors.Grey
  },
  leftWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  listTitle: {
    fontSize: 16,
    fontFamily: "SF-Pro-Semibold",
    color: Colors.Charade,
    lineHeight: 26
  },

  wrapper: {
    marginTop: hp(2),
    width: widthScreen / 1.2,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 16,
    backgroundColor: Colors.SoftPeach,
    borderColor: Colors.Grey,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,

    elevation: 1,
  },
  textContainer: {
    width: "90%",
    alignSelf: "center",
    marginTop: hp(1),
    marginBottom: hp(1),
    height: hp(14),
  },
  textInnerWrap: {
    width: "100%",
    alignSelf: "center",
    height: hp(12),
  },
  textInput: {
    fontFamily: "SF-Pro-Regular",
    fontSize: 14,
    color: Colors.Charade,
  },
  nextButton: {
    backgroundColor: Colors.StormDust,
    width: widthScreen / 1.2,
    alignSelf: "center",
    height: hp(6),
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(3),
    borderRadius: 16
  },
  nextText: {
    fontSize: 16,
    color: Colors.SoftPeach,
    fontFamily: "SF-Pro-Bold",
  },
  toogleMainView: {
    width: "90%",
    alignSelf: "center",
    alignItems: "flex-end",
  },
  counterText: {
    fontSize: 12,
    color: Colors.StormDust,
    fontFamily: "SF-Pro-Regular",
  },
});
export default styles;