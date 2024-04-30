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


export type Props = {
  navigation: any;
};


const MultiChoice = (props: any) => {
  const { navigation } = props;
  const [volume, setVolume] = useState(true)

  const DATA = [
    {
      name: `Extremely sad`
    },
    {
      name: `Sad`
    },
    {
      name: `Normal`
    },
    {
      name: `Happy`
    },
    {
      name: `Extremely Happy`
    },
  ]

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
            <Text style={Styles.descriptionTxt}>{`What does thunder sound like? What's the sound of heels walking on concrete? From which side most of the sounds appear to come?`}</Text>
          </View>

        </View>

        <View style={Styles.bottomContainer}>
          <View style={Styles.bottomWrapper}>
            {
              DATA?.map((item, keyID) => {
                return (
                  <TouchableOpacity key={keyID}
                    onPress={() => { navigation.navigate("Range") }}
                    style={Styles.nextButton}>
                    <Text style={Styles.nextText}>{item?.name}</Text>
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </View>

      </View>
    </SafeAreaView>
  );
}

export default MultiChoice;