import React, { useState } from 'react';
import {
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  ScrollView,
  ImageBackground
} from 'react-native';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import Ionic from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native-paper';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import Styles from './Styles';

export type Props = {
  navigation: any;
};

const EditProfile = (props: any) => {
  const { navigation } = props;
  const [fullname, setFullName] = useState("Arthur Prilutzki")
  const [email, setEmail] = useState("Arthurprilutzki@noguru.com")
  const [password, setPassword] = useState("Arthurprilutzki")

  const [passCheck, setPassCheck] = useState(false)


  return (
    <SafeAreaView style={Styles.safeAreaContainer} edges={{ top: 'off' }}>
      <StatusBar barStyle={"dark-content"} />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}
        enableOnAndroid={true} extraHeight={130} extraScrollHeight={130}
        enableAutomaticScroll={(Platform.OS === 'ios')}
        contentContainerStyle={Styles.safeAreaContainer}>
        <View style={Styles.mainContainer}>

          {/* Header */}
          <View style={Styles.headerMain}>
            <View style={Styles.headerContainer}>

              <Text style={Styles.titleText}>{`Edit Profile`}</Text>

              <TouchableOpacity onPress={() => { navigation.goBack() }}>
                <Ionic
                  name={"close"}
                  size={24}
                  style={Styles.backIcon} />
              </TouchableOpacity>

            </View>
          </View>
          {/* Header Ends */}

          <View style={Styles.bottomHeadContainer}>
            {/* Full Name */}
            <TextInput style={Styles.wrapper}
              value={fullname}
              label={`Full name`?.toUpperCase()}
              placeholder={""}
              mode={"flat"}
              dense={true}
              autoCapitalize="none"
              placeholderTextColor={Colors.Grey}
              textColor={Colors.Charade}
              underlineStyle={Styles.inputLine}
              underlineColor={"transparent"}
              activeOutlineColor={Colors.SoftPeach}
              // activeUnderlineColor={Colors.SoftPeach}
              theme={{
                colors: {
                  primary: Colors.Charade,
                  background: Colors.SoftPeach,
                }
              }}
              onChangeText={(value) => {
                setFullName(value)
              }} />

            {/* Email */}
            <TextInput style={Styles.wrapper}
              value={email}
              label="ENTER YOUR EMAIL"
              placeholder={""}
              mode={"flat"}
              dense={true}
              autoCapitalize="none"
              placeholderTextColor={Colors.Grey}
              textColor={Colors.Charade}
              underlineStyle={Styles.inputLine}
              underlineColor={"transparent"}
              activeOutlineColor={Colors.SoftPeach}
              // activeUnderlineColor={Colors.SoftPeach}
              theme={{
                colors: {
                  primary: Colors.Charade,
                  background: Colors.SoftPeach,
                }
              }}
              onChangeText={(value) => {
                setEmail(value)
              }} />

            {/* Password */}
            <TextInput style={Styles.wrapper}
              value={password}
              label={`You password`?.toUpperCase()}
              placeholder={""}
              mode={"flat"}
              dense={true}
              secureTextEntry={passCheck == true ? false : true}
              autoCapitalize="none"
              placeholderTextColor={Colors.Grey}
              textColor={Colors.Charade}
              underlineStyle={Styles.inputLine}
              underlineColor={"transparent"}
              activeOutlineColor={Colors.SoftPeach}
              // activeUnderlineColor={Colors.SoftPeach}
              theme={{
                colors: {
                  primary: Colors.Charade,
                  background: Colors.SoftPeach,
                }
              }}
              onChangeText={(value) => {
                setPassword(value)
              }}
              right={<TextInput.Icon icon={"pencil"}
                onPress={() => { navigation.navigate("ChangePassword") }}
                color={Colors.Charade} style={Styles.iconClose} />}
            />
          </View>

          {/* Bottom  part of the screen -  buttons */}
          <View style={Styles.bottomWrapper}>
            <TouchableOpacity onPress={() => {
              props.navigation.navigate("BottomTabView", {
                screen: "TherapiesTab"
              })
            }}
              style={Styles.nextButton}>
              <Text style={Styles.nextText}>{`Save`}</Text>
            </TouchableOpacity>
          </View>

        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

export default EditProfile;
