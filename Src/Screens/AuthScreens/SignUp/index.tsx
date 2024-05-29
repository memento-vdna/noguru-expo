import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  ImageBackground
} from 'react-native';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import { TextInput } from 'react-native-paper';
import Ionic from 'react-native-vector-icons/Ionicons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Styles from './Styles';


export type Props = {
  navigation: any;
};

const SignUp = (props: any) => {
  const { navigation } = props;

  const [fullname, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [coPassword, setCoPassword] = useState("")

  const [passCheck, setPassCheck] = useState(false)
  const [coPassCheck, setCoPassCheck] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  const onSubmit = () => {
    navigation.navigate("Chat")
  }

  return (
    <SafeAreaView style={Styles.safeAreaContainer}>
      <StatusBar barStyle={'light-content'} />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}
        enableOnAndroid={true} extraHeight={130} extraScrollHeight={130}
        enableAutomaticScroll={(Platform.OS === 'ios')}
        contentContainerStyle={Styles.safeAreaContainer}>
        <View style={Styles.mainContainer}>
          <View style={Styles.backgroundWrapper}>
            <View style={Styles.mainHeadContainer} />
            <View style={Styles.bottomHeadContainer}>

              <View style={Styles.headerWrapper}>
                <TouchableOpacity onPress={() => { navigation.goBack() }}>
                  <Ionic
                    name={"chevron-back"}
                    size={32}
                    style={Styles.backIcon} />
                </TouchableOpacity>
                <View style={Styles.seperator}>
                  <Text style={Styles.welcomeText}>{`Sign Up`}</Text>
                  <Text style={Styles.messageText}>
                    <Text style={Styles.messageText}>{`Using  `}</Text>
                    <Text style={Styles.messageTextBold}>{`arthurprilutzki@noguru.com  `}</Text>
                    <Text style={Styles.messageText}>{`to Register.`}</Text>
                  </Text>
                </View>
              </View>

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
                right={password?.length > 0 ? <TextInput.Icon icon={passCheck == true ? "eye-off" : "eye"}
                  onPress={() => { setPassCheck(!passCheck) }}
                  color={Colors.Charade} style={Styles.iconClose} /> : null}
              />

              {/* Repeat Password */}
              <TextInput style={Styles.wrapper}
                value={coPassword}
                label={`repeat password`?.toUpperCase()}
                placeholder={""}
                mode={"flat"}
                dense={true}
                secureTextEntry={coPassCheck == true ? false : true}
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
                  setCoPassword(value)
                }}
                right={coPassword?.length > 0 ? <TextInput.Icon icon={coPassCheck == true ? "eye-off" : "eye"}
                  onPress={() => { setCoPassCheck(!coPassCheck) }}
                  color={Colors.Charade} style={Styles.iconClose} /> : null}
              />

              {/* CheckBox */}
              <View style={Styles.checkBoxWrap}>
                <TouchableOpacity onPress={() => { setRememberMe(!rememberMe) }}>
                  <Ionic
                    name={rememberMe == false ? "square-outline" : "checkbox-outline"}
                    size={24}
                    style={{
                      color: Colors.Charade,
                      // marginTop: 4
                    }}
                  />
                </TouchableOpacity>
                <Text style={Styles.checkBoxText}>
                  <Text style={Styles.checkBoxText}>{`I have read, understood and accepted the `}</Text>
                  <Text style={Styles.messageTextBold}>{`Privacy Notification `}</Text>
                  <Text style={Styles.checkBoxText}>{`and `}</Text>
                  <Text style={Styles.messageTextBold}>{`Terms of Use`}</Text>
                </Text>
              </View>

            </View>

            {/* Bottom  part of the screen -  buttons */}
            <View style={Styles.bottomWrapper}>
              <TouchableOpacity onPress={() => {
                props.navigation.navigate("BottomTabView", {
                  screen: "TherapiesTab"
                })
              }}
                style={Styles.nextButton}>
                <Text style={Styles.nextText}>{`Sign up`}</Text>
              </TouchableOpacity>
            </View>

          </View>

        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

export default SignUp;
