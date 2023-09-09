import { NavigationContainer } from '@react-navigation/native';
import { TransitionPresets, createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';
import WelcomePage from './src/modules/welcome/WelcomePage';
import LoginPage from './src/modules/login/LoginPage';
import HomePage from './src/modules/home/HomePage';

const Stack = createStackNavigator();

function App(): JSX.Element {

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={"white"}
      />
      <View className='w-full h-full bg-white'>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName='welcome'
            >
            <Stack.Screen 
              name="welcome"
              component={WelcomePage}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen 
              name="login"
              component={LoginPage}
              options={{
                headerShown: false,
                ...TransitionPresets.SlideFromRightIOS
              }}
            />
            <Stack.Screen 
              name="home"
              component={HomePage}
              options={{
                headerShown: false,
                ...TransitionPresets.SlideFromRightIOS
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaView>
  );
}

export default App;
