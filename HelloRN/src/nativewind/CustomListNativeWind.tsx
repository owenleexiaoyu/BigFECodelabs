import React, { useCallback, useMemo, useState } from "react";
import { View, StyleSheet, Text, Switch, TouchableOpacity, FlatList, Button } from "react-native";
import { ListData, ListData2 } from "../constants/Data";
import { TypeColors } from "../constants/Data";

export default () => {
    const [data, setData] = useState(ListData);
    const [showType, setShowType] = useState<boolean>(true);

    const onItemPress = useCallback((item, index) => () => {
        console.log(`点击了第${item.index}个，名称是${item.name}`);
    }, []);

    const renderItem = ({item, index}) => {
        return (
            <TouchableOpacity 
                className={"w-full p-4"}
                onPress={onItemPress(item, index)}
                >
                <View className={"w-full flex-row"}>
                    <Text className={"text-sm text-gray-500 flex-initial w-16"}>序号</Text>
                    { showType && <Text className={"text-sm text-gray-500 flex-initial w-16"}>类型</Text> }
                    <Text className={"text-sm text-gray-500 flex-1"}>名称</Text>
                    <Text className={"text-sm text-gray-500 flex-initial w-20"}>金额</Text>
                </View>
                <View className={"w-full flex-row mt-2"}>
                    <Text className={"text-lg font-bold text-black flex-initial w-16"}>{item.index}</Text>
                    { showType &&  <View className={"flex-initial w-16"}>
                        <Text 
                            className={"text-lg font-bold text-black w-7 h-7 rounded text-white text-center align-center"} 
                            style={{ backgroundColor: TypeColors[item.type]}}
                            >
                            {item.type}
                        </Text>
                    </View> }
                    <Text className={"text-lg font-bold text-black flex-1"}>{item.name}</Text>
                    <Text className={"text-lg font-bold text-black flex-initial w-20"}>{item.amount}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    const totalAmountView = useMemo(() => {
        console.log("重新渲染总计")
        const total = data.map(item => item.amount)
                .reduce((pre: number, cur: number) => pre + cur);
        return (
            <View className={"w-full h-16 flex-row justify-end items-center px-4 border-t-gray-300 border-t"}>
                <Text>合计：</Text>
                <Text className={"font-bold text-xl text-black"}>{total}</Text>
            </View>
        );
    }, [data]);

    return (
        <View className={`w-full h-full flex-col bg-white`}>
            <View className={`w-full h-16 flex-row justify-center items-center`}>
                <Text className={`text-lg font-bold`}>消费清单</Text>
                <Switch 
                    className={`absolute right-4`}
                    value={showType}
                    onValueChange={(value) => {
                        setShowType(value);
                    }}
                />
                <Button 
                    title="切换数据"
                    onPress={() => {
                        setData(ListData2);
                    }}
                />
            </View>
            <FlatList 
                data={data}
                keyExtractor={(item, index) => `item-${item.name}-${index}`}
                renderItem={renderItem}
            />
            {totalAmountView}
        </View>
    );
}