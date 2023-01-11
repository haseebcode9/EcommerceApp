import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../common/CustomHeader';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Settings = props => {
  const navigation = useNavigation();
  return (
    <View>
      <CustomHeader title={'Setting'} navigation={props.navigation} />
      <View
        style={{
          marginTop: 10,
          marginLeft: 5,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <AntDesign name="caretright" size={20} />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Profile');
            }}>
            <Text
              style={{
                padding: 10,
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              View Profile Details
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <AntDesign name="caretright" size={20} />
          <TouchableOpacity>
            <Text style={{padding: 10, fontSize: 16, fontWeight: 'bold'}}>
              Change Your Password
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <AntDesign name="caretright" size={20} />
          <TouchableOpacity>
            <Text style={{padding: 10, fontSize: 16, fontWeight: 'bold'}}>
              Change App Language
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <AntDesign name="caretright" size={20} />
          <TouchableOpacity>
            <Text style={{padding: 10, fontSize: 16, fontWeight: 'bold'}}>
              Need Help ?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Settings;
