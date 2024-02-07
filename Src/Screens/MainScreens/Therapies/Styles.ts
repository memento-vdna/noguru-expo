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
  headerContainer: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    marginTop: hp(3),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: hp(3)
  },
  headerWrapper: {
    width: '80%',
  },
  menuIcon: {
    width: 32,
    height: 32
  },
  titleText: {
    fontSize: 24,
    fontFamily: "SF-Pro-Regular",
    color: Colors.Charade,
    marginBottom: hp(1)
  },
  questionText: {
    fontSize: 24,
    fontFamily: "SF-Pro-Bold",
    color: Colors.Charade,
  },
  scrollContent: {
    marginBottom: hp(6),
    marginTop: hp(1),
  },
  showContainer: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  boxContainer: {
    width: widthScreen / 2.5,
    height: hp(19),
    borderWidth: 1,
    borderRadius: 16,
    backgroundColor: Colors.SoftPeach,
    borderColor: Colors.Grey,
    justifyContent: "center",
    alignItems: "center",
    marginTop: hp(1),
    marginBottom: hp(1.5)
  },
  depressIcon: {
    width: hp(10.3),
    height: hp(9.6)
  },
  boxTitle: {
    fontSize: 14,
    fontFamily: "SF-Pro-Semibold",
    color: Colors.Charade,
    marginTop: hp(2),
    textAlign: "center"
  }
});
export default styles;