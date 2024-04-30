import React, { useState } from 'react';
import {
  SafeAreaView,
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
import Styles from './Styles';

export type Props = {
  navigation: any;
};

const Therapies = (props: any) => {
  const { navigation } = props;

  return (
    <SafeAreaView style={Styles.safeAreaContainer}>
      <StatusBar barStyle={'light-content'} />
      <View style={Styles.mainContainer}>

        {/* Header */}
        <View style={Styles.headerContainer}>
          <View style={Styles.headerWrapper}>
            <Text style={Styles.titleText}>{`Hello, Arthur!`}</Text>
            <Text style={Styles.questionText}>{`What's on your mind?`}</Text>
          </View>

          <TouchableOpacity onPress={() => { props.navigation.navigate("UserAccount") }}>
            <Image source={Images.menu} style={Styles.menuIcon} />
          </TouchableOpacity>
        </View>
        {/* Header Ends */}

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Styles.scrollContent}>

            {/* List 1 */}
            <View style={Styles.showContainer}>
              <TouchableOpacity onPress={() => {
                navigation.navigate("TherapyDetails", {
                  therepyName: "Depression"
                })
              }}
              style={Styles.boxContainer}>
                <Image source={Images.depression} style={Styles.depressIcon} />
                <Text style={Styles.boxTitle}>{`Depression`}</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => {
                props.navigation.navigate("TherapyDetails", {
                  therepyName: "Combat PTSD"
                })
              }}
                style={Styles.boxContainer}>
                <Image source={Images.combat} style={Styles.depressIcon} />
                <Text style={Styles.boxTitle}>{`Combat PTSD`}</Text>
              </TouchableOpacity>
            </View>
            {/* List 2 */}
            <View style={Styles.showContainer}>
              <TouchableOpacity style={Styles.boxContainer}>
                <Image source={Images.grief} style={Styles.depressIcon} />
                <Text style={Styles.boxTitle}>{`Grief`}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={Styles.boxContainer}>
                <Image source={Images.smoking} style={Styles.depressIcon} />
                <Text style={Styles.boxTitle}>{`Quit smoking`}</Text>
              </TouchableOpacity>
            </View>
            {/* List 3 */}
            <View style={Styles.showContainer}>
              <TouchableOpacity style={Styles.boxContainer}>
                <Image source={Images.aniextyStop} style={Styles.depressIcon} />
                <Text style={Styles.boxTitle}>{`Emergency anxiety stop`}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={Styles.boxContainer}>
                <Image source={Images.aniexty} style={Styles.depressIcon} />
                <Text style={Styles.boxTitle}>{`Anxiety`}</Text>
              </TouchableOpacity>
            </View>

          </View>
        </ScrollView>


      </View>
    </SafeAreaView>
  );
}

export default Therapies;
