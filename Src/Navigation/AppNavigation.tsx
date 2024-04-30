
import React from 'react';
import { Platform } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { enableScreens } from 'react-native-screens';

import BottomTabView from "./BottomNavigation";

import AnimatedRing from "../Screens/SplashFirst";
import Splash from '../Screens/Splash';
import Onboarding from "../Screens/Onboarding";
import LoginEmail from "../Screens/AuthScreens/LoginEmail";
import SignUp from "../Screens/AuthScreens/SignUp";
import SignIn from "../Screens/AuthScreens/SignIn";
import ForgotPassword from "../Screens/AuthScreens/ForgotPassword";
import AnonymousUser from '../Screens/MainScreens/AnonymousUser';
import UserAccount from '../Screens/MainScreens/UserAccount';
import Subscription from '../Screens/MainScreens/Subscription';
import EditProfile from '../Screens/MainScreens/EditProfile';
import ChangePassword from '../Screens/AuthScreens/ChangePassword';
import About from '../Screens/MainScreens/About';
import RequestTool from '../Screens/MainScreens/RequestTool';
import TherapyDetails from '../Screens/MainScreens/TherapyDetails';
import TherapyReview from '../Screens/MainScreens/TherapyReview';
import LeaveFeedback from '../Screens/MainScreens/LeaveFeedback';
import ReviewComplete from '../Screens/MainScreens/ReviewComplete';

// Therepy Details Start
import TherapyDetailStart from '../Screens/MainScreens/TherapyDetailStart';
import NextSlideFirst from '../Screens/MainScreens/TherapyDetailStart/NextSlideFirst';
import NextSlideSecond from '../Screens/MainScreens/TherapyDetailStart/NextSlideSecond';
import BreakState from '../Screens/MainScreens/TherapyDetailStart/BreakState';
import MultiChoice from '../Screens/MainScreens/TherapyDetailStart/MultiChoice';
import Range from '../Screens/MainScreens/TherapyDetailStart/Range';
import RemainderOffer from '../Screens/MainScreens/TherapyDetailStart/RemainderOffer';
import VolumeAdjust from '../Screens/MainScreens/TherapyDetailStart/VolumeAdjust';
import EndTherapy from '../Screens/MainScreens/TherapyDetailStart/EndTherapy';
import NewReminder from '../Screens/MainScreens/NewReminder';
// Therepy Details End

// Schedule
import ScheduleRemainder from '../Screens/MainScreens/ScheduleRemainder';
import ChooseMeditation from '../Screens/MainScreens/ChooseMeditation';

type RootStackParamList = {
  AnimatedRing: undefined,
  Splash: undefined,
  Onboarding: undefined,
  LoginEmail: undefined,
  SignUp: undefined,
  SignIn: undefined,
  ForgotPassword: undefined,
  AnonymousUser: undefined,
  BottomTabView: undefined,
  UserAccount: undefined,
  Subscription: undefined,
  EditProfile: undefined,
  ChangePassword: undefined,
  About: undefined,
  RequestTool: undefined,
  TherapyDetails: undefined,
  TherapyReview: undefined,
  LeaveFeedback: undefined,
  ReviewComplete: undefined,
  TherapyDetailStart: undefined,
  NextSlideFirst: undefined,
  NextSlideSecond: undefined,
  BreakState: undefined,
  MultiChoice: undefined,
  Range: undefined,
  RemainderOffer: undefined,
  VolumeAdjust: undefined,
  EndTherapy: undefined,
  NewReminder: undefined,

  ScheduleRemainder: undefined,
  ChooseMeditation: undefined,
};

// type AuthStackParamList = {
//   Login: { value: string } | undefined,
// };


enableScreens();


const RootStack = createStackNavigator<RootStackParamList>();


export const THEME_COLOR = '#0AAF60';

export const setNavigator = (nav: any) => {
  const navigator = nav;
};

export default function RootNavigator() {
  return (

    <NavigationContainer>
      <RootStack.Navigator initialRouteName="AnimatedRing"
        screenOptions={{
          headerShown: false,
        }}>
        <RootStack.Screen name='AnimatedRing' component={AnimatedRing} options={{ headerShown: false }} />
        <RootStack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
        <RootStack.Screen name='Onboarding' component={Onboarding} options={{ headerShown: false }} />

        <RootStack.Screen name='LoginEmail' component={LoginEmail} options={{ headerShown: false }} />
        <RootStack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
        <RootStack.Screen name='SignIn' component={SignIn} options={{ headerShown: false }} />
        <RootStack.Screen name='ForgotPassword' component={ForgotPassword} options={{ headerShown: false }} />

        <RootStack.Screen name='AnonymousUser' component={AnonymousUser} options={{ headerShown: false }} />
        <RootStack.Screen name='BottomTabView' component={BottomTabView} options={{ headerShown: false }} />

        <RootStack.Screen name='UserAccount' component={UserAccount} options={{ headerShown: false }} />
        <RootStack.Screen name='Subscription' component={Subscription} options={{ headerShown: false }} />

        <RootStack.Screen name='EditProfile' component={EditProfile} options={{ headerShown: false }} />
        <RootStack.Screen name='ChangePassword' component={ChangePassword} options={{ headerShown: false }} />
        <RootStack.Screen name='About' component={About} options={{ headerShown: false }} />

        <RootStack.Screen name='RequestTool' component={RequestTool} options={{ headerShown: false }} />

        <RootStack.Screen name='TherapyDetails' component={TherapyDetails} options={{ headerShown: false }} />
        <RootStack.Screen name='TherapyReview' component={TherapyReview} options={{ headerShown: false }} />
        <RootStack.Screen name='LeaveFeedback' component={LeaveFeedback} options={{ headerShown: false }} />

        <RootStack.Screen name='ReviewComplete' component={ReviewComplete} options={{ headerShown: false }} />

        <RootStack.Screen name='TherapyDetailStart' component={TherapyDetailStart} options={{ headerShown: false }} />
        <RootStack.Screen name='NextSlideFirst' component={NextSlideFirst} options={{ headerShown: false }} />
        <RootStack.Screen name='NextSlideSecond' component={NextSlideSecond} options={{ headerShown: false }} />
        <RootStack.Screen name='BreakState' component={BreakState} options={{ headerShown: false }} />
        <RootStack.Screen name='MultiChoice' component={MultiChoice} options={{ headerShown: false }} />
        <RootStack.Screen name='Range' component={Range} options={{ headerShown: false }} />
        <RootStack.Screen name='RemainderOffer' component={RemainderOffer} options={{ headerShown: false }} />
        <RootStack.Screen name='VolumeAdjust' component={VolumeAdjust} options={{ headerShown: false }} />
        <RootStack.Screen name='EndTherapy' component={EndTherapy} options={{ headerShown: false }} />
        <RootStack.Screen name='NewReminder' component={NewReminder} options={{ headerShown: false }} />

        <RootStack.Screen name='ScheduleRemainder' component={ScheduleRemainder} options={{ headerShown: false }} />
        <RootStack.Screen name='ChooseMeditation' component={ChooseMeditation} options={{ headerShown: false }} />

        {/*  */}
      </RootStack.Navigator>
    </NavigationContainer>

  );
}

