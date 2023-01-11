import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  addProductToMyCart,
  deleteMyCartItem,
  removeMyCartItem,
} from '../Redux/MyCartSlice';
import {useNavigation} from '@react-navigation/native';
import {decreaseQty, increaseQty} from '../Redux/MyProductSlice';

const HeadphonesScreen = () => {
  const myProducts = useSelector(state => state.product);
  const myCartItems = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const getTotal = () => {
    let total = 0;
    myCartItems.map(item => {
      total = total + item.qty * item.productPrice;
    });
    return total;
  };

  return (
    <SafeAreaView style={{flex: 1, margin: 10}}>
      <FlatList
        data={myProducts}
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
                <Text style={{fontSize: 16, fontWeight: '600', color: '#000'}}>
                  {item.productName.substring(0, 20) + '...'}
                </Text>
                <Text style={{fontWeight: '400'}}>{item.brand}</Text>
                <Text style={{color: 'green', fontSize: 16, fontWeight: '600'}}>
                  {'₹' + item.productPrice}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 10,
                  }}>
                  {item.qty == 0 ? (
                    <TouchableOpacity
                      style={{
                        backgroundColor: 'green',
                        paddingLeft: 10,
                        paddingRight: 10,
                        height: 27,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 7,
                      }}
                      onPress={() => {
                        dispatch(addProductToMyCart(item));
                        dispatch(increaseQty(item.id));
                      }}>
                      <Text style={{color: '#fff'}}>Add to cart</Text>
                    </TouchableOpacity>
                  ) : null}
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
                      style={{marginLeft: 10, fontSize: 16, fontWeight: '600'}}>
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
                      <Text style={{color: '#fff'}}> + </Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          );
        }}
      />
      {myCartItems.length > 0 ? (
        <View
          style={{
            width: '100%',
            height: 60,
            backgroundColor: '#fff',
            position: 'absolute',
            bottom: 0,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <View
            style={{
              width: '50%',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}>
            <Text style={{fontSize: 16, fontWeight: '700', color: '#000'}}>
              {'added items' + '(' + myCartItems.length + ')'}
            </Text>
            <Text>{'Total:' + getTotal()}</Text>
          </View>
          <View
            style={{
              width: '50%',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
            }}>
            <TouchableOpacity
              style={{
                width: '70%',
                height: 35,
                backgroundColor: 'green',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 7,
              }}
              onPress={() => {
                navigation.navigate('MyCart');
              }}>
              <Text style={{color: '#fff'}}>View Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </SafeAreaView>
  );
};

export default HeadphonesScreen;
