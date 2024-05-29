import React from 'react';
import {
  View,
  Image,
  Platform,
  Text,
  TouchableOpacity
} from 'react-native';

import Images from '../Styles/Images';
import Colors from '../Styles/Colors';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Calender from "../Screens/MainScreens/Calender";
import Meditate from "../Screens/MainScreens/Meditate";
import Therapies from "../Screens/MainScreens/Therapies";


type BottomStackParamList = {
  CalenderTab: undefined,
  MeditateTab: undefined,
  TherapiesTab: undefined,
};
type CalenderStackParamList = {
  Calender: undefined,
};
type MeditateStackParamList = {
  Meditate: undefined,
};
type TherapiesStackParamList = {
  Therapies: undefined,
};



const navigationRef = React.createRef<any>();

export function navigate(name: any, params: any) {
  navigationRef.current?.navigate(name, params);
}

const Tab = createBottomTabNavigator<BottomStackParamList>();
const CalenderStack = createStackNavigator<CalenderStackParamList>();
const MeditateStack = createStackNavigator<MeditateStackParamList>();
const TherapiesStack = createStackNavigator<TherapiesStackParamList>();



export const CalenderStacks = () => {
  return (
    <CalenderStack.Navigator initialRouteName="Calender"
      screenOptions={{
        headerShown: false,
      }}>
      <CalenderStack.Screen name="Calender" component={Calender} />

    </CalenderStack.Navigator>
  );
}

export const MeditateStacks = () => {
  return (
    <MeditateStack.Navigator initialRouteName="Meditate"
      screenOptions={{
        headerShown: false,
      }}>
      <MeditateStack.Screen name="Meditate" component={Meditate} />

    </MeditateStack.Navigator>
  );
}

const TherapiesStacks = () => {
  return (
    <TherapiesStack.Navigator initialRouteName="Therapies"
      screenOptions={{
        headerShown: false,
      }}>
      <TherapiesStack.Screen name="Therapies" component={Therapies} />

    </TherapiesStack.Navigator>
  )
}



export const BottomTabView = (props: any) => {
  // let unreadChatCount = props?.chat?.unreadChatCount?.count ? props?.chat?.unreadChatCount?.count : 0
  let unreadChatCount = 1
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let image;
          let name;

          if (route.name === 'MeditateTab') {
            image = Images.meditate;
            name = "Meditate"
          }
          else if (route.name === 'TherapiesTab') {
            image = Images.mindTools;
            name = "Mind Tools"
          }
          else if (route.name === 'CalenderTab') {
            image = Images.calender;
            name = "Schedule"
          }


          return (
            <>
              <View style={{ alignSelf: 'center', alignItems: 'center', justifyContent: 'center' }}>
                <Image source={image} style={{
                  marginTop: hp(1.5),
                  width: 24,
                  height: 24,
                  tintColor: focused ? Colors.Charade : Colors.StormDust
                }} />
                <Text
                  style={{
                    marginTop: hp(1),
                    fontSize: 12,
                    fontFamily: "SF-Pro-Regular",
                    color: focused ? Colors.Charade : Colors.StormDust
                  }}>{name}</Text>
              </View>
            </>
          );
        },
        tabBarStyle: {
          height: hp(12),
          backgroundColor: Colors.Cararra,
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
          position: 'absolute',
          overflow: 'hidden',
        },
        tabBarShowLabel: false
      })}>

      <Tab.Screen name="MeditateTab" component={MeditateStacks} />
      <Tab.Screen name="TherapiesTab" component={TherapiesStacks} />
      <Tab.Screen name="CalenderTab" component={CalenderStacks} />

    </Tab.Navigator>
  );
}

export default BottomTabView;