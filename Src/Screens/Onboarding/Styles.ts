import { StyleSheet, Dimensions } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import Colors from '../../Styles/Colors';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;


const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    backgroundColor: Colors.SoftPeach,
    justifyContent: "center"
  },
  safeAreaContainer: {
    flex: 1,
    backgroundColor: Colors.SoftPeach
  },
  upperContainer: {
    marginTop: hp(1),
  },
  mainContainer: {
    marginTop: hp(2),
    width: widthScreen / 1.2,
    alignSelf: "center",
  },
  skipTitle: {
    fontSize: 16,
    color: Colors.Charade,
    fontFamily: "SF-Pro-Bold",
    textAlign: "right"
  },
  centerImage: {
    marginTop: hp(5),
    width: hp(30),
    height: hp(30),
    alignSelf: "center",
  },

  bottomContainer: {
    marginTop: hp("6%"),
  },

  welcomeTitle: {
    fontSize: 34,
    color: Colors.Charade,
    fontFamily: "SF-Pro-Bold",
    // marginBottom: hp(4),
    marginTop: hp(2)
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
  introFirstImage: {
    width: '75%',
    height: 300,
  },
  socialContainer: {
    width: widthScreen / 1.2,
    alignSelf: "center",
    marginTop: hp(5),
  },
  socialInnerWrap: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  leftIcon: {
    width: 49,
    height: 49,
    borderRadius: 49
  },
  seperateWrap: {
    marginLeft: hp(1.5)
  },
  socialTitle: {
    fontSize: 16,
    fontFamily: "SF-Pro-Regular",
    color: Colors.Tuatara,
  },
  listDescription: {
    fontSize: 16,
    color: Colors.StormDust,
    fontFamily: "SF-Pro-Regular",
    lineHeight: 22,
    marginTop: hp(1)
  },
  userImageWrap: {
    flex: 1,
    backgroundColor: "rgba(34, 243, 189, 0.15)",
    borderRadius: 50
  },
  paginationContainer: {
    position: "absolute",
    left: hp(1.7),
    marginTop: hp("44%"),
  },
  paginationDots: {
    height: 16,
    margin: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    marginHorizontal: 4,
  },
  socialIconContainer: {
    width: widthScreen / 1.2,
    alignSelf: "center",
    marginTop: hp(2),
    height: hp(6),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.Grey
  },
  socialIconWrapper: {
    width: "100%",
    alignSelf: "center",
    flexDirection: 'row',
    justifyContent: "space-evenly",
    alignItems: 'center',
  },
  line: {
    height: hp(6),
    width: hp(0.1),
    backgroundColor: Colors.Grey
  },
  iconSocial: {
    width: 24,
    height: 24
  }


});
export default styles;
