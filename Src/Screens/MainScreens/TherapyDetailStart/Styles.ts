import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../Styles/Colors';

import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;

const styles = StyleSheet.create({
  backgroundWrapper: {
    width: widthScreen,
    height: heightScreen,
  },
  mainContainer: {
    flex: 0.98,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  nextButton: {
    backgroundColor: Colors.SoftPeach,
    width: widthScreen / 1.2,
    alignSelf: "center",
    height: hp(6),
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16
  },
  nextText: {
    fontSize: 16,
    color: Colors.Charade,
    fontFamily: "SF-Pro-Regular",
  },

});
export default styles;