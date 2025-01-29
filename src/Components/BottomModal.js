import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import appTheme from '../../constants/theme';

const BottomModal = ({children}) => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheet
        snapPoints={['80%', '100%']}
        backgroundStyle={styles.modalView}>
        <BottomSheetView style={styles.subContainer}>
          {children}
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default BottomModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appTheme.COLORS.logBackGround,
  },
  subContainer: {
    flex: 1,
    padding: 12,
  },
  modalView: {
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
    backgroundColor: appTheme.COLORS.lightGray2,
  },
});
