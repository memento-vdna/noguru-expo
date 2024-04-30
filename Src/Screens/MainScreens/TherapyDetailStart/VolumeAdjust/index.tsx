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


const VolumeAdjust = (props: any) => {
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
          <TouchableOpacity>
            <Image source={Images.repeat} style={Styles.repeatIcon} />
          </TouchableOpacity>

          {/* Volume */}
          {
            volume == true ?
              <TouchableOpacity onPress={() => { setVolume(false) }}>
                <Ionic name={"volume-high"} size={32} style={Styles.icon} />
              </TouchableOpacity>
              :
              <TouchableOpacity onPress={() => { setVolume(true) }}>
                <Ionic name={"volume-off"} size={32} style={Styles.icon} />
              </TouchableOpacity>
          }

          {/* Close */}
          <TouchableOpacity onPress={() => { close() }}>
            <Ionic name={"close"} size={32} style={Styles.icon} />
          </TouchableOpacity>
        </View>
        {/* Header Ends */}

        <View style={Styles.mainDataContainer}>

          <View style={Styles.dataWrapContent}>
            <Text style={Styles.title}>{`Turn your volume on`}</Text>
            <Text style={Styles.descriptionTxt}>{`To help you go through the process easily, each step is accompanied with a voice guide. Play the sample sound and adjust your volume to a pleasant level. (Headphones are recommended)`}</Text>
          </View>

        </View>

        <View style={Styles.bottomContainer}>
          <View style={Styles.bottomWrapper}>

            <View style={Styles.rangeContainer}>
              <View style={Styles.rangeInnerWrapper}>

                <TouchableOpacity>
                  <Ionic name={"play-circle"} size={64} style={Styles.playIcon} />
                </TouchableOpacity>

                <Text style={Styles.rangeTitle}>{`Click 'Play' To Test The Volume`}</Text>

                {/* Range Bottom */}
                <View style={Styles.rangeBottom}>
                  <Ionic name={"volume-off"} size={24} style={Styles.volumeIcon} />
                  <Slider
                    style={{ width: "80%", alignSelf: "center", height: 40 }}
                    minimumValue={30}
                    maximumValue={100}
                    minimumTrackTintColor={Colors.Charade}
                    maximumTrackTintColor={Colors.Grey}
                  />
                  <Ionic name={"volume-high"} size={24} style={Styles.volumeIcon} />
                </View>

              </View>
            </View>

          </View>
          <TouchableOpacity onPress={() => { navigation.navigate("EndTherapy") }}
            style={Styles.nextButton}>
            <Text style={Styles.nextText}>{`Next`}</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

export default VolumeAdjust;