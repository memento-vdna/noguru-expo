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
    color: Colors.Charade,
  },
  titleText: {
    fontSize: 24,
    fontFamily: "SF-Pro-Bold",
    color: Colors.Charade,
  },
  mainDataContainer: {
    flex: 0.9,
    justifyContent: "center",
    alignItems: "center"
  },
  dataWrapper: {
    width: widthScreen / 1.2,
    alignSelf: "center",
  },
  descriptionBold: {
    fontSize: 20,
    fontFamily: "SF-Pro-Bold",
    color: Colors.Charade,
    marginTop: hp(2),
    textAlign: "center"
  },
  mainImage: {
    width: hp(30),
    height: hp(30),
    alignSelf: "center",
    marginBottom:hp(2)
  }

});
export default styles;