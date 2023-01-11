import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Splash from './Screens/Splash';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import ShoesScreen from './Screens/ShoesScreen';
import HeadphonesScreen from './Screens/HeadphonesScreen';
import ClothsScreen from './Screens/ClothsScreen';
import DrawerNavigation from './DrawerNavigation';
import MyCart from './Screens/MyCart';

const Stack = createStackNavigator();

const Appnavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="HomeStack" component={DrawerNavigation} />
        <Stack.Screen name="HeadphonesScreen" component={HeadphonesScreen} />
        <Stack.Screen name="My Cart" component={MyCart} />
        <Stack.Screen name="ShoesScreen" component={ShoesScreen} />
        <Stack.Screen name="ClothsScreen" component={ClothsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Appnavigator;
