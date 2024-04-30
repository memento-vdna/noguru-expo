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
import RemainderModel from '../../../Components/RemainderModel';

export type Props = {
  navigation: any;
};

const NewReminder = (props: any) => {
  const { navigation } = props;
  const [openModel, setOpenModel] = useState(false)
  const [current, setRemainder] = useState(1)


  const DATA_LIST = [
    {
      id: "1",
      name: `Set time`,
      time: `15:00`,
    },
    {
      id: "2",
      name: `Set time`,
      time: `22:00`,
    },
    {
      id: "3",
      name: `Set time`,
      time: `None`,
    },
  ]

  const openRemainder = (val: any) => {
    if (val?.time == "None") {
      setOpenModel(true)
    }
  }

  const closeModel = () => {
    setOpenModel(false)
  }

  const onSelect = (data: any) => {
    setRemainder(data)
    // setOpenModel(false)
  }

  return (
    <SafeAreaView style={Styles.safeAreaContainer} edges={{ top: 'off' }}>
      <StatusBar barStyle={"dark-content"} />
      <View style={Styles.mainContainer}>

        {/* Header */}
        <View style={Styles.headerMain}>
          <View style={Styles.headerContainer}>

            <Text style={Styles.titleText}>{`New reminder`}</Text>

            <TouchableOpacity onPress={() => { navigation.goBack() }}>
              <Ionic name={"close"} size={32} style={Styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
        {/* Header Ends */}

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Styles.scrollContent}>

            <View style={Styles.dataWrapper}>
              <Text style={Styles.descriptionBold}>{`New timeline exercise - left hand - template.`}</Text>
            </View>

            <View style={Styles.rangeContainer}>
              {
                DATA_LIST?.map((item, keyID) => {
                  return (
                    <View key={keyID} style={Styles.listContainer}>
                      <View style={Styles.rangeInnerWrapper}>

                        <TouchableOpacity onPress={() => { openRemainder(item) }}
                          style={Styles.listWrapper}>
                          <Text style={Styles.listTitle}>{item?.name}</Text>
                          <View style={Styles.listRightWrapper}>

                            <View style={Styles.timeWrap}>
                              <Text style={Styles.timeText}>{item?.time}</Text>
                            </View>

                            <Ionic name={"chevron-forward"} size={24} style={Styles.icon} />
                          </View>
                        </TouchableOpacity>
                      </View>
                      {
                        DATA_LIST?.length - 1 !== keyID ?
                          <View style={Styles.divider} /> : null
                      }
                    </View>
                  )
                })
              }

            </View>

          </View>
        </ScrollView>

        <TouchableOpacity
          // onPress={() => { navigation.navigate("RemainderOffer") }}
          style={Styles.nextButton}>
          <Text style={Styles.nextText}>{`Save`}</Text>
        </TouchableOpacity>

        {
          openModel == true ?
            <RemainderModel open={openModel} close={closeModel} onSelect={onSelect} current={current} />
            : null
        }

      </View>
    </SafeAreaView>
  );
}

export default NewReminder;
