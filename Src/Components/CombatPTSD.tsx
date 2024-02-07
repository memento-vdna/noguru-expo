import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions, View, Image } from 'react-native';
import Colors from "../Styles/Colors";
import Images from "../Styles/Images";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;


const CombatPTSD = (props: any) => {
  const { navigation } = props

  return (
    <View style={Styles.dataWrapper}>
      <Image source={Images?.combatMain} style={Styles.imageMain} />

      <View style={Styles.listWrapper}>
        <Text style={Styles.reviewTitle}>{`0 Reviews`}</Text>
        <TouchableOpacity onPress={() => {
          navigation.navigate("LeaveFeedback")
        }}>
          <Text style={Styles.gaveReview}>{`Leave review`}</Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.line} />
      <View style={Styles.descriptionWrap}>
        <Text style={Styles.descriptionText}>{`Here you can find all the techniques you'll need to overcome your depression. Make sure you are in a quiet environment, and you have at least 60 minutes of uninterrupted attention at your disposal.`}</Text>
      </View>
    </View>

  )
}

const Styles = StyleSheet.create({

  dataWrapper: {
    marginTop: hp(3)
  },
  imageMain: {
    width: widthScreen,
    alignSelf: "center",
    height: hp(20)
  },
  listWrapper: {
    width: widthScreen / 1.2,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: hp(4)
  },
  line: {
    width: widthScreen / 1.2,
    alignSelf: "center",
    height: hp(0.1),
    backgroundColor: Colors.Grey,
    marginTop: hp(2)
  },
  reviewTitle: {
    fontSize: 16,
    fontFamily: "SF-Pro-Semibold",
    color: Colors.Charade,
  },
  gaveReview: {
    fontSize: 14,
    fontFamily: "SF-Pro-Semibold",
    color: "rgba(20, 20, 16, 0.56)",
  },
  descriptionWrap: {
    width: widthScreen / 1.22,
    alignSelf: "center",
    marginTop: hp(2)
  },
  descriptionText: {
    fontSize: 16,
    fontFamily: "SF-Pro-Regular",
    color: Colors.StormDust,
    lineHeight: 26
  }
})
export default CombatPTSD;