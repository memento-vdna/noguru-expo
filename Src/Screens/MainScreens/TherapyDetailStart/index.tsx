import React, { useEffect } from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import Styles from './Styles';
import Images from '../../../Styles/Images';

export type Props = {
  navigation: any;
};


const TherapyDetailStart = (props: any) => {
  const { navigation } = props;

  return (
    <ImageBackground source={Images.therapyBackground} style={Styles.backgroundWrapper}>
      <SafeAreaView style={Styles.backgroundWrapper}>
        <StatusBar barStyle={"light-content"} />
        <View style={Styles.mainContainer}>

          <TouchableOpacity onPress={() => { props.navigation.navigate("NextSlideFirst") }}
            style={Styles.nextButton}>
            <Text style={Styles.nextText}>{`Got it!`}</Text>
          </TouchableOpacity>

        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

export default TherapyDetailStart;