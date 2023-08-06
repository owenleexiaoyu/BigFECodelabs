import React, { useState, useEffect, useRef } from "react";
import { ScrollView, Text, View, useWindowDimensions, useColorScheme } from "react-native";

// chapter 6.6
// 函数式组件的第一种写法：普通函数
// function FunctionView() {
//     return (
//         <View style={{ width: "100%", height: 200, backgroundColor: "#00bc24"}} >       
//         </View>
//     );
// }
// export default FunctionView;

// chapter 6.6
// 函数式组件的第二种写法：箭头函数
// const FunctionView = () => {
//     return (
//         <View style={{ width: "100%", height: 200, backgroundColor: "#00bc24"}} >                 
//         </View>
//     );
// }
// export default FunctionView;

// chapter 6.6
// 函数式组件的第三种写法：匿名函数
export default (props) => {
    const { name, age, level, sex } = props;

    // chapter 6.7
    // 使用 useState 创建状态
    const [ address, setAddress ] = useState("江苏省南京市");

    // chapter 6.7
    // 使用 useRef 进行命令式 UI 更新
    const scrollViewRef = useRef(null);

    // chapter 6.7
    // 使用 useWindowDimensions 获取设备屏幕宽高
    const { width, height } = useWindowDimensions();
    console.log(`width=${width}, height=${height}`);

    // chapter 6.7
    // 使用 useColorScheme 获取当前的显示模式，darkmode 还是 lightmode，值：dark | light
    const colorScheme= useColorScheme();
    console.log(`colorScheme=${colorScheme}`);

    // chapter 6.7
    // 这个 useEffect 是代替 componentDidMount() 回调
    useEffect(() => {
        setTimeout(() => {
            setAddress("浙江省杭州市");
            scrollViewRef.current.scrollToEnd({ animated: true});
        }, 2000);
    }, []);

    // chapter 6.7
    // 这个 useEffect 是监听 address 这个状态的变化
    useEffect(() => {
        console.log(`address=${address}`);
    }, [address]);

    const renderProps = () => {
        return (
            <Text style={{ fontSize: 20, color: "white"}}>
                {`name=${name}, age=${age}, level=${level}, sex=${sex}`}
            </Text>
        );
    };

    const renderAddress = () => {
        return (
            <Text style={{ fontSize: 20, color: "yellow"}}>
                {address}
            </Text>
        );
    };

    const arr = ["AAA", "BBB", "CCC", "DDD", "EEE", "FFF", "GGG", "HHH", "III"];

    // 标准写法
    const renderList =() => {
        return (
            <ScrollView ref={scrollViewRef}>
                { arr.map((item) => {
                    return (
                        <Text style={{ fontSize: 24, marginVertical: 12, color: "white"}}>{item}</Text>
                    );
                    })
                }
            </ScrollView>
        );
    };

    const getListView = () => {
        const viewList = [];
        for (let i = 0; i < 5; i++) {
            viewList.push(<Text style={{ fontSize: 24, marginVertical: 12, color: "white"}}>{`List item ${i + 1}`}</Text>);
        }
        return viewList;
    };

    // 简略写法
    // const renderList =() => {
    //     return (
    //         <ScrollView ref={scrollViewRef}>
    //             { arr.map(item => <Text style={{ fontSize: 24, marginVertical: 12, color: "white"}}>{item}</Text>) }
    //         </ScrollView>
    //     );
    // };


    return (
        <View style={{ width: "100%", height: 200, backgroundColor: "#00bc24"}} >
            { renderProps() }
            { renderAddress() }
            { renderList() }
            {/* { getListView() } */}
        </View>
    );
}