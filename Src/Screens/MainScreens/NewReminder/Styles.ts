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
  descriptionBold: {
    fontSize: 16,
    fontFamily: "SF-Pro-Regular",
    color: Colors.Charade,
    textAlign: "center"
  },

  rangeContainer: {
    width: widthScreen / 1.12,
    alignSelf: "center",
    borderRadius: 16,
    marginBottom: hp(1),
    backgroundColor: Colors.SoftPeach,
    borderWidth: 1,
    borderColor: Colors.Grey,
    marginTop: hp(3)
  },
  listContainer: {
    width: "100%",
    alignSelf: "center",
  },

  rangeInnerWrapper: {
    width: "90%",
    alignSelf: "center",
    marginBottom: hp(1.5),
    marginTop: hp(1.5),
  },

  listWrapper: {
    width: "95%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },

  listRightWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  listTitle: {
    fontSize: 16,
    fontFamily: "SF-Pro-Regular",
    color: Colors.Charade,
  },
  timeWrap: {
    backgroundColor: Colors.Cararra,
    borderRadius: 8,
    marginRight: hp(2)
  },
  timeText: {
    paddingHorizontal: hp(1.5),
    paddingVertical: hp(0.7),
    fontSize: 14,
    fontFamily: "SF-Pro-Semibold",
    color: Colors.StormDust,
  },

  divider: {
    width: "100%",
    alignSelf: "center",
    height: 1,
    backgroundColor: Colors.Grey,
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


});
export default styles;