import React from 'react';
import {Appbar} from 'react-native-paper';

const CustomHeader = props => {
  const {title, navigation} = props;

  const _handleSearch = () => navigation.openDrawer();

  return (
    <Appbar.Header>
      {/* <Appbar.BackAction onPress={_goBack} /> */}
      <Appbar.Action icon="menu" onPress={_handleSearch} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export default CustomHeader;
