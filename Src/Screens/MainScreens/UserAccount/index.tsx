import React, { useState } from 'react';
import {
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  Alert,
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

const UserAccount = (props: any) => {
  const { navigation } = props;

  const close = () => {
    Alert.alert('You sure to want delete account?', '', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'Delete', onPress: () => navigation.navigate("AnonymousUser") },
    ]);

  }

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
              <Text style={Styles.titleText}>{`Arthur Prilutzki`}</Text>
              <Text style={Styles.questionText}>{`Arthurprilutzki@noguru.com`}</Text>
            </View>
            <View style={Styles.empty} />
          </View>
        </View>
        {/* Header Ends */}

        <View style={Styles.mainDataContainer}>
          <View style={Styles.showContainer}>
            {/* Edit profile */}
            <TouchableOpacity onPress={() => { props.navigation.navigate("EditProfile") }}
              style={Styles.boxContainer}>
              <View style={Styles.leftWrapper}>
                <Image source={Images.edit} style={Styles.listIcon} />
                <Text style={Styles.listTitle}>{`Edit profile`}</Text>
              </View>
              <Ionic
                name={"chevron-forward"}
                size={24}
                style={Styles.backIcon} />
            </TouchableOpacity>
            <View style={Styles.line} />
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
              user: "Arthur Prilutzki"
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
            <TouchableOpacity onPress={() => { props.navigation.navigate("About") }}
              style={Styles.boxContainer}>
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
            {/* Log out */}
            <TouchableOpacity onPress={() => { props.navigation.navigate("SignIn") }}
              style={Styles.boxContainer}>
              <View style={Styles.leftWrapper}>
                <Image source={Images.authIcon} style={Styles.listIcon} />
                <Text style={Styles.loginTitle}>{`Log out`}</Text>
              </View>
              <Ionic
                name={"chevron-forward"}
                size={24}
                style={Styles.rightIcon} />
            </TouchableOpacity>

          </View>
        </View>

        <View style={Styles.bottomContainer}>
          <TouchableOpacity onPress={() => { close() }}>
            <Text style={Styles.deleteText}>{`Delete Account`}</Text>
          </TouchableOpacity>

        </View>

      </View>
    </SafeAreaView >
  );
}

export default UserAccount;
