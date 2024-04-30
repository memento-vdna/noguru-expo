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

const ChooseMeditation = (props: any) => {
  const { navigation } = props;
  const [selectGoal, onSelectGoal] = useState(false)
  const [selectGuided, onSelectGuided] = useState(false)


  return (
    <SafeAreaView style={Styles.safeAreaContainer} edges={{ top: 'off' }}>
      <StatusBar barStyle={"dark-content"} />
      <View style={Styles.mainContainer}>

        {/* Header */}
        <View style={Styles.headerMain}>
          <View style={Styles.headerContainer}>

            <Text style={Styles.titleText}>{`Choose meditation`}</Text>

            <TouchableOpacity onPress={() => { navigation.goBack() }}>
              <Ionic name={"close"} size={32} style={Styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
        {/* Header Ends */}

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Styles.scrollContent}>

            {/* Free Timer */}
            <TouchableOpacity 
              style={Styles.listContainer}>
              <View style={Styles.listWrapper}>
                <View style={Styles.listRightWrapper}>
                  <Image source={Images.clock} style={Styles.meditateIcon} />
                  <Text style={Styles.chooseTitle}>{`Free Timer`}</Text>
                </View>

                <Ionic name={"chevron-forward"} size={24} style={Styles.icon} />
              </View>
            </TouchableOpacity>

            {/* Goal-oriented mantras */}
            <TouchableOpacity onPress={() => { onSelectGoal(!selectGoal) }}
              style={Styles.listContainer}>
              <View style={Styles.listWrapper}>
                <Text style={Styles.titleLeft}>{`Goal-oriented mantras`}</Text>

                <Ionic name={selectGoal == true ? "chevron-up" : "chevron-down"} size={24} style={Styles.icon} />
              </View>
              {
                selectGoal == true ?
                  <View style={Styles.listDataWrap}>

                    <View style={Styles.listDataWrapper}>
                      <Text style={Styles.listDataTitle}>{`Let It Go`}</Text>
                    </View>
                    <View style={Styles.divider} />

                    <View style={Styles.listWrapper}>
                      <Text style={Styles.listDataTitle}>{`OM (A-O-U-M)`}</Text>
                    </View>
                    <View style={Styles.divider} />

                    <View style={Styles.listWrapper}>
                      <Text style={Styles.listDataTitle}>{`This Too Shall Pass`}</Text>
                    </View>
                    <View style={Styles.divider} />

                    <View style={Styles.listWrapper}>
                      <Text style={Styles.listDataTitle}>{`Self Acceptance`}</Text>
                    </View>

                  </View>
                  : null
              }
            </TouchableOpacity>

            {/* Guided Meditations */}
            <TouchableOpacity onPress={() => { onSelectGuided(!selectGuided) }}
              style={Styles.listContainer}>
              <View style={Styles.listWrapper}>
                <Text style={Styles.titleLeft}>{`Guided Meditations`}</Text>

                <Ionic name={selectGuided == true ? "chevron-up" : "chevron-down"} size={24} style={Styles.icon} />
              </View>
              {
                selectGuided == true ?
                  <View style={Styles.listDataWrap}>

                    <View style={Styles.listDataWrapper}>
                      <Text style={Styles.listDataTitle}>{`A - Mindful Breathing`}</Text>
                    </View>
                    <View style={Styles.divider} />

                    <View style={Styles.listWrapper}>
                      <Text style={Styles.listDataTitle}>{`B - Mindful Walking`}</Text>
                    </View>
                    <View style={Styles.divider} />

                    <View style={Styles.listWrapper}>
                      <Text style={Styles.listDataTitle}>{`C - Basic Body Scan`}</Text>
                    </View>
                    <View style={Styles.divider} />

                    <View style={Styles.listWrapper}>
                      <Text style={Styles.listDataTitle}>{`D - Full Body Scan`}</Text>
                    </View>

                  </View>
                  : null
              }
            </TouchableOpacity>


          </View>
        </ScrollView>


        <TouchableOpacity onPress={() => { navigation.navigate("NewReminder") }}
          style={Styles.nextButton}>
          <Text style={Styles.nextText}>{`Select`}</Text>
        </TouchableOpacity>


      </View>
    </SafeAreaView>
  );
}

export default ChooseMeditation;
