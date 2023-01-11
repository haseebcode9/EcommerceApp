import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Profile from './Screens/Profile';
import Settings from './Screens/Settings';
import MyTabs from './BottomTab';
import MyCart from './Screens/MyCart';

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Drawer.Screen name="EcommerceApp" component={MyTabs} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="My Cart" component={MyCart} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
