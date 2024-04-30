import React, { useState } from 'react';
import {
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView
} from 'react-native';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import Ionic from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import CombatPTSD from '../../../Components/CombatPTSD';
import Depression from "../../../Components/Depression";
import Styles from './Styles';
import Payment from '../../../Components/Payment';
import Loader from '../../../Components/CircularProgress';
import CircleComplete from '../../../Components/CircleComplete';

export type Props = {
  navigation: any;
};

const TherapyDetails = (props: any) => {
  const { navigation } = props;
  const data = props.route?.params?.therepyName

  const [openPay, setOpenPay] = useState(false)
  const [loadingBuy, setLoadingBuy] = useState(false)
  const [loadingDone, setLoadingDone] = useState(false)


  const getAccess = () => {

  }
  const getAccessTherapy = () => {

  }

  const closePay = () => {
    setOpenPay(false)
  }

  const confirmPay = () => {
    setOpenPay(false)
    loaderAccess()
  }

  const loaderAccess = () => {
    setLoadingBuy(true)
    const timer = setTimeout(() => {
      setLoadingBuy(false)
      doneAccess()
    }, 5000);
    return () => clearTimeout(timer);
  }

  const doneAccess = () => {
    setLoadingDone(true)
    const timer = setTimeout(() => {
      setLoadingDone(false)
    }, 3000);
    return () => clearTimeout(timer);
  }

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
              <Text style={Styles.titleText}>{`${data}`}</Text>
            </View>
          </View>
        </View>
        {/* Header Ends */}

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={Styles.scrollContent}>
            {
              data == "Combat PTSD" ?
                <CombatPTSD navigation={navigation} />
                :
                data == "Depression" ?
                  <Depression navigation={navigation} />
                  : null
            }
          </View>
        </ScrollView>
        {
          data == "Combat PTSD" &&
          <TouchableOpacity onPress={getAccessTherapy}>
            <ImageBackground source={Images.buttonWhite} style={Styles.bottomButton}>
              <View style={Styles.buttonInner}>
                <Text style={Styles.buttonUpTitle}>{`Buy 1-year access to this therapy`}</Text>
                <Text style={Styles.priceUpTitle}>{`$58`}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        }
        {
          data == "Combat PTSD" &&
          <TouchableOpacity onPress={getAccess}>
            <ImageBackground source={Images.button} style={Styles.bottomButtonSecond}>
              <View style={Styles.buttonInner}>
                <Text style={Styles.buttonTitle}>{`Buy 1-year access to everything`}</Text>
                <Text style={Styles.priceTitle}>{`$58`}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        }
        {
          data == "Depression" &&
          <TouchableOpacity onPress={() => { setOpenPay(true) }}>
            <ImageBackground source={Images.buttonWhite} style={Styles.bottomButton}>
              <View style={Styles.buttonInner}>
                <Text style={Styles.buttonUpTitle}>{`Buy 1-year access to everything`}</Text>
                <Text style={Styles.priceUpTitle}>{`$58`}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        }
        {
          data == "Depression" &&
          <TouchableOpacity onPress={() => { navigation.navigate("TherapyDetailStart") }}
            style={Styles.nextButton}>
            <Text style={Styles.nextText}>{`Start`}</Text>
          </TouchableOpacity>
        }
        {
          openPay == true ?
            <Payment open={openPay} close={closePay} confirm={confirmPay} />
            : null
        }
        {loadingBuy ? <Loader /> : null}
        {loadingDone ? <CircleComplete /> : null}
      </View>
    </SafeAreaView>
  );
}

export default TherapyDetails;
