import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import CustomHeader from '../common/CustomHeader';
// import {useSelector, useDispatch} from 'react-redux';

const Home = props => {
  const navigation = useNavigation();
  // const product = useSelector(state => state.product);

  // console.log(product.myProductList, 'product');

  return (
    <View>
      <CustomHeader title={'Home'} navigation={props.navigation} />
      <View style={{paddingLeft: 5, flexDirection: 'row', marginBottom: 10}}>
        <TextInput
          placeholder="Search"
          style={{
            alignItems: 'center',
            marginTop: 5,
            padding: 5,
            paddingLeft: 16,
            borderWidth: 0.5,
            borderRadius: 15,
            height: 32,
            width: '80%',
            fontWeight: 'bold',
          }}
        />
        <TouchableOpacity>
          <Text
            style={{
              height: 32,
              width: '90%',
              alignItems: 'center',
              marginTop: 5,
              marginLeft: 10,
              padding: 5,
              borderWidth: 0.5,
              borderRadius: 15,
            }}>
            Search
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={{flexDirection: 'column'}}>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('HeadphonesScreen');
              }}>
              <Image
                style={{
                  width: '95%',
                  height: 290,
                  alignSelf: 'center',
                }}
                source={require('../ProductImages/NewArival.webp')}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ShoesScreen');
              }}>
              <Image
                style={{
                  width: '95%',
                  height: 250,
                  alignSelf: 'center',
                  marginTop: 10,
                }}
                source={require('../ProductImages/Shoes1.jpg')}
              />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('ClothsScreen');
              }}>
              <Image
                style={{
                  width: '95%',
                  height: 250,
                  alignSelf: 'center',
                  marginTop: 10,
                }}
                source={require('../ProductImages/Shoes2.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
// const styles = StyleSheet.create({
//   Images: {

//   }
// });

export default Home;
