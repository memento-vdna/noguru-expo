import React, { useState, useEffect } from 'react';
import {
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  Alert,
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

const Calender = (props: any) => {
  const { navigation } = props;

  const [showData, setShowData] = useState(false)
  const [editList, setEditList] = useState(false)

  const DATA = [
    {
      title: `A - The Consequence of thoughts`,
      timing: [
        {
          timer: "15:00"
        }
      ],
      schedule: `Sun, Mon, Fri`
    },
    {
      title: `New Timeline Exercise - R.H`,
      timing: [
        {
          timer: "12:30"
        },
        {
          timer: "13:30"
        },
        {
          timer: "14:30"
        },
      ],
      schedule: `Daily - 1/42`
    },
    {
      title: `OM (A-O-U-M)`,
      timing: [
        {
          timer: "11:00"
        }
      ],
      schedule: `Daily`
    },
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowData(true)
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const closeDelete = () => {
    Alert.alert('You sure to want delete this schedule?', '', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Delete', onPress: () => navigation.navigate("BottomTabView", {
          screen: "TherapiesTab"
        })
      },
    ]);

  }

  return (
    <SafeAreaView style={Styles.safeAreaContainer} edges={{ top: 'off' }}>
      <StatusBar barStyle={"dark-content"} />
      <View style={Styles.mainContainer}>

        {/* Header */}
        <View style={Styles.headerMain}>
          <View style={Styles.headerContainer}>

            <Text style={Styles.titleText}>{`Schedule`}</Text>

            <TouchableOpacity onPress={() => { setEditList(!editList) }}>
              <Ionic name={"pencil"} size={22} style={Styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
        {/* Header Ends */}

        {
          showData == false ?
            <View style={Styles.mainDataContainer}>
              <Image source={Images.scheduleIcon} style={Styles.mainImage} />

              <View style={Styles.dataWrapper}>
                <Text style={Styles.descriptionBold}>{`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}</Text>
              </View>
            </View>
            :
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={Styles.scrollContent}>

                {
                  DATA?.map((item, keyID) => {
                    return (
                      <TouchableOpacity key={keyID}
                        style={Styles.listContainer}>
                        <View style={Styles.listWrapper}>
                          {
                            editList == true ?
                              <TouchableOpacity onPress={() => { closeDelete() }}>
                                <Ionic name={"trash"} size={24} style={Styles.trashIcon} />
                              </TouchableOpacity>
                              : null
                          }
                          <View style={Styles.listLeftWrapper}>
                            <Text style={Styles.chooseTitle}>{item?.title}</Text>
                            <View style={Styles.listRightWrapper}>
                              {
                                item?.timing?.map((val, keyVal) => {
                                  return (
                                    <View key={keyVal} style={Styles.listTimeWrap}>
                                      <Text style={Styles.timeText}>{val?.timer}</Text>
                                    </View>
                                  )
                                })
                              }

                            </View>
                            <Text style={Styles.titleLeft}>{item?.schedule}</Text>
                          </View>


                          <Ionic name={"chevron-forward"} size={24} style={Styles.icon} />
                        </View>
                      </TouchableOpacity>
                    )
                  })
                }

              </View>
            </ScrollView>
        }


        {
          showData == false ?
            <View style={Styles.bottomContainer}>
              <TouchableOpacity onPress={() => { navigation.navigate("ScheduleRemainder") }}
                style={Styles.nextButton}>
                <Text style={Styles.nextText}>{`Add a new reminder`}</Text>
              </TouchableOpacity>
            </View>
            :
            <TouchableOpacity onPress={() => { navigation.navigate("ScheduleRemainder") }}
              style={Styles.nextButtonSecond}>
              <Text style={Styles.nextText}>{`Add a new reminder`}</Text>
            </TouchableOpacity>
        }

      </View>
    </SafeAreaView>
  );
}

export default Calender;
