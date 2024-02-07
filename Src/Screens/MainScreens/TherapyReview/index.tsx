import React, { useState } from 'react';
import {
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from 'react-native';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import Ionic from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import CombatPTSD from '../../../Components/CombatPTSD';
import Depression from "../../../Components/Depression";
import Styles from './Styles';

export type Props = {
  navigation: any;
};

const TherapyReview = (props: any) => {
  const { navigation } = props;

  const REVIEW_DATA = [
    {
      id: "1",
      userPic: Images.user1,
      fullName: "Vitaliy",
      createdAt: "26.02.2023",
      reviewComment: `Wow, thank you so much!!! you have helped me a lot!!! I don't know what I would have done without you.`
    },
    {
      id: "2",
      userPic: Images.user2,
      fullName: "Arthur",
      createdAt: "23.02.2023",
      reviewComment: `Here you can find all the techniques you'll need to overcome your depression. Make sure you are in a quiet environment, and you have at least 60 minutes of uninterrupted attention at your disposal.`
    },
    {
      id: "3",
      userPic: Images.user3,
      fullName: "Roman",
      createdAt: "17.01.2023",
      reviewComment: `🙌 This subscription will get you full and unlimited access to our sincerest attempt to bring you wellbeing, without the nonse.`
    },
  ]

  return (
    <SafeAreaView style={Styles.safeAreaContainer} edges={{ top: 'off' }}>
      <StatusBar barStyle={"dark-content"} />
      <View style={Styles.mainContainer}>

        {/* Header */}
        <View style={Styles.headerMain}>
          <View style={Styles.headerContainer}>
            <TouchableOpacity onPress={() => { navigation.goBack() }}>
              <Ionic
                name={"chevron-back"}
                size={32}
                style={Styles.backIcon} />
            </TouchableOpacity>
            <View style={Styles.headerWrapper}>
              <Text style={Styles.titleText}>{`Reviews`}</Text>
            </View>
          </View>
        </View>
        {/* Header Ends */}

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Styles.scrollContent}>

            {/* Review List */}
            {
              REVIEW_DATA?.map((item, keyID) => {
                return (
                  <View key={keyID} style={Styles.showContainer}>
                    <View style={Styles.boxContainer}>
                      <View style={Styles.leftWrapper}>
                        <Image source={item?.userPic} style={Styles.listIcon} />
                        <View>
                          <Text style={Styles.listTitle}>{item?.fullName}</Text>
                          <Text style={Styles.timeText}>{item?.createdAt}</Text>
                        </View>
                      </View>
                      <Image source={Images.subscribe} style={Styles.backIcon} />
                    </View>
                    <View style={Styles.innerWrapper}>
                      <Text style={Styles.reviewDescription}>{item?.reviewComment}</Text>
                    </View>
                  </View>
                )
              })
            }

          </View>
        </ScrollView>

        <TouchableOpacity onPress={() => {
          props.navigation.navigate("LeaveFeedback")
        }}
          style={Styles.nextButton}>
          <Text style={Styles.nextText}>{`Leave review`}</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

export default TherapyReview;
