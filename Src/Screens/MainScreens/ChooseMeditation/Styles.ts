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
    justifyContent: "space-between",
    marginBottom: hp(3)
  },
  headerWrapper: {
    marginLeft: hp(2),
  },
  empty: {
    width: hp(2.5)
  },
  icon: {
    color: Colors.Charade,
  },
  titleText: {
    fontSize: 24,
    fontFamily: "SF-Pro-Bold",
    color: Colors.Charade,
  },

  scrollContent: {
    marginBottom: hp("6%"),
    marginTop: hp(2),
  },
  dataWrapper: {
    width: widthScreen / 1.12,
    alignSelf: "center",
    marginTop: hp(3)
  },

  nextButton: {
    backgroundColor: Colors.Charade,
    width: widthScreen / 1.12,
    alignSelf: "center",
    height: hp(6),
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: hp(4)
  },
  nextText: {
    fontSize: 16,
    color: Colors.SoftPeach,
    fontFamily: "SF-Pro-Regular",
  },

  listContainer: {
    width: widthScreen / 1.12,
    alignSelf: "center",
    borderRadius: 16,
    backgroundColor: Colors.SoftPeach,
    borderWidth: 1,
    borderColor: Colors.Grey,
    marginTop: hp(2)
  },
  listDataWrap: {
    width: "100%",
    alignSelf: "center",
  },
  listDataWrapper: {
    width: "90%",
    alignSelf: "center",
    marginBottom: hp(2),
    // marginTop: hp(1.5),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  listWrapper: {
    width: "90%",
    alignSelf: "center",
    marginBottom: hp(2),
    marginTop: hp(2),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  listTimeWrap: {
    backgroundColor: Colors.Cararra,
    borderRadius: 8,
    marginRight: hp(1.5)
  },
  listRightWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  chooseTitle: {
    fontSize: 16,
    fontFamily: "SF-Pro-Regular",
    color: Colors.Charade,
  },
  titleLeft:{
    fontSize: 16,
    fontFamily: "SF-Pro-Semibold",
    color: Colors.Charade,
  },
  listDataTitle: {
    fontSize: 16,
    fontFamily: "SF-Pro-Regular",
    color: Colors.StormDust,
  },
  meditateIcon: {
    width: 24,
    height: 24,
    marginRight: hp(1)
  },
  divider: {
    width: "100%",
    alignSelf: "center",
    height: 1,
    backgroundColor: Colors.Grey,
  },
});
export default styles;