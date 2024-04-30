import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import Styles from './Styles';
import Images from '../../../../Styles/Images';
import Ionic from 'react-native-vector-icons/Ionicons';
import Colors from '../../../../Styles/Colors';
import Slider from '@react-native-community/slider';


export type Props = {
  navigation: any;
};


const EndTherapy = (props: any) => {
  const { navigation } = props;
  const [volume, setVolume] = useState(true)

  const close = () => {
    Alert.alert('You sure to want get out?', 'Your results will not be saved', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Close', onPress: () => navigation.navigate("BottomTabView", {
          screen: "TherapiesTab"
        })
      },
    ]);

  }

  return (
    <SafeAreaView style={Styles.safeAreaContainer}>
      <StatusBar barStyle={"dark-content"} />
      <View style={Styles.mainContainer}>

        {/* Header */}
        <View style={Styles.headerContainer}>
          {/* Back */}
          <TouchableOpacity onPress={() => { navigation.goBack() }}>
            <Ionic name={"chevron-back"} size={32} style={Styles.icon} />
          </TouchableOpacity>

          {/* Repeat */}
          <Image source={Images.repeat} style={Styles.repeatIcon} />

          {/* Volume */}
          {
            volume == true ?
              <TouchableOpacity onPress={() => { setVolume(false) }}>
                <Ionic name={"volume-high"} size={32} style={Styles.backIcon} />
              </TouchableOpacity>
              :
              <TouchableOpacity onPress={() => { setVolume(true) }}>
                <Ionic name={"volume-off"} size={32} style={Styles.backIcon} />
              </TouchableOpacity>
          }

          {/* Close */}
          <Ionic name={"close"} size={32} style={Styles.backIcon} />
        </View>
        {/* Header Ends */}

        <View style={Styles.mainDataContainer}>

          <View style={Styles.dataWrapContent}>
            <Text style={Styles.title}>{`Congrats! You've made it! `}</Text>
            <Text style={Styles.descriptionTxt}>{`This subscription will get you full and unlimited access to our sincerest attempt to bring you wellbeing, without the nonsense. NoGuru - You have what it takes,  will get you full and unlimited access to our sincerest attempt to bring you wellbeing, without the nonsense.`}</Text>
          </View>

        </View>

        <View style={Styles.bottomContainer}>

          <TouchableOpacity
            // onPress={() => { navigation.navigate("RemainderOffer") }}
            style={Styles.nextButton}>
            <Text style={Styles.nextText}>{`Leave feedback`}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => { close() }}
            style={Styles.continueButton}>
            <Text style={Styles.continueText}>{`Close`}</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

export default EndTherapy;