import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';

function App(): JSX.Element {

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={"white"}
      />
      <View className='w-full h-full bg-white'>

      </View>
    </SafeAreaView>
  );
}

export default App;
