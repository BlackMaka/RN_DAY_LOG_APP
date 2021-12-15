import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MainTab from './MainTab';
import WhiteScreen from './WhiteScreen';

//Stack
const {Navigator, Screen} = createNativeStackNavigator();
export default function RootSrack() {
  return (
    <Navigator>
      <Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}
      />
      <Screen name="Write" component={WhiteScreen} />
    </Navigator>
  );
}
