import React from 'react';
import {Appbar} from 'react-native-paper';

const CustomHeader = props => {
  const {title, navigation, iconName = 'menu'} = props;

  const _handleSearch = () =>
    iconName == 'keyboard-backspace'
      ? navigation.goBack()
      : navigation.openDrawer();

  return (
    <Appbar.Header>
      <Appbar.Action icon={iconName} onPress={_handleSearch} />
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export default CustomHeader;
