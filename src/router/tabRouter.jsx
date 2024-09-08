import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Characters from '../screens/characters';
import Episodes from '../screens/episodes';
import Locations from '../screens/locations';
import Colors from '../theme/colors';
import {tabBarStyle} from '../styles/tabBarStyle';
import {
  CHARACTERDETAIL,
  CHARACTERS,
  EPISODES,
  LOCATIONS,
} from '../utils/routes';
import TabIcon from '../components/router/tabIcon';
import CharacterDetail from '../screens/characters/characterDetail';
import HeaderRight from '../components/router/headerRight';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          <TabIcon
            screenName={route.name}
            size={size}
            color={color}
            focused={focused}
          />;
        },
        headerStyle: tabBarStyle.headerStyle,
        tabBarStyle: tabBarStyle.tabBarStyle,
        tabBarActiveTintColor: Colors.BLACK,
        headerRight: props => <HeaderRight />,
      })}>
      <Tab.Screen name={CHARACTERS} component={Characters} />
      <Tab.Screen name={EPISODES} component={Episodes} />
      <Tab.Screen name={LOCATIONS} component={Locations} />
      <Tab.Screen name={CHARACTERDETAIL} component={CharacterDetail} />
    </Tab.Navigator>
  );
}
