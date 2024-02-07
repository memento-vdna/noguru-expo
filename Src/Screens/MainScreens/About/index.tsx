import React, { useState } from 'react';
import {
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
import Ionic from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Styles from './Styles';

export type Props = {
  navigation: any;
};

const About = (props: any) => {
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
              <Text style={Styles.titleText}>{`About No Guru`}</Text>
            </View>
          </View>
        </View>
        {/* Header Ends */}

        <View style={Styles.mainDataCotainer}>
          <View style={Styles.dataWrapper}>
            <Text style={Styles.description}>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  `}</Text>
            <Text style={Styles.description}>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  `}</Text>
          </View>
        </View>

        <View style={Styles.bottomContainer}>
          <View style={Styles.showContainer}>
            {/* Leave feedback */}
            <TouchableOpacity
              style={Styles.boxContainer}>
              <Text style={Styles.listTitle}>{`Leave feedback`}</Text>
              <Ionic
                name={"chevron-forward"}
                size={24}
                style={Styles.backIcon} />
            </TouchableOpacity>
            <View style={Styles.line} />
            {/* Request a tool */}
            <TouchableOpacity onPress={() => { props.navigation.navigate("RequestTool") }}
              style={Styles.boxContainer}>
              <Text style={Styles.listTitle}>{`Request a tool`}</Text>
              <Ionic
                name={"chevron-forward"}
                size={24}
                style={Styles.backIcon} />
            </TouchableOpacity>
          </View>

        </View>


      </View>
    </SafeAreaView>
  );
}

export default About;
