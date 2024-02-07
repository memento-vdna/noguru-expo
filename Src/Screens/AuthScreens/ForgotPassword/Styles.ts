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
    flexGrow: 1,
  },
  backgroundWrapper: {
    flex: 1,
  },
  mainHeadContainer: {
    flex: 0.05,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcomeText: {
    fontSize: 34,
    fontFamily: "SF-Pro-Bold",
    color: Colors.Charade,
    marginBottom: hp(1)
  },
  bottomHeadContainer: {
    width: widthScreen,
    flex: 0.7,
    justifyContent: "flex-start",
    alignItems: 'center'
  },
  headerWrapper: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    flexDirection: "row",
    marginBottom: hp(2),
  },
  backIcon: {
    color: Colors.Charade,
    marginTop: 5
  },
  inputHeader: {
    marginTop: hp(2),
    marginBottom: hp(0.5),
    width: widthScreen / 1.3,
    alignSelf: 'center',
  },

  wrapper: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    backgroundColor: "transparent",
    height: hp(8),
    justifyContent: "center",
    marginTop: hp(2.5),
    fontFamily: "SF-Pro-Bold",
    fontSize: 14,
    color: Colors.Charade,
    borderRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    overflow: 'hidden',
  },
  inputLine: {
    borderWidth: 1,
    borderColor: Colors.Grey
  },
  nextButton: {
    backgroundColor: Colors.Charade,
    width: widthScreen / 1.2,
    alignSelf: "center",
    height: hp(6),
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp(3),
    borderRadius: 16
  },
  mailIcon: {
    color: Colors.SoftPeach,
    marginRight: hp(1)
  },
  nextText: {
    fontSize: 16,
    color: Colors.SoftPeach,
    fontFamily: "SF-Pro-Bold",
  },
  bottomWrapper: {
    flex: 0.25,
    justifyContent: "center",
    alignItems: "center"
  },
  iconClose: {
    marginTop: hp(3.4),
  },
  seperator: {
    marginLeft: hp(1.5)
  },
  messageText: {
    fontSize: 12,
    color: Colors.StormDust,
    fontFamily: "SF-Pro-Regular",
    marginTop: hp(0.5),
  },
  messageTextBold: {
    fontFamily: "SF-Pro-Semibold",
  },
  checkBoxWrap: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    marginTop: hp(3.5),
  },
  forgotTitle: {
    fontSize: 16,
    color: Colors.Charade,
    fontFamily: "SF-Pro-Regular",
    textAlign: "right"
  }
});
export default styles;