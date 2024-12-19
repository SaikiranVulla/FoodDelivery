import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/Navigations/MainStack';

const App = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
