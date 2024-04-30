import React, { useEffect, useState } from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions, View, Image } from 'react-native';
import Colors from "../Styles/Colors";
import Images from "../Styles/Images";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const widthScreen = Dimensions.get('window').width;

const TimerCountdown = (props: any) => {

  const { navigation, screen, initialMinute, initialSeconds } = props;

  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval)
          navigation.navigate(screen)
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000)
    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <View style={Styles.timerContainer}>
      <Text style={Styles.timerTitle}>{` ${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`}</Text>
    </View>
  )
}

const Styles = StyleSheet.create({

  timerContainer: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: "center",
    marginBottom: hp(1),
  },
  timerTitle: {
    fontSize: 60,
    fontFamily: "SF-Pro-Black",
    color: Colors.Tuatara,
  }

})

export default TimerCountdown;