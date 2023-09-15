import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import ButtonDemo from './src/components/ButtonDemo';

import ClassView from './src/components/ClassView';
import FlatListDemo from './src/components/FlatListDemo';
import FunctionView from './src/components/FunctionView';
import ImageBackgroundDemo from './src/components/ImageBackgroundDemo';
import ImageDemo from './src/components/ImageDemo';
import InfoCard from './src/components/InfoCard';
import InfoPage from './src/components/InfoPage';
import ModalDemo from './src/components/ModalDemo';
import PressableDemo from './src/components/PressableDemo';
import ProfileInfo from './src/components/ProfileInfo';
import ScrollViewDemo from './src/components/ScrollViewDemo';
import SectionListDemo from './src/components/SectionListDemo';
import StatusBarDemo from './src/components/StatusBarDemo';
import SwitchDemo from './src/components/SwitchDemo';
import TestAlertConsole from './src/components/TestAlertConsole';
import TestApi from './src/components/TestAlertConsole';
import TestBackHander from './src/components/TestBackHander';
import TestDimensions from './src/components/TestDimensions';
import TestKeyboard from './src/components/TestKeyboard';
import TestLinking from './src/components/TestLinking';
import TestPermissionsAndroid from './src/components/TestPermissionsAndroid';
import TestPixelRatio from './src/components/TestPixelRatio';
import TestPlatform from './src/components/TestPlatform';
import TestStyleSheet from './src/components/TestStyleSheet';
import TestToastAndroid from './src/components/TestToastAndroid';
import TestTransform from './src/components/TestTransform';
import TestVibration from './src/components/TestVibration';
import TextDemo from './src/components/TextDemo';
import TextInputDemo from './src/components/TextInputDemo';
import TimerView from './src/components/TimerView';
import TouchableHighlightDemo from './src/components/TouchableHighlightDemo';
import TouchableOpacityDemo from './src/components/TouchableOpacityDemo';
import TouchableWithoutFeedbackDemo from './src/components/TouchableWithoutFeedbackDemo';
import ViewDemo from './src/components/ViewDemo';
import TSDemo from './src/ts/TSDemo';
import RootView from './src/context/RootView';
import InfoView from './src/hoc/InfoView';
import MemoPage from './src/memo/MemoPage';
import CustomListNativeWind from './src/nativewind/CustomListNativeWind';
import RefDemo from './src/ref/RefDemo';
import NativePage from './src/native/NativePage';
import NavigationPage from './src/navigation/NavigationPage';
import HomePage from './src/modules/app/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FlexLayoutPage from './src/modules/flex_practice/FlexLayoutPage';
import RNComponentsPage from './src/components/RNComponentsPage';
import PageView from './src/context/PageView';
import RNApisPage from './src/components/RNApisPage';
import BottomTabPage from './src/navigation/BottomTabPage';

const Stack = createStackNavigator();

function App(): JSX.Element {


  // chapter 6.5
  // // 设置了一个 state，是否需要展示 ClassView，默认为 true
  // const [showClassView, setShowClassView] = useState(true);
  // // 设置了一个副作用，会在 App 挂载时执行
  // // 里面设置了一个定时器，2s 后将 showClassView 这个 state 的值设为 false
  // useEffect(()=>{
  //   setTimeout(() => {
  //     setShowClassView(false);
  //   }, 2000);
  // }, []);

  return (
    <View style={styles.container}>
      {/* chapter 6.5 */}
      {/* 当 showClassView 为 true 时，才添加 ClassView 组件 */}
      {/* { showClassView && <ClassView /> } */}
      {/* <ClassView name="zhangsan" age={12} level="top" sex={true} /> */}
      {/* <FunctionView name="zhangsan" age={12} level="top" sex={true} /> */}
      {/* <InfoPage /> */}
      {/* <TimerView /> */}
      {/* <ViewDemo /> */}
      {/* <TextDemo /> */}
      {/* <ImageDemo /> */}
      {/* <ImageBackgroundDemo /> */}
      {/* <TextInputDemo /> */}
      {/* <TouchableOpacityDemo /> */}
      {/* <TouchableHighlightDemo /> */}
      {/* <TouchableWithoutFeedbackDemo /> */}
      {/* <ButtonDemo /> */}
      {/* <PressableDemo /> */}
      {/* <ScrollViewDemo /> */}
      {/* <FlatListDemo /> */}
      {/* <SectionListDemo /> */}
      {/* <ModalDemo /> */}
      {/* <StatusBarDemo /> */}
      {/* <SwitchDemo /> */}
      {/* <ProfileInfo /> */}
      {/* <TestAlertConsole /> */}
      {/* <TestDimensions /> */}
      {/* <TestPlatform /> */}
      {/* <TestStyleSheet /> */}
      {/* <TestLinking /> */}
      {/* <TestPixelRatio /> */}
      {/* <TestBackHander /> */}
      {/* <TestPermissionsAndroid /> */}
      {/* <TestVibration /> */}
      {/* <TestToastAndroid /> */}
      {/* <TestTransform /> */}
      {/* <TestKeyboard /> */}
      {/* <TSDemo /> */}
      {/* <RootView /> */}
      {/* <InfoView /> */}
      {/* <MemoPage /> */}
      {/* <RefDemo /> */}
      {/* <NativePage /> */}
      {/* <NavigationPage /> */}
      {/* <HomePage /> */}
      {/* <CustomListNativeWind /> */}
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='home'
        >
          <Stack.Screen 
            name="home" 
            component={HomePage}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen 
            name="flex_layout" 
            component={FlexLayoutPage}
          />
          <Stack.Screen 
            name="rn_components" 
            component={RNComponentsPage}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen 
            name="rn_apis" 
            component={RNApisPage}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen 
            name="typescript" 
            component={TSDemo}
          />
          <Stack.Screen 
            name="context" 
            component={RootView}
          />
          <Stack.Screen 
            name="hoc" 
            component={InfoView}
          />
          <Stack.Screen 
            name="memo" 
            component={MemoPage}
          />
          <Stack.Screen 
            name="ref" 
            component={RefDemo}
          />
          <Stack.Screen 
            name="nativewind" 
            component={CustomListNativeWind}
          />
          <Stack.Screen 
            name="navigation" 
            component={NavigationPage}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen 
            name="bottom_tab_navigation" 
            component={BottomTabPage}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: 'white',
  },
});

export default App;
