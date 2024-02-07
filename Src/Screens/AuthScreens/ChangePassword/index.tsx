import React, { useState } from 'react';
import {
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  ScrollView,
  Alert
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

const ChangePassword = (props: any) => {
  const { navigation } = props;

  const [password, setPassword] = useState("Arthurprilutzki")
  const [coPassword, setCoPassword] = useState("Arthurprilutzki")

  const [passCheck, setPassCheck] = useState(false)
  const [coPassCheck, setCoPassCheck] = useState(false)


  const close = () => {
    Alert.alert('You sure to want get out?', 'Your changed will not be saved', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'Close', onPress: () => navigation.goBack() },
    ]);

  }

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

              <Text style={Styles.titleText}>{`Edit Password`}</Text>

              <TouchableOpacity onPress={() => { close() }}>
                <Ionic
                  name={"close"}
                  size={24}
                  style={Styles.backIcon} />
              </TouchableOpacity>

            </View>
          </View>
          {/* Header Ends */}

          <View style={Styles.bottomHeadContainer}>
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

          </View>

          {/* Bottom  part of the screen -  buttons */}
          <View style={Styles.bottomWrapper}>
            <TouchableOpacity onPress={() => {
              props.navigation.navigate("UserAccount")
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

export default ChangePassword;
