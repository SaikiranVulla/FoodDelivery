import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {removeItem} from '../Utils/AsyncStorage';
import auth from '@react-native-firebase/auth';
import ICON from 'react-native-vector-icons/AntDesign';

const HomeScreen = () => {
  const signUp = () => {
    auth()
      .createUserWithEmailAndPassword('test@example.com', 'superSceretPassword')
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  return (
    <View>
      <Text>HomeScreen</Text>
      <ICON name="stepforward" size={30} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  normalText: {
    fontSize: 20,
    fontFamily: 'Poppins-Medium',
  },
});
