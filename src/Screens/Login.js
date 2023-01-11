import {View, Text, Image, TextInput, Alert} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../common/CustomTextInput';
import CommonButton from '../common/CommonButton';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
let storeUserData = [];
const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [badEmail, setbadEmail] = useState(false);
  const [badPassword, setbadPassword] = useState(false);

  const validate = async () => {
    let flag = false;
    if (email == '') {
      setbadEmail(true);
    } else if (password == '') {
      setbadPassword(true);
    } else {
      setbadEmail(false);
      setbadPassword(false);

      storeUserData = JSON.parse(await AsyncStorage.getItem('userData'));
      console.log(storeUserData, 'storeUserData');
      for (let item of storeUserData) {
        if (item.email === email && item.password === password) {
          flag = true;
        }
      }
      if (flag) {
        navigation.navigate('HomeStack');
      } else {
        Alert.alert('Email Id / Password is incorrect.');
      }
    }
  };

  return (
    <View style={{flex: 1}}>
      <Image
        source={require('../images/playstore.png')}
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          alignSelf: 'center',
          marginTop: 100,
        }}
      />
      <Text
        style={{
          marginTop: 50,
          fontSize: 24,
          fontWeight: '600',
          colour: '#000',
          alignSelf: 'center',
        }}>
        Login
      </Text>
      <CustomTextInput
        placeholder={'Enter Email id'}
        icon={require('../images/email.png')}
        value={email}
        onChangeText={txt => {
          setEmail(txt);
        }}
      />
      {badEmail === true && (
        <Text style={{color: 'red', marginTop: 10, marginLeft: 35}}>
          Please Enter Eamil id
        </Text>
      )}
      <CustomTextInput
        placeholder={'Enter Password'}
        type={'password'}
        icon={require('../images/password.png')}
        value={password}
        onChangeText={txt => {
          setPassword(txt);
        }}
      />
      {badPassword === true && (
        <Text style={{color: 'red', marginTop: 10, marginLeft: 35}}>
          Please Enter Password
        </Text>
      )}
      <CommonButton
        title={'Login'}
        bgColor={'#000'}
        textColor={'#ffff'}
        onPress={validate}
      />
      <Text
        style={{
          fontSize: 20,
          fontWeight: '600',
          alignSelf: 'center',
          marginTop: 20,
          textDecorationLine: 'underline',
        }}
        onPress={() => {
          navigation.navigate('SignUp');
        }}>
        Create new Account?
      </Text>
    </View>
  );
};

export default Login;
