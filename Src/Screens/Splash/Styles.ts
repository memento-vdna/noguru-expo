import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  backgroundWrapper: {
    width: widthScreen,
    height: heightScreen,
    backgroundColor: Colors.White,
  },
  mainContainer: {
    flex: 0.95,
    justifyContent: "center",
    alignItems: "center"
  },
  logoText: {
    fontSize: 52,
    fontFamily: "SF-Pro-Bold",
    textAlign: 'center',
    color: Colors.Charade,
  },
  logoIcon: {
    width: 122,
    height: 122
  },
  logoDescription: {
    fontSize: 16,
    fontFamily: "SF-Pro-Regular",
    color: Colors.StormDust,
    marginTop: hp(1)
  }

});
export default styles;