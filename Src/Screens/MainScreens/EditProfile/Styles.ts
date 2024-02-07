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
    marginTop: hp(8),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: hp(5)
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
  iconClose: {
    marginTop: hp(3.4),
  },
  bottomHeadContainer: {
    flex: 0.8,
    justifyContent: "flex-start",
    alignItems: 'center'
  },
  bottomWrapper: {
    flex: 0.15,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  nextButton: {
    backgroundColor: Colors.Grey,
    width: widthScreen / 1.2,
    alignSelf: "center",
    height: hp(6),
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(3),
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
});
export default styles;