import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const CommonButton = ({onPress, title, bgColor, textColor}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: bgColor,
        alignItems: 'center',
        justifyContent: 'center',
        width: '85%',
        height: 45,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 20,
      }}
      onPress={() => {
        onPress();
      }}>
      <Text style={{color: textColor}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CommonButton;
