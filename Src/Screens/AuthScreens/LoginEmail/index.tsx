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

const LoginEmail = (props: any) => {
  const { navigation } = props;

  const [email, setEmail] = useState("")

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
                <Text style={Styles.welcomeText}>{`What’s your email address?`}</Text>
              </View>

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
                }}
                right={email?.length > 0 ? <TextInput.Icon icon="close-circle"
                  onPress={() => { setEmail("") }}
                  color={Colors.Charade} style={Styles.iconClose} /> : null}
              />

            </View>

            {/* Bottom  part of the screen -  buttons */}
            <View style={Styles.bottomWrapper}>
              <TouchableOpacity onPress={() => { props.navigation.navigate("SignUp") }}
                style={Styles.nextButton}>
                <Ionic
                  name={"mail"}
                  size={20}
                  style={Styles.mailIcon} />
                <Text style={Styles.nextText}>{`Continue with email`}</Text>
              </TouchableOpacity>
            </View>

          </View>

        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

export default LoginEmail;
