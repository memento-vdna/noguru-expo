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

export type Props = {
  navigation: any;
};


const Splash = (props: any) => {
  const { navigation } = props;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Onboarding")
    }, 3000);
    return () => clearTimeout(timer);
  }, []);


  return (
    
      <SafeAreaView style={Styles.backgroundWrapper}>
       <StatusBar barStyle={"light-content"} />
        <View style={Styles.mainContainer}>

          <Text style={Styles.logoText}>{"NoGuru"}</Text>
          <Text style={Styles.logoDescription}>{"You have what it takes"}</Text>

        </View>
      </SafeAreaView>
  );
}

export default Splash;