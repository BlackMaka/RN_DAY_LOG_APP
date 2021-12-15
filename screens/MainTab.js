import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import CalendarScreen from './CalendarScreen';
import FeedsScreen from './FeedsScreen';
import SearchScreen from './SearchScreen';

//BottomTab
const {Navigator, Screen} = createBottomTabNavigator();
export default function MainTab() {
  return (
    <Navigator>
      <Screen name="Feeds" component={FeedsScreen} />
      <Screen name="Calendars" component={CalendarScreen} />
      <Screen name="Search" component={SearchScreen} />
    </Navigator>
  );
}
