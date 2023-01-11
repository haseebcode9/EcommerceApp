import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import React from 'react';
import CustomHeader from '../common/CustomHeader';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  addProductToMyCart,
  deleteMyCartItem,
  removeMyCartItem,
} from '../Redux/MyCartSlice';
import {decreaseQty, increaseQty} from '../Redux/MyProductSlice';

const MyCart = props => {
  const navigation = useNavigation();
  const myCartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1}}>
      <View>
        <CustomHeader title={'My Cart'} navigation={props.navigation} />
        <FlatList
          data={myCartItems}
          showsVerticalScrollIndicator={false}
          keyExtractor={(key, index) => {
            return index.toString();
          }}
          renderItem={({item}) => {
            return (
              <View
                style={{
                  width: '94%',
                  height: 140,
                  alignSelf: 'center',
                  backgroundColor: '#fff',
                  marginTop: 10,
                  borderRadius: 10,
                  elevation: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 10,
                }}>
                <Image
                  resizeMode="contain"
                  style={{
                    width: 110,
                    height: 130,
                    borderRadius: 10,
                  }}
                  source={item.productImage}
                />
                <View style={{padding: 5}}>
                  <Text
                    style={{fontSize: 16, fontWeight: '600', color: '#000'}}>
                    {item.productName.substring(0, 20) + '...'}
                  </Text>
                  <Text style={{fontWeight: '400'}}>{item.brand}</Text>
                  <Text
                    style={{color: 'green', fontSize: 16, fontWeight: '600'}}>
                    {'₹' + item.productPrice}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 10,
                    }}>
                    {item.qty == 0 ? null : (
                      <TouchableOpacity
                        style={{
                          backgroundColor: 'green',
                          paddingLeft: 10,
                          paddingRight: 10,
                          height: 27,
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: 7,
                          marginLeft: 10,
                        }}
                        onPress={() => {
                          if (item.qty > 1) {
                            dispatch(removeMyCartItem(item));
                            dispatch(decreaseQty(item.id));
                          } else {
                            dispatch(deleteMyCartItem(item.id));
                            dispatch(decreaseQty(item.id));
                          }
                        }}>
                        <Text style={{color: '#fff'}}>-</Text>
                      </TouchableOpacity>
                    )}

                    {item.qty == 0 ? null : (
                      <Text
                        style={{
                          marginLeft: 10,
                          fontSize: 16,
                          fontWeight: '600',
                        }}>
                        {item.qty}
                      </Text>
                    )}

                    {item.qty == 0 ? null : (
                      <TouchableOpacity
                        style={{
                          backgroundColor: 'green',
                          paddingLeft: 10,
                          paddingRight: 10,
                          height: 27,
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: 7,
                          marginLeft: 10,
                        }}
                        onPress={() => {
                          dispatch(addProductToMyCart(item));
                          dispatch(increaseQty(item.id));
                        }}>
                        <Text style={{color: '#fff'}}>+</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
      <View style={{marginTop: 20}}>
        <TouchableOpacity
          style={{
            backgroundColor: 'green',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 7,
            height: 20,
            width: 90,
          }}
          onPress={() => {
            navigation.navigate('HeadphonesScreen');
          }}>
          <Text style={{color: '#fff'}}>{'< Go Back'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyCart;
