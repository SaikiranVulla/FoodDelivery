import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../Container/HomeScreen';
import SearchScreen from '../Container/SearchScreen';
import OnBoardScreen from '../Container/OnBoardScreen';

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="OnBoard"
        component={OnBoardScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Search" component={SearchScreen} />
    </Stack.Navigator>
  );
}
