/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// chapter 6.3
// 测试读取 package.json 中的字段
// import { name, version } from './package.json';
// console.log(`name=${name}, version=${version}`);

// chapter 6.4
// 测试读取 json 文件中的数据
// import Config from './src/constants/Config.json';
// console.log(JSON.stringify(Config));
// console.log(`name=${Config.name}, age=${Config.age}, sex=${Config.sex}`);

// chapter 6.4
// 测试读取 js 文件导出的函数
// import { test, test2 } from './src/utils/StringUtil';
// test();
// test2();

// chapter 6.4
// 测试读取 js 文件导出的 RN 组件
// import TestView from './src/components/TestView';
// AppRegistry.registerComponent(appName, () => TestView);

AppRegistry.registerComponent(appName, () => App);