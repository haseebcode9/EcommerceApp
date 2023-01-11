import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ShoesScreenList = () => {
  const Shoes = [
    {
      id: '0',
      qty: '0',
      productName: 'Flex Sports Shoes',
      productPrice: '1400',
      productImage: require('../ProductImages/Shoes11.webp'),
    },
    {
      id: '1',
      qty: '0',
      productName: 'Running Sports Shoes',
      productPrice: ' 1500',
      productImage: require('../ProductImages/Shoes22.webp'),
    },
    {
      id: '2',
      qty: '0',
      productName: 'Cuva Running Shoes',
      productPrice: '1300',
      productImage: require('../ProductImages/Shoes33.webp'),
    },
    {
      id: '3',
      qty: '0',
      productName: 'Envy Sports Shoes',
      productPrice: '1600',
      productImage: require('../ProductImages/Shoes44.webp'),
    },
    {
      id: '4',
      qty: '0',
      productName: 'Air Casual Shoes',
      productPrice: '1200',
      productImage: require('../ProductImages/Shoes55.webp'),
    },
    {
      id: '5',
      qty: '0',
      productName: 'Hakman Casual Shoes',
      productPrice: '1550',
      productImage: require('../ProductImages/Shoes66.webp'),
    },
    {
      id: '6',
      qty: '0',
      productName: 'Flexy Casual Shoes',
      productPrice: '3400',
      productImage: require('../ProductImages/Shoes77.webp'),
    },
  ];
  return (
    <SafeAreaView style={{flex: 1, margin: 10}}>
      <FlatList
        data={Shoes}
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

export default ShoesScreenList;
