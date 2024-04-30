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
  mainDataContainer: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center"
  },
  dataWrapContent: {
    width: widthScreen / 1.2,
    alignSelf: "center",
    marginTop: hp(4),
  },
  
  descriptionTxt: {
    fontSize: 16,
    color: Colors.StormDust,
    fontFamily: "SF-Pro-Regular",
    textAlign: "center",
    lineHeight: 26,
  },
 
  bottomContainer: {
    flex: 0.6,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  bottomWrapper: {
    marginBottom: hp(1)
  },
  nextButton: {
    backgroundColor: Colors.SoftPeach,
    width: widthScreen / 1.12,
    alignSelf: "center",
    height: hp(6),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.StormDust,
    marginBottom: hp(1.5)
  },
  nextText: {
    fontSize: 16,
    color: Colors.Charade,
    fontFamily: "SF-Pro-Regular",
  },

});
export default styles;