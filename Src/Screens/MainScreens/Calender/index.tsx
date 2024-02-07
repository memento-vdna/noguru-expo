import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  ImageBackground
} from 'react-native';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import Ionic from 'react-native-vector-icons/Ionicons';
import Styles from './Styles';

export type Props = {
  navigation: any;
};

const Calender = (props: any) => {
  const { navigation } = props;

  return (
    <SafeAreaView style={Styles.safeAreaContainer}>
      <StatusBar barStyle={'light-content'} />
      <View style={Styles.mainContainer}>
      </View>
    </SafeAreaView>
  );
}

export default Calender;
