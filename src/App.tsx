import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Provider} from 'react-redux';
import store from './redux/store';

const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <View>
          <Text>Hello World!!!</Text>
        </View>
      </SafeAreaView>
    </Provider>
  );
};

export default App;
