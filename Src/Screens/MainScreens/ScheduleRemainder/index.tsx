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
import ChooseTime from '../../../Components/ChooseTime';

export type Props = {
  navigation: any;
};

const ScheduleRemainder = (props: any) => {
  const { navigation } = props;
  const [current, onSelect] = useState(1)
  const [openModel, setOpenModel] = useState(false)

  const closeModel = () => {
    setOpenModel(false)
  }


  return (
    <SafeAreaView style={Styles.safeAreaContainer} edges={{ top: 'off' }}>
      <StatusBar barStyle={"dark-content"} />
      <View style={Styles.mainContainer}>

        {/* Header */}
        <View style={Styles.headerMain}>
          <View style={Styles.headerContainer}>

            <Text style={Styles.titleText}>{`New Reminder`}</Text>

            <TouchableOpacity onPress={() => { navigation.goBack() }}>
              <Ionic name={"close"} size={32} style={Styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
        {/* Header Ends */}

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Styles.scrollContent}>

            <View style={Styles.dataWrapper}>

              {/* Time Edit Box */}
              <View style={Styles.rangeContainer}>
                <TouchableOpacity onPress={() => { setOpenModel(true) }}
                  style={Styles.rangeInnerWrapper}>

                  <Text style={Styles.editTitle}>{`Tap to Edit`}</Text>
                  <Text style={Styles.timerTitle}>{`12:00`}</Text>

                  <View style={Styles.hourMinWrap}>
                    <Text style={Styles.hourTxt}>{`Hr`}</Text>
                    <Text style={Styles.hourTxt}>{`Min`}</Text>
                  </View>

                </TouchableOpacity>
              </View>

              <Text style={Styles.listTitle}>{`Set frequency`}</Text>

              <View style={Styles.cardContainer}>

                <TouchableOpacity onPress={() => { onSelect(1) }}
                  style={current == 1 ? Styles.timeWrapBlack : Styles.timeWrap}>
                  <Text style={current == 1 ? Styles.timeTextBlack : Styles.timeText}>{`Every day`}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { onSelect(2) }}
                  style={current == 2 ? Styles.timeWrapBlack : Styles.timeWrap}>
                  <Text style={current == 2 ? Styles.timeTextBlack : Styles.timeText}>{`Mon`}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { onSelect(3) }}
                  style={current == 3 ? Styles.timeWrapBlack : Styles.timeWrap}>
                  <Text style={current == 3 ? Styles.timeTextBlack : Styles.timeText}>{`Tue`}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { onSelect(4) }}
                  style={current == 4 ? Styles.timeWrapBlack : Styles.timeWrap}>
                  <Text style={current == 4 ? Styles.timeTextBlack : Styles.timeText}>{`Wed`}</Text>
                </TouchableOpacity>

              </View>

              <View style={Styles.cardContainer1}>

                <TouchableOpacity onPress={() => { onSelect(5) }}
                  style={current == 5 ? Styles.timeWrapBlack : Styles.timeWrap}>
                  <Text style={current == 5 ? Styles.timeTextBlack : Styles.timeText}>{`Thu`}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { onSelect(6) }}
                  style={current == 6 ? Styles.timeWrapBlack : Styles.timeWrap}>
                  <Text style={current == 6 ? Styles.timeTextBlack : Styles.timeText}>{`Fri`}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { onSelect(7) }}
                  style={current == 7 ? Styles.timeWrapBlack : Styles.timeWrap}>
                  <Text style={current == 7 ? Styles.timeTextBlack : Styles.timeText}>{`Sat`}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { onSelect(8) }}
                  style={current == 8 ? Styles.timeWrapBlack : Styles.timeWrap}>
                  <Text style={current == 8 ? Styles.timeTextBlack : Styles.timeText}>{`Sun`}</Text>
                </TouchableOpacity>

              </View>

            </View>

            {/* Choose Meditation */}
            <TouchableOpacity onPress={() => { navigation.navigate("ChooseMeditation") }}
              style={Styles.listContainer}>
              <View style={Styles.listWrapper}>
                <View style={Styles.listRightWrapper}>
                  <Image source={Images.meditate} style={Styles.meditateIcon} />
                  <Text style={Styles.chooseTitle}>{`Choose Meditation`}</Text>
                </View>

                <View style={Styles.listRightWrapper}>
                  <View style={Styles.listTimeWrap}>
                    <Text style={Styles.timeText}>{"None"}</Text>
                  </View>
                  <Ionic name={"chevron-forward"} size={24} style={Styles.icon} />
                </View>
              </View>
            </TouchableOpacity>

          </View>
        </ScrollView>


        <TouchableOpacity onPress={() => { navigation.navigate("NewReminder") }}
          style={Styles.nextButton}>
          <Text style={Styles.nextText}>{`Save`}</Text>
        </TouchableOpacity>

        {
          openModel == true ?
            <ChooseTime open={openModel} close={closeModel} />
            : null
        }

      </View>
    </SafeAreaView>
  );
}

export default ScheduleRemainder;
