import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import LottieView from 'lottie-react-native';
import {setItem} from '../Utils/AsyncStorage';

const {width, height} = Dimensions.get('window');

const OnBoardScreen = ({navigation}) => {
  const onDone = () => {
    navigation.navigate('Home');
    setItem('isOnBoard', '1');
  };

  const Title = ({title}) => <Text style={styles.title}>{title}</Text>;

  const Subtitle = ({subtitle}) => (
    <Text style={styles.subtitle}>{subtitle}</Text>
  );

  const Dots = ({selected}) => {
    let backgroundColor;
    backgroundColor = selected ? 'orange' : 'rgba(0, 0, 0, 0.3)';
    return (
      <View
        style={{
          width: 8,
          height: 8,
          marginHorizontal: 3,
          backgroundColor,
          borderRadius: 5,
        }}
      />
    );
  };

  const doneButton = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={{padding: 20}}
        onPress={onDone}>
        <Text style={styles.doneButton}>Done</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Onboarding
      onDone={onDone}
      onSkip={onDone}
      DotComponent={Dots}
      DoneButtonComponent={doneButton}
      bottomBarHighlight={false}
      bottomBarHeight={80}
      bottomBarStyle={styles.bottomBar}
      pages={[
        {
          backgroundColor: '#a7f3d0',
          image: (
            <LottieView
              source={require('../../assets/animations/onBoarding2.json')}
              autoPlay
              loop
              style={styles.image}
              resizeMode="cover"
            />
          ),
          title: <Title title={'All Your Favourites'} />,
          subtitle: (
            <Subtitle
              subtitle={
                "Get all your favourite's in one place,You just place the order and we will deliver it to you."
              }
            />
          ),
        },
        {
          backgroundColor: '#fef3c7',
          image: (
            <LottieView
              source={require('../../assets/animations/onBoarding3.json')}
              autoPlay
              loop
              style={styles.image}
              resizeMode="cover"
            />
          ),
          title: <Title title={'Order From Choosen Chef'} />,
          subtitle: (
            <Subtitle
              subtitle={'Order your favourite food from your choosen chef.'}
            />
          ),
        },
        {
          backgroundColor: '#daf7a6',
          image: (
            <LottieView
              source={require('../../assets/animations/onBoarding1.json')}
              autoPlay
              loop
              style={styles.image}
              resizeMode="cover"
            />
          ),
          title: <Title title={'Free Delivery Offer'} />,
          subtitle: (
            <Subtitle
              subtitle={
                'Get free delivery on your first order, What are waiting for LET DO IT'
              }
            />
          ),
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: width * 0.9,
    height: width,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Poppins Bold',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
  },
  bottomBar: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  doneButton: {
    fontFamily: 'Poppins-SemiBold',
  },
});

export default OnBoardScreen;
