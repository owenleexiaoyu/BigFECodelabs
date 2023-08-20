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
import TestDimensions from './src/components/TestDimensions';
import TextDemo from './src/components/TextDemo';
import TextInputDemo from './src/components/TextInputDemo';
import TimerView from './src/components/TimerView';
import TouchableHighlightDemo from './src/components/TouchableHighlightDemo';
import TouchableOpacityDemo from './src/components/TouchableOpacityDemo';
import TouchableWithoutFeedbackDemo from './src/components/TouchableWithoutFeedbackDemo';
import ViewDemo from './src/components/ViewDemo';

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
      <TestDimensions />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default App;
