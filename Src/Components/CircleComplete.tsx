
import React, { useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, Text, Image } from 'react-native';

import Colors from "../Styles/Colors";
import Images from "../Styles/Images";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';


const CircleComplete = () => {

  return (

    <View
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(20, 20, 16, 0.9)',
        position: 'absolute'
      }}>
      <Image source={Images.done} style={Styles.doneIcon} />
      <Text style={Styles.descriptionText}>{`Please wait for the therapy to download`}</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  doneIcon: {
    width: 120,
    height: 120,
    borderRadius: 120,
    alignSelf: "center"
  },

  descriptionText: {
    fontSize: 16,
    fontFamily: "SF-Pro-Semibold",
    color: Colors.SoftPeach,
    marginTop: hp(2),
    textAlign: "center"
  }
})

export default CircleComplete;