
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
  ReviewComplete: undefined
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

        {/* ReviewComplete */}
      </RootStack.Navigator>
    </NavigationContainer>

  );
}

