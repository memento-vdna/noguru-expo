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

const LeaveFeedback = (props: any) => {
  const { navigation } = props;
  const [message, setMessage] = useState("")

  const textDescriptionCheck = (value: any) => {
    if (value.length <= 500) {
      setMessage(value);
    }
  };

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
          <View style={Styles.dataWrapper}>
            <Text style={Styles.description}>{`Leave a review for this therapy`}</Text>
          </View>

          <View style={Styles.wrapper}>
            <View style={Styles.textContainer}>
              <View style={Styles.textInnerWrap}>
                <TextInput style={Styles.textInput}
                  value={message}
                  placeholder={""}
                  autoCapitalize="none"
                  multiline={true}
                  placeholderTextColor={Colors.Grey}
                  onChangeText={(value) => {
                    textDescriptionCheck(value)
                  }}
                />
              </View>
              <View style={Styles.toogleMainView}>
                <Text style={Styles.counterText}>
                  {`${220 - message?.length} max`?.toString()}
                </Text>
              </View>
            </View>
          </View>
        </View>


        <View style={Styles.bottomContainer}>
          <TouchableOpacity disabled={message?.length > 0 ? false : true}
            onPress={() => {
              props.navigation.navigate("ReviewComplete")
            }}
            style={[Styles.nextButton, { backgroundColor: message?.length > 0 ? Colors.Charade : Colors.StormDust, }]}>
            <Text style={Styles.nextText}>{`Send`}</Text>
          </TouchableOpacity>

        </View>


      </View>
    </SafeAreaView>
  );
}

export default LeaveFeedback;
