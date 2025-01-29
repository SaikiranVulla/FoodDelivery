import {StyleSheet, Text, View, StatusBar} from 'react-native';
import React from 'react';
import appTheme from '../../constants/theme';
import BottomModal from '../Components/BottomModal';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={appTheme.COLORS.logBackGround}
        barStyle={'light-content'}
        animated={true}
      />
      <View style={styles.subContainer}>
        <Text style={styles.mainTitle}>Log In</Text>
        <Text style={styles.subTitle}>
          Please sign in to your existing account
        </Text>
      </View>
      <View style={styles.modalContainer}>
        <BottomModal>
          <Text>Modal Content</Text>
        </BottomModal>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appTheme.COLORS.logBackGround,
  },
  subContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainTitle: {
    color: appTheme.COLORS.white,
    ...appTheme.FONTS.h1,
  },
  subTitle: {
    color: appTheme.COLORS.white,
    marginTop: 5,
    ...appTheme.FONTS.h3,
  },
  modalContainer: {
    flex: 0.7,
  },
});
