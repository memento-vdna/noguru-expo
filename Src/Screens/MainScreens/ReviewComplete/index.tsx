import React, { useState } from 'react';
import {
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  TextInput
} from 'react-native';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import Ionic from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Styles from './Styles';

export type Props = {
  navigation: any;
};

const ReviewComplete = (props: any) => {
  const { navigation } = props;


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

        <View style={Styles.mainDataContainer}>
        <Image source={Images.gallery} style={Styles.mainImage} />
        <Text style={Styles.descriptionBold}>{`Thank you for your review`}</Text>
        <Text style={Styles.descriptionBold}>{`We are on it`}</Text>

        </View>

        </View>
    </SafeAreaView>
  );
}

export default ReviewComplete;
