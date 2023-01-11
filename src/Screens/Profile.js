import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
const Profile = () => {
  return (
    <View>
      <Text style={{marginTop: 50, alignSelf: 'center'}}>Profile</Text>
      <View>
        <View>
          <Image
            style={{
              width: 100,
              height: 100,
              backgroundColor: 'grey',
              borderRadius: 50,
              alignSelf: 'center',
              marginTop: 40,
            }}
            source={require('../images/animeprofile.png')}
          />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <AntDesign name="caretright" size={20} />
          <TouchableOpacity>
            <Text
              style={{
                padding: 10,
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              Profile Details
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{marginLeft: 10}}>
          <Text style={{padding: 10, fontSize: 15, fontWeight: 'normal'}}>
            MD HASEEBUR RAHMAN
          </Text>
          <Text style={{padding: 10, fontSize: 15, fontWeight: 'normal'}}>
            +919131012793
          </Text>
          <Text style={{padding: 10, fontSize: 15, fontWeight: 'normal'}}>
            haseeb@gmail.com
          </Text>
          <Text
            style={{padding: 10, fontSize: 15, fontWeight: 'normal'}}></Text>
          <Text
            style={{padding: 10, fontSize: 15, fontWeight: 'normal'}}></Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;
