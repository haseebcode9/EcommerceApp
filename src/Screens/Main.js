import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {addMyProducts} from '../Redux/MyProductSlice';
import Appnavigator from '../Appnavigator';

const items = [
  {
    id: 0,
    qty: 0,
    brand: 'SONY',
    productName: 'Sony Airpods Lax55X',
    productPrice: 5449,
    productImage: require('../ProductImages/Headphone1.webp'),
  },
  {
    id: 1,
    qty: 0,
    brand: 'SONY',
    productName: 'Sony Truely Wireless Headpnone',
    productPrice: 999,
    productImage: require('../ProductImages/Headphone2.webp'),
  },
  {
    id: 2,
    qty: 0,
    brand: 'SONY',
    productName: 'Sony Earphone with Mic',
    productPrice: 1049,
    productImage: require('../ProductImages/Headphone3.webp'),
  },
  {
    id: 3,
    qty: 0,
    brand: 'SONY',
    productName: 'Sony Wired Mic Earphone',
    productPrice: 999,
    productImage: require('../ProductImages/Headphone4.webp'),
  },
  {
    id: 4,
    qty: 0,
    brand: 'SONY',
    productName: 'Sony FastConnect Airpods',
    productPrice: 3699,
    productImage: require('../ProductImages/Headphone5.webp'),
  },
  {
    id: 5,
    qty: 0,
    brand: 'SONY',
    productName: 'Sony Sterio Airpods 6.0',
    productPrice: 4500,
    productImage: require('../ProductImages/Headphone6.webp'),
  },
  {
    id: 6,
    qty: 0,
    brand: 'SONY',
    productName: 'Sony True Airpods 6.0',
    productPrice: 1199,
    productImage: require('../ProductImages/Headphone7.webp'),
  },
  {
    id: 7,
    qty: 0,
    brand: 'PREDITOR',
    productName: 'Preditor Airpods 6.0',
    productPrice: 1449,
    productImage: require('../ProductImages/Headphone8.webp'),
  },
  {
    id: 8,
    qty: 0,
    brand: 'SONY',
    productName: 'Sony Airpods ML99J',
    productPrice: 1599,
    productImage: require('../ProductImages/Headphone9.webp'),
  },
  {
    id: 9,
    qty: 0,
    brand: 'SONY',
    productName: 'Sony Wired Earphone',
    productPrice: 1699,
    productImage: require('../ProductImages/Headphone10.webp'),
  },
];

const Main = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    items.map(item => {
      dispatch(addMyProducts(item));
    });
  }, []);

  return <Appnavigator />;
};

export default Main;
