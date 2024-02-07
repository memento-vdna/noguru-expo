
import React, { useEffect } from 'react';
import { SafeAreaView, View, StyleSheet, Text } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Colors from "../Styles/Colors";
import Images from "../Styles/Images";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const radius = 45;

const SvgCircle = () => {
  const strokeOffset = useSharedValue(radius * Math.PI * 2);

  const animatedCircleProps = useAnimatedProps(() => {
    return {
      strokeDashoffset: withTiming(strokeOffset.value, { duration: 4000 }),
    };
  });

  useEffect(() => {
    strokeOffset.value = 0;
  }, []);

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
      <Svg height="40%" width="40%" viewBox="0 0 100 100">
        <AnimatedCircle
          animatedProps={animatedCircleProps}
          cx="50"
          cy="50"
          r="45"
          stroke="#F8F8F3"
          strokeWidth="6"
          fill="#656561"
          strokeDasharray={`${radius * Math.PI * 2}`}
        />
      </Svg>
      <Text style={Styles.descriptionText}>{`Please wait for the therapy to download`}</Text>
    </View>
  );
};

const Styles = StyleSheet.create({


  descriptionText: {
    fontSize: 16,
    fontFamily: "SF-Pro-Semibold",
    color: Colors.SoftPeach,
    marginTop: hp(-7),
    textAlign: "center"
  }
})

export default SvgCircle;