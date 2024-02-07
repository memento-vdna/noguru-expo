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
  logo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  ring: {
    position: "absolute",
    width: 80,
    height: 80,
    borderRadius: 40,
    borderColor: Colors.Charade,
    borderWidth: 10,
  },

});
export default styles;