import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ClothsScreenList = () => {
  const Jeans = [
    {
      id: '0',
      qty: '0',
      productName: 'SlimFit Jeans',
      productprice: '1499',
      productIamge: require('../ProductImages/jeans1.webp'),
    },
    {
      id: '1',
      qty: '0',
      productName: 'Strachable jeans',
      productPrice: '1599',
      productIamge: require('../ProductImages/jeans2.webp'),
    },
    {
      id: '2',
      qty: '0',
      productName: 'NarrowFit Jeans',
      productPrice: '1300',
      productIamge: require('../ProductImages/jeans3.webp'),
    },
    {
      id: '3',
      qty: '0',
      productName: 'Stylish Urban Jeans',
      productPrice: '1600',
      productIamge: require('../ProductImages/jeans4.webp'),
    },
    {
      id: '4',
      qty: '0',
      productName: 'Mens Solid Trouser',
      productPrice: '1299',
      productIamge: require('../ProductImages/jeans5.webp'),
    },
    {
      id: '5',
      qty: '0',
      productName: 'Stylish Mens Trouser',
      productPrice: '1199',
      productIamge: require('../ProductImages/jeans6.webp'),
    },
    {
      id: '6',
      qty: '0',
      productName: 'Mens Solid Track Pants',
      productPrice: '2099',
      productIamge: require('../ProductImages/jeans7.webp'),
    },
    {
      id: '7',
      qty: '0',
      productName: 'Mens Solid Pants',
      productPrice: '2049',
      productIamge: require('../ProductImages/jeans8.webp'),
    },
    {
      id: '8',
      qty: '0',
      productName: 'Mens Track Pants',
      productPrice: '2016',
      productIamge: require('../ProductImages/jeans9.webp'),
    },
    {
      id: '9',
      qty: '0',
      productName: 'Stylish Track Pants',
      productPrice: '3450',
      productIamge: require('../ProductImages/jeans10.webp'),
    },
  ];
  return (
    <SafeAreaView style={{flex: 1, margin: 10}}>
      <FlatList
        data={Jeans}
        // numColumns={2}
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
                source={item.productIamge}
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
                      }}>
                      <Text style={{color: '#fff'}}>-</Text>
                    </TouchableOpacity>
                  )}

                  {item.qty == 0 ? null : (
                    <Text
                      style={{marginLeft: 10, fontSize: 16, fontWeight: '600'}}>
                      {'0'}
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
    </SafeAreaView>
  );
};

export default ClothsScreenList;
