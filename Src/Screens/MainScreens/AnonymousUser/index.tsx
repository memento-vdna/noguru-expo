import React, { useState } from 'react';
import {
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  ScrollView
} from 'react-native';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import Ionic from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Styles from './Styles';

export type Props = {
  navigation: any;
};

const AnonymousUser = (props: any) => {
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
              <Text style={Styles.titleText}>{`Anonymous user`}</Text>
              <Text style={Styles.questionText}>{`autorization to see more`}</Text>
            </View>
            <View style={Styles.empty} />
          </View>
        </View>
        {/* Header Ends */}

        <View style={Styles.showContainer}>
          {/* Restore purchases */}
          <TouchableOpacity style={Styles.boxContainer}>
            <View style={Styles.leftWrapper}>
              <Image source={Images.restore} style={Styles.listIcon} />
              <Text style={Styles.listTitle}>{`Restore purchases`}</Text>
            </View>
            <Ionic
              name={"chevron-forward"}
              size={24}
              style={Styles.backIcon} />
          </TouchableOpacity>
          <View style={Styles.line} />
          {/* Subscriptions */}
          <TouchableOpacity onPress={() => props.navigation.navigate("Subscription", {
            user: "Anonymous"
          })}
            style={Styles.boxContainer}>
            <View style={Styles.leftWrapper}>
              <Image source={Images.subscribe} style={Styles.listIcon} />
              <Text style={Styles.listTitle}>{`Subscriptions`}</Text>
            </View>
            <Ionic
              name={"chevron-forward"}
              size={24}
              style={Styles.backIcon} />
          </TouchableOpacity>
          <View style={Styles.line} />
          {/* About app */}
          <TouchableOpacity style={Styles.boxContainer}>
            <View style={Styles.leftWrapper}>
              <Image source={Images.about} style={Styles.listIcon} />
              <Text style={Styles.listTitle}>{`About app`}</Text>
            </View>
            <Ionic
              name={"chevron-forward"}
              size={24}
              style={Styles.backIcon} />
          </TouchableOpacity>
          <View style={Styles.line} />
          {/* Privacy Policy */}
          <TouchableOpacity style={Styles.boxContainer}>
            <View style={Styles.leftWrapper}>
              <Image source={Images.privacy} style={Styles.listIcon} />
              <Text style={Styles.listTitle}>{`Privacy Policy`}</Text>
            </View>
            <Ionic
              name={"chevron-forward"}
              size={24}
              style={Styles.backIcon} />
          </TouchableOpacity>
          <View style={Styles.line} />
          {/* Terms & Conditions */}
          <TouchableOpacity style={Styles.boxContainer}>
            <View style={Styles.leftWrapper}>
              <Image source={Images.terms} style={Styles.listIcon} />
              <Text style={Styles.listTitle}>{`Terms & Conditions`}</Text>
            </View>
            <Ionic
              name={"chevron-forward"}
              size={24}
              style={Styles.backIcon} />
          </TouchableOpacity>
          <View style={Styles.line} />
          {/* Sign in */}
          <View style={Styles.userLoginWrapper}>
            <TouchableOpacity onPress={() => { props.navigation.navigate("SignIn") }}
              style={Styles.boxContainer}>
              <View style={Styles.leftWrapper}>
                <Image source={Images.authIcon} style={Styles.listIcon} />
                <Text style={Styles.loginTitle}>{`Sign in`}</Text>
              </View>
              <Ionic
                name={"chevron-forward"}
                size={24}
                style={Styles.rightIcon} />
            </TouchableOpacity>
          </View>

        </View>


      </View>
    </SafeAreaView >
  );
}

export default AnonymousUser;
