import React, { useEffect } from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
  StatusBar,
  SafeAreaView
} from 'react-native';
import Styles from './Styles';
import Images from '../../Styles/Images';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
  interpolate,
} from "react-native-reanimated";

export type Props = {
  navigation: any;
};


const Ring = ({ delay }: any) => {
  const ring = useSharedValue(0);

  const ringStyle = useAnimatedStyle(() => {
    return {
      opacity: 0.8 - ring.value,
      transform: [
        {
          scale: interpolate(ring.value, [0, 1], [0, 4]),
        },
      ],
    };
  });
  useEffect(() => {
    ring.value = withDelay(
      delay,
      withRepeat(
        withTiming(1, {
          duration: 3000,
        }),
        -1,
        false
      )
    );
  }, []);
  return <Animated.View style={[Styles.ring, ringStyle]} />
};

export default function AnimatedRing(props: any) {
  const { navigation } = props;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Splash")
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View
      style={Styles.logo}>
      <Ring delay={0} />
      <Ring delay={1000} />
      <Ring delay={2000} />
      <Ring delay={3000} />
    </View>
  );
}