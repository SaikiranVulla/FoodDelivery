import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';
import {removeItem} from '../Utils/AsyncStorage';
import auth from '@react-native-firebase/auth';

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
      <Text style={styles.normalText}>HomeScreen</Text>
      <Button title="ONPress" onPress={() => signUp()} />
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
