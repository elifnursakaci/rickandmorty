import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './tabRouter';
import {
  CHARACTERDETAIL,
  CHARACTERS,
  FILTERCHARACTERS,
  SEARCHCHARACTERS,
  TABNAVIGATOR,
} from '../utils/routes';
import CharacterDetail from '../screens/characters/characterDetail';
import FilterCharacters from '../screens/characters/filterCharacters';
import SearchCharacters from '../screens/characters/searchCharacters';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={TABNAVIGATOR} component={TabNavigator} />
      <Stack.Screen name={CHARACTERDETAIL} component={CharacterDetail} />
      <Stack.Screen name={FILTERCHARACTERS} component={FilterCharacters} />
      <Stack.Screen name={SEARCHCHARACTERS} component={SearchCharacters} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
