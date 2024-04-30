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
import SlideButton from 'rn-slide-button';
import TimerCountdown from '../../../../Components/TimerCountdown';

export type Props = {
  navigation: any;
};


const NextSlideSecond = (props: any) => {
  const { navigation } = props;

  const [volume, setVolume] = useState(true)
  const [swipeStart, setSwipeStart] = useState(false)


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

  const renderIcon = React.useCallback(() => {
    return (
      <View style={Styles.continueButton}>
        <Ionic name={"chevron-back"} size={15} style={{ color: Colors.StormDust }} />
        <Ionic name={"chevron-back"} size={15} style={{ color: Colors.Grey, marginLeft: -5 }} />
      </View>
    );
  }, []);

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

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Styles.scrollContent}>

            <View style={Styles.desWrapContent}>
              <Text style={Styles.videoDescription}>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  `}</Text>
            </View>

            <View style={Styles.dataWrapContent}>
              <Text style={Styles.videoDescription}>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}</Text>
            </View>

          </View>
        </ScrollView>

        {
          swipeStart == true ?
            <TimerCountdown navigation={navigation} screen={"MultiChoice"} initialMinute={0} initialSeconds={15} />
            :
            <SlideButton
              title="Swipe to Continue"
              icon={renderIcon()}
              containerStyle={Styles.saveButton}
              titleStyle={Styles.continueText}
              underlayStyle={Styles.saveButtonUnderlay}
              thumbStyle={Styles.saveThumb}
              height={60}
              borderRadius={16}
              reverseSlideEnabled
              padding={0}
              onReachedToStart={() => setSwipeStart(false)}
              onReachedToEnd={() => setSwipeStart(true)}
            />
        }
      </View>
    </SafeAreaView>
  );
}

export default NextSlideSecond;