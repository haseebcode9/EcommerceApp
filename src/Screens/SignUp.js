import {View, Text, Image, TextInput, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomTextInput from '../common/CustomTextInput';
import CommonButton from '../common/CommonButton';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
let storeUserData = [];
const SignUp = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [badName, setbadName] = useState(false);
  const [number, setNumber] = useState('');
  const [badNumber, setbadNumber] = useState(false);
  const [email, setEmail] = useState('');
  const [badEmail, setbadEmail] = useState(false);
  const [password, setPassword] = useState('');
  const [badPassword, setbadPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [badConfirmPassword, setbadConfirmPassword] = useState(false);

  const storeData = async object => {
    let flag = true;
    try {
      storeUserData = JSON.parse(await AsyncStorage.getItem('userData'));
      console.log(storeUserData, 'if storeUserData');

      if (storeUserData === null) {
        storeUserData = [];
        storeUserData.push(object);
        await AsyncStorage.setItem('userData', JSON.stringify(storeUserData));
        navigation.navigate('Login');
      } else {
        if (storeUserData.length === 0) {
          storeUserData.push(object);
          await AsyncStorage.setItem('userData', JSON.stringify(storeUserData));
          navigation.navigate('Login');
        } else {
          for (let item of storeUserData) {
            if (item.email === object.email) {
              flag = false;
            }
          }
          if (flag) {
            storeUserData.push(object);
            await AsyncStorage.setItem(
              'userData',
              JSON.stringify(storeUserData),
            );
            navigation.navigate('Login');
          } else {
            Alert.alert('Info!', 'Email id already exists.');
          }
        }
      }
    } catch (e) {
      // saving error
      console.log(e);
    }
  };
  const validate = () => {
    if (name == '') {
      setbadName(true);
    } else if (email == '') {
      setbadEmail(true);
    } else if (number == '') {
      setbadNumber(true);
    } else if (password == '') {
      setbadPassword(true);
    } else if (confirmPassword == '') {
      setbadConfirmPassword(true);
    } else if (password !== confirmPassword) {
      setbadConfirmPassword(true);
    } else {
      setbadName(false);
      setbadEmail(false);
      setbadNumber(false);
      setbadPassword(false);
      setbadConfirmPassword(false);
      let object = {
        name: name,
        email: email,
        number: number,
        password: password,
      };

      storeData(object);
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
        Sign Up
      </Text>
      <CustomTextInput
        placeholder={'Enter Name'}
        icon={require('../images/user.png')}
        value={name}
        onChangeText={txt => {
          setName(txt);
        }}
      />
      {badName === true && (
        <Text style={{color: 'red', marginTop: 8, marginLeft: 35}}>
          Please Enter Your Name
        </Text>
      )}
      <CustomTextInput
        placeholder={'Enter Email id'}
        icon={require('../images/email.png')}
        value={email}
        onChangeText={txt => {
          setEmail(txt);
        }}
      />
      {badEmail === true && (
        <Text style={{color: 'red', marginTop: 8, marginLeft: 35}}>
          Please Enter Eamil id
        </Text>
      )}
      <CustomTextInput
        placeholder={'Enter Mobile Number'}
        icon={require('../images/mobile.png')}
        value={number}
        maxLength={10}
        keyboardType={'number-pad'}
        onChangeText={txt => {
          setNumber(txt);
        }}
      />
      {badNumber === true && (
        <Text style={{color: 'red', marginTop: 8, marginLeft: 35}}>
          Please Enter Mobile Number
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
        <Text style={{color: 'red', marginTop: 8, marginLeft: 35}}>
          Please Enter Password
        </Text>
      )}
      <CustomTextInput
        placeholder={'Confirm Password'}
        type={'password'}
        icon={require('../images/password.png')}
        value={confirmPassword}
        onChangeText={txt => {
          setConfirmPassword(txt);
        }}
      />
      {badConfirmPassword === true && (
        <Text style={{color: 'red', marginTop: 8, marginLeft: 35}}>
          Password didn't matched
        </Text>
      )}
      <CommonButton
        title={'Sign Up'}
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
          navigation.goBack();
        }}>
        Allready have an Account?
      </Text>
    </View>
  );
};

export default SignUp;
