import React, { useRef, useState } from 'react';
import { View, Image, Text, TouchableOpacity, SafeAreaView, ImageBackground, Dimensions } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import {
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import Ionic from 'react-native-vector-icons/Ionicons';
import Styles from './Styles';

const heightScreen = Dimensions.get('window').height;


const slides = [
  {
    key: 1,
    pic: Images.gallery,
    title: "Meditation",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
  },
  {
    key: 2,
    pic: Images.gallery,
    title: "Therapy",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
  },
  {
    key: 3,
    pic: Images.gallery,
    title: "Mantras",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
  },
];


export default function Onboarding(props: any) {
  let slider: any = useRef()
  const [engine, setEngine] = useState(3);
  const [speed, setSpeed] = useState(110);

  const [showRealApp, setRealApp] = useState(false);
  const [next, setNext] = useState(0);


  const _renderItem = ({ item }: any) => {
    return (


      <View style={Styles.safeAreaContainer}>

        <View style={Styles.upperContainer}>
          <View style={Styles.mainContainer}>
            
            <TouchableOpacity onPress={() => { props.navigation.navigate("AnonymousUser") }}>
              <Text style={Styles.skipTitle}>{`Skip`}</Text>
            </TouchableOpacity>
            <Image source={Images.gallery} style={Styles.centerImage} />

          </View>
        </View>


        <View style={Styles.bottomContainer}>
          <View style={Styles.mainContainer}>
            <Text style={Styles.welcomeTitle}>{item?.title}</Text>
            <Text style={Styles.listDescription}>{item?.description}</Text>
          </View>
        </View>

        <View style={Styles.socialContainer}>
          <View style={Styles.socialInnerWrap}>
            <TouchableOpacity onPress={() => { props.navigation.navigate("SignIn") }}>
              <Text style={Styles.socialTitle}>{`Sign Up / Sign In`}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={Styles.socialIconContainer}>
          <View style={Styles.socialIconWrapper}>
            <TouchableOpacity>
              <Image source={Images.google} style={Styles.iconSocial} />
            </TouchableOpacity>
            <View style={Styles.line} />
            <TouchableOpacity>
              <Image source={Images.apple} style={Styles.iconSocial} />
            </TouchableOpacity>
            <View style={Styles.line} />
            <TouchableOpacity>
              <Image source={Images.facebook} style={Styles.iconSocial} />
            </TouchableOpacity>
          </View>
        </View>


        <TouchableOpacity onPress={() => { props.navigation.navigate("LoginEmail") }}
          style={Styles.nextButton}>
          <Ionic
            name={"mail"}
            size={20}
            style={Styles.mailIcon} />
          <Text style={Styles.nextText}>{`Continue with email`}</Text>
        </TouchableOpacity>

      </View>

    );
  };
  const goNext = () => {
    setNext(next + 1)
    slider?.goToSlide(next + 1, true);
  };

  const _renderPagination = (activeIndex: number) => {
    return (
      <View style={Styles.paginationContainer}>
        <View style={Styles.paginationDots}>
          {slides.length > 1 &&
            slides.map((_, i) => (
              <TouchableOpacity
                key={i}
                style={[
                  Styles.dot,
                  i === activeIndex
                    ? { backgroundColor: Colors.Charade, width: 56, height: 4, borderRadius: 8 }
                    : { backgroundColor: Colors.Grey, width: 24, height: 4, borderRadius: 8 },
                ]}
                onPress={() => slider?.goToSlide(i, true)}
              />
            ))}
        </View>
      </View>
    );
  };

  const changeSlide = (e: any) => {
    setNext(e)
  };

  return (
    <SafeAreaView style={Styles.backgroundContainer}>
      <AppIntroSlider
        ref={(ref) => (slider = ref)}
        onSlideChange={(e) => changeSlide(e)}
        renderItem={_renderItem}
        renderPagination={_renderPagination}
        data={slides}
        bottomButton={true}
        dotClickEnabled={true}
      />
    </SafeAreaView>

  );
}
