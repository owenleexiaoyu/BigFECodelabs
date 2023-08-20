import React from "react";
import { View, StyleSheet, Button, Alert, Text } from "react-native";

export default () => {

    return (
        <View style={styles.root}>
            <Button 
                title="alert()"
                onPress={ ()=> {
                    alert("这是一条提示信息");
                    // alert(123);
                    // alert(false);
                    // alert({});
                }}
            />
            
            <Button 
                title="Alert.alert()"
                onPress={ ()=> {
                    const buttons = [
                        {
                            text: "取消",
                            onPress: () => console.log("click 取消")
                        },
                        {
                            text: "确定",
                            onPress: () => console.log("click 确定")
                        },
                    ];
                    Alert.alert("这是标题", "这是一条信息", buttons);
                }}
            />

            <Button 
                title="console"
                onPress={ ()=> {
                    console.log("这是普通的日志输出");
                    console.info("info 日志输出");
                    console.debug("debug 日志输出");
                    console.warn("warn 日志输出");
                    console.error("error 日志输出");
                }}
            />
            <Button 
                title="console %s %d %o"
                onPress={ ()=> {
                    const info = {
                        sex: "男",
                        address: "浙江省杭州市"
                    }
                    console.log("我的名字叫%s，我练习 RN %d 年了。我的其他个人信息：%o", "张三", 2.5, info);
                }}
            />
            <Button 
                title="console %c 日志样式"
                onPress={ ()=> {
                    console.log("%c这行日志红色文字，字号大", "color:red; font-size:x-large;");
                    console.log("%c这行日志蓝色文字，字号中", "color:blue; font-size:x-medium;");
                    console.log("%c这行日志绿色文字，字号小", "color:green; font-size:x-small;");
                }}
            />
            <Button 
                title="console 打印组件树"
                onPress={ ()=> {
                    const viewLayout = (
                        <View style={{ backgroundColor: "#f0f0f0", flexDirection: "column" }}>
                            <Text style={{ fontSize: 20, color: "red" }}>文字</Text>
                        </View>
                    );
                    console.log(viewLayout);
                }}
            />
            <Button 
                title="console.table 打印表格"
                onPress={ ()=> {
                    const users = [
                        { name: "张三", age: 12, hobby: "唱" },
                        { name: "李四", age: 15, hobby: "跳" },
                        { name: "王五", age: 18, hobby: "Rap" },
                        { name: "蔡六", age: 20, hobby: "篮球" },
                    ]
                    console.table(users);
                }}
            />
            <Button 
                title="console.group 日志分组"
                onPress={ ()=> {
                    console.group();
                    console.log("第 1 行日志");
                    console.log("第 2 行日志");
                    console.log("第 3 行日志");
                        console.group();
                        console.log("二级分组第 1 行日志");
                        console.log("二级分组第 2 行日志");
                        console.log("二级分组第 3 行日志");
                        console.groupEnd();
                    console.groupEnd();
                    console.log("其他日志");
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: "100%",
        height: "100%",
        flexDirection: "column",
        backgroundColor: "#F0F0F0",
    },
});