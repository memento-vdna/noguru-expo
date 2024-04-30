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


const Range = (props: any) => {
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
            <Text style={Styles.title}>{`Range`}</Text>
            <Text style={Styles.descriptionTxt}>{`Please grade the intensity of your unpleasant emotions you experience now`}</Text>
          </View>

        </View>

        <View style={Styles.bottomContainer}>
          <View style={Styles.bottomWrapper}>

            <View style={Styles.rangeContainer}>
              <View style={Styles.rangeInnerWrapper}>

                <Text style={Styles.rangeTitle}>{`Slide the scale to mark your answer.`}</Text>

                <Slider
                  style={{ width: "95%", alignSelf: "center", height: 40 }}
                  minimumValue={0}
                  maximumValue={100}
                  minimumTrackTintColor={Colors.Charade}
                  maximumTrackTintColor={Colors.Grey}
                />

                {/* Range Bottom */}
                <View style={Styles.rangeBottom}>

                  <View style={Styles.dataWrapper}>
                    <Text style={Styles.pointNo}>{`0`}</Text>
                    <Text style={Styles.pointTxt}>{`Neutral`}</Text>
                  </View>

                  <View style={Styles.dataWrapper}>
                    <Text style={Styles.pointNo}>{`50`}</Text>
                    <Text style={Styles.pointTxt}>{`Medium`}</Text>
                  </View>

                  <View style={Styles.dataWrapper}>
                    <Text style={Styles.pointNo}>{`100`}</Text>
                    <Text style={Styles.pointTxt}>{`Overwhelming`}</Text>
                  </View>

                </View>

              </View>
            </View>

          </View>
          <TouchableOpacity onPress={() => { navigation.navigate("RemainderOffer") }}
            style={Styles.nextButton}>
            <Text style={Styles.nextText}>{`Next`}</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

export default Range;