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
    width: 24,
    height: 24
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
  showContainer: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 16,
    backgroundColor: Colors.SoftPeach,
    borderColor: Colors.Grey,
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp(2),
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
  leftWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  listIcon: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginRight: hp(1),
  },
  listTitle: {
    fontSize: 16,
    fontFamily: "SF-Pro-Regular",
    color: Colors.Charade,
  },
  timeText: {
    fontSize: 12,
    fontFamily: "SF-Pro-Regular",
    color: Colors.StormDust,
  },
  innerWrapper: {
    width: "88%",
    alignSelf: "center",
    marginBottom: hp(3)
  },
  reviewDescription: {
    fontSize: 16,
    fontFamily: "SF-Pro-Regular",
    color: Colors.StormDust,
    lineHeight: 26
  },
  nextButton: {
    backgroundColor: Colors.Charade,
    width: widthScreen / 1.2,
    alignSelf: "center",
    height: hp(6),
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp(4),
    borderRadius: 16
  },
  nextText: {
    fontSize: 16,
    color: Colors.SoftPeach,
    fontFamily: "SF-Pro-Regular",
  },
});
export default styles;