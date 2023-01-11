import {View, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      storeData();
    }, 5000);
  }, []);

  const storeData = async () => {
    const email = await AsyncStorage.getItem('EMAIL');
    if (email !== '' || email !== null || email !== undefined) {
      navigation.navigate('HomeStack');
    } else {
      navigation.navigate('Login');
    }
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={require('../images/playstore.png')}
        style={{width: 150, height: 150, borderRadius: 100}}
      />
    </View>
  );
};

export default Splash;
