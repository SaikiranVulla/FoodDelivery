import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import {View, Text, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

const OnBoardScreen = ({navigation}) => {
  const onDone = () => {
    navigation.navigate('Home');
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

  return (
    <Onboarding
      onDone={onDone}
      DotComponent={Dots}
      bottomBarHighlight={false}
      bottomBarHeight={80}
      bottomBarStyle={styles.bottomBar}
      pages={[
        {
          backgroundColor: '#fff',
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
          backgroundColor: '#fff',
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
          backgroundColor: '#fff',
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
    width: 400,
    height: 200,
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
});

export default OnBoardScreen;
