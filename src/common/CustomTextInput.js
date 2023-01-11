import {View, Text, Image, TextInput} from 'react-native';
import React from 'react';

const CustomTextInput = ({
  value,
  onChangeText,
  placeholder,
  type,
  keyboardType,
  icon,
  maxLength,
}) => {
  return (
    <View
      style={{
        width: '85%',
        height: 45,
        borderWidth: 0.5,
        borderRadius: 10,
        marginTop: 30,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
      }}>
      <Image source={icon} style={{width: 24, height: 24}} />
      <TextInput
        value={value}
        keyboardType={keyboardType ? keyboardType : 'default'}
        onChangeText={txt => {
          onChangeText(txt);
        }}
        placeholder={placeholder}
        secureTextEntry={type ? true : false}
        style={{marginLeft: 10}}
        maxLength={maxLength}
      />
    </View>
  );
};

export default CustomTextInput;
