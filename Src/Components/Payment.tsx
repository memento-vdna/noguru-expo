import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions, View, Image } from 'react-native';
import Colors from "../Styles/Colors";
import Images from "../Styles/Images";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import Modal from 'react-native-modal';
import Ionic from 'react-native-vector-icons/Ionicons';


const widthScreen = Dimensions.get('window').width;


const Payment = (props: any) => {
  const { confirm, open, close } = props

  return (
    <Modal animationInTiming={300}
      animationOutTiming={200}
      animationIn="slideInUp"
      animationOut="slideInUp"
      backdropOpacity={0.5}
      avoidKeyboard={true}
      isVisible={open}
      onBackdropPress={() => { close() }}
      style={{ flex: 1, justifyContent: 'flex-end' }}>
      <View style={Styles.modalContainer}>
        <View style={Styles.cardContainer1}>
          <Image source={Images.applePay} style={Styles.payIcon} />
          <TouchableOpacity onPress={confirm}>
            <Ionic
              name={"close-circle"}
              size={32}
              style={Styles.closeIcon} />
          </TouchableOpacity>
        </View>

        {/* Payment Card */}
        <TouchableOpacity
          style={Styles.cardContainer}>
          <View style={Styles.boxContainer}>
            <View style={Styles.leftWrapper}>
              <Image source={Images.card} style={Styles.listIcon} />
              <View style={Styles.seperateWrapper}>
                <Text style={Styles.listTitle}>{`Apple Card`}</Text>
                <Text style={Styles.cardNo}>{`**** 1234`}</Text>
                <Text style={Styles.cardDes}>{`27, Fredrick Buttle Rd, Brothers OR 97712`}</Text>
              </View>
            </View>
            <Ionic
              name={"chevron-forward"}
              size={20}
              style={Styles.backIcon} />
          </View>
        </TouchableOpacity>

        {/* Contact */}
        <TouchableOpacity
          style={Styles.cardContainer}>
          <View style={Styles.boxContainer}>
            <View style={Styles.leftWrapper}>
              <Image source={Images.person} style={Styles.listIcon} />
              <View style={Styles.seperateWrapper}>
                <Text style={Styles.contactNo}>{`Contact`}</Text>
                <Text style={Styles.infoTitle}>{`j.appleseed@icloud.com`}</Text>
                <Text style={Styles.infoTitle}>{`(458) 555-2863`}</Text>
              </View>
            </View>
            <Ionic
              name={"chevron-forward"}
              size={20}
              style={Styles.backIcon} />
          </View>
        </TouchableOpacity>

        {/* Ship To */}
        <TouchableOpacity
          style={Styles.cardContainer}>
          <View style={Styles.boxContainer}>
            <View style={Styles.leftWrapper}>
              <Image source={Images.person} style={Styles.listIcon} />
              <View style={Styles.seperateWrapper}>
                <Text style={Styles.contactNo}>{`Ship To`}</Text>
                <Text style={Styles.infoTitle}>{`John AppleSeed`}</Text>
                <Text style={Styles.infoTitle}>{`27, Fredrick Buttle Rd, Brothers OR 97712`}</Text>
              </View>
            </View>
            <Ionic
              name={"chevron-forward"}
              size={20}
              style={Styles.backIcon} />
          </View>
        </TouchableOpacity>

        <View style={Styles.cardBottom}>
          <View style={Styles.bottomInner}>

            <View style={Styles.boxContainer}>
              <View>
                <Text style={Styles.contactNo}>{`Pay NoGuru`}</Text>
                <Text style={Styles.payTitle}>{`$15.00`}</Text>
              </View>
              <Ionic
                name={"chevron-forward"}
                size={24}
                style={Styles.backIcon} />
            </View>

            <View style={Styles.line} />

          </View>
        </View>

      </View>
    </Modal>
  )
}

const Styles = StyleSheet.create({

  dataWrapper: {
    marginTop: hp(3)
  },
  modalContainer: {
    width: widthScreen,
    alignSelf: 'center',
    backgroundColor: Colors.Grey,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: 'hidden',
    marginBottom: hp(-2)
  },
  cardContainer1: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    marginTop: hp(2.5),
    marginBottom: hp(3),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  cardContainer: {
    width: widthScreen / 1.18,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 16,
    backgroundColor: Colors.SoftPeach,
    borderColor: Colors.Grey,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp(2),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,

    elevation: 1,
  },
  closeIcon: {
    color: Colors.StormDust
  },
  payIcon: {
    width: 70,
    height: 30
  },
  boxContainer: {
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: hp(1.5),
    marginBottom: hp(1.5)
  },
  line: {
    width: "100%",
    alignSelf: "center",
    height: hp(0.1),
    backgroundColor: Colors.Grey
  },
  leftWrapper: {
    flexDirection: "row",
  },
  listIcon: {
    width: 35,
    height: 35,
    borderRadius: 8,
  },
  listTitle: {
    fontSize: 12,
    fontFamily: "SF-Pro-Medium",
    color: Colors.Charade,
  },
  backIcon: {
    color: Colors.Charade,
  },
  seperateWrapper: {
    width: '80%',
    marginLeft: hp(1),
  },
  cardNo: {
    fontSize: 11,
    fontFamily: "SF-Pro-Regular",
    color: Colors.StormDust,
    lineHeight: 20
  },
  contactNo: {
    fontSize: 12,
    fontFamily: "SF-Pro-Regular",
    color: Colors.StormDust,
  },
  cardDes: {
    fontSize: 11,
    fontFamily: "SF-Pro-Regular",
    color: Colors.StormDust,
  },
  infoTitle: {
    fontSize: 12,
    fontFamily: "SF-Pro-Regular",
    color: Colors.Charade,
    lineHeight: 18
  },
  cardBottom: {
    width: widthScreen,
    alignSelf: 'center',
    backgroundColor: Colors.SoftPeach,
  },
  bottomInner: {
    marginBottom: hp(8)
  },
  payTitle:{
    fontSize: 20,
    fontFamily: "SF-Pro-Semibold",
    color: Colors.Charade,
    lineHeight: 26
  }
})
export default Payment;