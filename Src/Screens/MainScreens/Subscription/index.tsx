import React, { useState } from 'react';
import {
  StatusBar,
  View,
  Image,
  Text,
  TouchableOpacity,
  Platform,
  ScrollView,
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

const Subscription = (props: any) => {
  const { navigation } = props;
  const userData = props.route?.params?.user
  const [allAccess, setAllAccess] = useState(false)

  const getAccess = () => {
    if (userData != "Anonymous") {
      setAllAccess(true)
    }
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
              <Text style={Styles.titleText}>{`My Subscriptions`}</Text>
            </View>
          </View>
        </View>
        {/* Header Ends */}
        {
          userData != "Anonymous" ?
            <View style={Styles.upperDataCotainer}>
              <TouchableOpacity style={Styles.showContainer}>
                <View style={Styles.boxContainer}>
                  <View>
                    <Text style={Styles.listTitle}>{`Depression Therapy`}</Text>
                    <Text style={Styles.listDes}>{`Bought till 08/03/2023`}</Text>
                  </View>
                  <Ionic
                    name={"checkmark-circle"}
                    size={24}
                    style={Styles.backIcon} />
                </View>
              </TouchableOpacity>


              <TouchableOpacity style={Styles.showContainer}>
                <View style={Styles.boxContainer}>
                  <View>
                    <Text style={Styles.listTitle}>{`Phobia Therapy`}</Text>
                    <Text style={Styles.listDes}>{`Completed 01/02/2023`}</Text>
                  </View>
                  <Image source={Images.restore} style={Styles.listIcon} />
                </View>
              </TouchableOpacity>

              {
                allAccess == true ?
                  <TouchableOpacity style={Styles.showContainer}>
                    <View style={Styles.boxContainer}>
                      <View>
                        <Text style={Styles.listTitle}>{`Access for everything`}</Text>
                        <Text style={Styles.listDes}>{`Bought till 08/03/2023`}</Text>
                      </View>
                      <Ionic
                        name={"checkmark-circle"}
                        size={24}
                        style={Styles.backIcon} />
                    </View>
                  </TouchableOpacity> : null
              }
            </View>
            : null
        }
        {
          allAccess == true ? null :
            <View style={userData != "Anonymous" ? Styles.dataContentWrap : Styles.mainDataCotainer}>
              <View style={Styles.dataWrapper}>
                <Text style={Styles.description}>{`This subscription will get you full and unlimited access to our sincerest attempt to bring you wellbeing, without the nonsense.`}</Text>
                <Text style={Styles.description}>{`NoGuru - You have what it takes.`}</Text>
                <Text style={Styles.descriptionBold}>{`Access to all therapies`}</Text>
                <Text style={Styles.descriptionBold}>{`Unlimited live chat`}</Text>
              </View>
            </View>
        }
        {
          allAccess == true ? null :
            <View style={Styles.bottomContainer}>
              <TouchableOpacity onPress={getAccess}>
                <ImageBackground source={Images.button} style={Styles.bottomButton}>
                  <View style={Styles.buttonInner}>
                    <Text style={Styles.buttonTitle}>{`Buy 1-year access to everything`}</Text>
                    <Text style={Styles.priceTitle}>{`$58`}</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            </View>
        }

      </View>
    </SafeAreaView>
  );
}

export default Subscription;
