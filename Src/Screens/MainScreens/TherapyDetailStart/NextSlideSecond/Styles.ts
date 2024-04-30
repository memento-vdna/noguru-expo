import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../../Styles/Colors';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: Colors.SoftPeach
  },
  mainContainer: {
    flex: 1,
  },
  headerContainer: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: hp(3),
    flexDirection: "row",
    alignItems: "center",
    marginBottom: hp(3),
    justifyContent: "space-between"
  },
  headerWrapper: {
    marginLeft: hp(2),
  },
  empty: {
    width: hp(2.5)
  },
  backIcon: {
    color: Colors.Grey,
  },
  icon: {
    color: Colors.Charade,
  },
  repeatIcon: {
    width: 32,
    height: 32
  },
  scrollContent: {
    marginBottom: hp("6%"),
    marginTop: hp(2),
  },

  thumbnailVideo: {
    marginTop: hp(2),
    marginBottom: hp(5),
    width: widthScreen,
    alignSelf: "center",
    height: 192
  },
  thumbnailInner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  desWrapContent: {
    marginTop: hp(9),
    width: widthScreen / 1.2,
    alignSelf: "center",
  },
  videoDescription: {
    fontSize: 16,
    color: Colors.StormDust,
    fontFamily: "SF-Pro-Regular",
    textAlign: "center",
    lineHeight: 26
  },
  dataWrapContent: {
    marginTop: hp(3),
    width: widthScreen / 1.2,
    alignSelf: "center",
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
    marginBottom: hp(1)
  },
  nextText: {
    fontSize: 16,
    color: Colors.SoftPeach,
    fontFamily: "SF-Pro-Regular",
  },


  continueButton: {
    flexDirection: "row",
    alignItems: 'center',
  },
  continueText: {
    fontSize: 15,
    color: Colors.StormDust,
    fontFamily: "SF-Pro-Semibold",
  },


  saveIcon: {
    width: 24,
    height: 24,
    tintColor: '#00E096',
  },
  saveButton: {
    backgroundColor: Colors.SoftPeach,
    width: widthScreen / 1.12,
    alignSelf: "center",
    marginBottom: hp(1),
    shadowColor: "transparent",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,

    elevation: 0,
  },
  saveButtonUnderlay: {
    backgroundColor: Colors.SoftPeach,
  },
  saveThumb: {
    width: 50,
    height: 60,

  },

});
export default styles;