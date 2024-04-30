import React, { useState } from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions, View, Image } from 'react-native';
import Colors from "../Styles/Colors";
import Images from "../Styles/Images";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import Modal from 'react-native-modal';
import Ionic from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';

const widthScreen = Dimensions.get('window').width;


const ChooseTime = (props: any) => {
  const { open, close } = props
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');

  const onChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setDate(currentDate);
  };

  return (
    <Modal animationInTiming={300}
      animationOutTiming={200}
      animationIn="slideInUp"
      animationOut="slideInUp"
      backdropOpacity={0.5}
      backdropColor={"#09101D"}
      avoidKeyboard={true}
      propagateSwipe={true}
      swipeDirection="down"
      isVisible={open}
      onSwipeComplete={() => { close() }}
      onBackdropPress={() => { close() }}
      style={{ flex: 1, justifyContent: 'flex-end' }}>
      <View style={Styles.modalContainer}>

        <View style={Styles.mainWrapper}>
          <Ionic name={"remove"} size={32} style={Styles.removeIcon} />

          <View style={Styles.dateContainer}>
            <DateTimePicker
              testID="dateTimePicker"
              display={"spinner"}
              value={date}
              mode={"time"}
              is24Hour={true}
              onChange={onChange}
            />
          </View>

          <TouchableOpacity onPress={() => { close() }}
            style={Styles.nextButton}>
            <Text style={Styles.nextText}>{`Accept`}</Text>
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  )
}

const Styles = StyleSheet.create({


  modalContainer: {
    width: widthScreen,
    alignSelf: 'center',
    backgroundColor: Colors.SoftPeach,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: 'hidden',
    marginBottom: hp(-2)
  },
  mainWrapper: {
    width: widthScreen / 1.15,
    alignSelf: "center",
    marginTop: hp(1),
    marginBottom: hp(3),
  },
  removeIcon: {
    alignSelf: "center",
    color: "#CCCCCC"
  },

  cardContainer: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    marginTop: hp(2.5),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  cardContainer1: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    marginTop: hp(1.5),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  timeWrap: {
    backgroundColor: Colors.Cararra,
    borderRadius: 8,
  },
  timeWrapBlack: {
    backgroundColor: Colors.Charade,
    borderRadius: 8,
  },
  timeText: {
    paddingHorizontal: hp(1.5),
    paddingVertical: hp(0.7),
    fontSize: 14,
    fontFamily: "SF-Pro-Semibold",
    color: Colors.StormDust,
  },
  timeTextBlack: {
    paddingHorizontal: hp(1.5),
    paddingVertical: hp(0.7),
    fontSize: 14,
    fontFamily: "SF-Pro-Semibold",
    color: Colors.White,
  },

  dateContainer: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    marginTop: hp(3),
    height: hp(25)
  },

  nextButton: {
    backgroundColor: Colors.Charade,
    width: widthScreen / 1.15,
    alignSelf: "center",
    height: hp(6),
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: hp(2),
    marginTop: hp(5)
  },
  nextText: {
    fontSize: 16,
    color: Colors.SoftPeach,
    fontFamily: "SF-Pro-Regular",
  },

})
export default ChooseTime;