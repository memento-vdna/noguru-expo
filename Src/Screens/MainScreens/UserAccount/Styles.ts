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
    marginTop: hp(8),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: hp(5)
  },
  headerWrapper: {
    alignItems: "center",
    justifyContent: "center"
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
    marginBottom: hp(1)
  },
  questionText: {
    fontSize: 14,
    fontFamily: "SF-Pro-Semibold",
    color: Colors.StormDust,
  },
  mainDataContainer: {
    flex: 0.7,
    justifyContent: "flex-start",
    alignItems: "center"
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
    marginTop: hp(5),
    marginBottom: hp(3),
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
  listIcon: {
    width: 24,
    height: 24,
    marginRight: hp(1),
    tintColor: Colors.Charade
  },
  listTitle: {
    fontSize: 16,
    fontFamily: "SF-Pro-Regular",
    color: Colors.Charade,
  },
  userLoginWrapper: {
    width: "100%",
    alignSelf: "center",
    backgroundColor: Colors.Charade,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  loginTitle: {
    fontSize: 16,
    fontFamily: "SF-Pro-Regular",
    color: Colors.Charade,
  },
  rightIcon: {
    color: Colors.Charade,
  },
  deleteText: {
    fontSize: 16,
    fontFamily: "SF-Pro-Regular",
    color: Colors.StormDust,
    textAlign: "center"
  }
});
export default styles;