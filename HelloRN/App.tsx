import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import ClassView from './src/components/ClassView';
import FunctionView from './src/components/FunctionView';

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
      <FunctionView name="zhangsan" age={12} level="top" sex={true} />
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
