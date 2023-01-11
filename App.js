import React from 'react';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {mystore} from './src/Redux/MyStore';
import Main from './src/Screens/Main';

const App = () => {
  return (
    <Provider store={mystore}>
      <Main />
    </Provider>
  );
};

export default App;
