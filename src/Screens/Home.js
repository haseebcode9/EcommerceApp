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
    <>
      <CustomHeader title={'Home'} navigation={props.navigation} />
      <View style={{flex: 1, backgroundColor: '#ccccc'}}>
        <ScrollView contentContainerStyle={{margin: 10}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('HeadphonesScreen');
            }}>
            <Image
              style={{
                width: '100%',
                height: 290,
              }}
              source={require('../ProductImages/NewArival.webp')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ShoesScreen');
            }}>
            <Image
              style={{
                width: '100%',
                height: 250,
                marginTop: 10,
              }}
              source={require('../ProductImages/Shoes1.jpg')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ClothsScreen');
            }}>
            <Image
              style={{
                width: '100%',
                height: 250,
                marginTop: 10,
              }}
              source={require('../ProductImages/Shoes2.png')}
            />
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
};
// const styles = StyleSheet.create({
//   Images: {

//   }
// });

export default Home;
