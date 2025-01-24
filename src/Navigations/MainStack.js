import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Container/HomeScreen';
import SearchScreen from '../Container/SearchScreen';
import OnBoardScreen from '../Container/OnBoardScreen';
import React, {useState, useEffect} from 'react';
import {getItem} from '../Utils/AsyncStorage';

const Stack = createNativeStackNavigator();

export default function MainStack() {
  const [isOnBoardScreen, setIsOnBoardScreen] = useState(null);
  useEffect(() => {
    getItem('isOnBoard').then(value => {
      console.log(value);
      if (value == 1) {
        setIsOnBoardScreen(true);
      } else {
        setIsOnBoardScreen(false);
      }
    });
  }, []);

  if (isOnBoardScreen == null) {
    return null;
  }

  if (isOnBoardScreen) {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator initialRouteName="OnBoard">
        <Stack.Screen
          name="OnBoard"
          component={OnBoardScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Navigator>
    );
  }
}
