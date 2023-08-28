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
        const styles = StyleSheet.create({
            itemLayout: {
                width: "100%",
                padding: 16,
            },
            labelLayout: {
                width: "100%",
                flexDirection: "row",
            },
            dataLayout: {
                width: "100%",
                flexDirection: "row",
                marginTop: 10,
            },
            labelTxt: {
                flex: 1,
                fontSize: 14,
                color: "#666",
            },
            dataTxt: {
                flex: 1,
                fontSize: 18,
                fontWeight: "bold",
                color: "#000",
            },
            first: {
                flex: 0.4,
            },
            second: {
                flex: 0.4,
            },
            last: {
                flex: 0.5,
            },
            typeLayout: {
                flex: 0.4,
            },
            typeTxt: {
                width: 20,
                height: 20,
                color: "white",
                textAlign: "center",
                textAlignVertical: "center",
                borderRadius: 4,
            }
        });

        return (
            <TouchableOpacity 
                style={styles.itemLayout}
                onPress={onItemPress(item, index)}
                >
                <View style={styles.labelLayout}>
                    <Text style={[styles.labelTxt, styles.first]}>序号</Text>
                    { showType && <Text style={[styles.labelTxt, styles.second]}>类型</Text> }
                    <Text style={styles.labelTxt}>名称</Text>
                    <Text style={[styles.labelTxt, styles.last]}>金额</Text>
                </View>
                <View style={styles.dataLayout}>
                    <Text style={[styles.dataTxt, styles.first]}>{item.index}</Text>
                    { showType &&  <View style={styles.typeLayout}>
                        <Text style={[
                            styles.typeTxt, 
                            { backgroundColor: TypeColors[item.type] }
                            ]}>{item.type}</Text>
                    </View> }
                    <Text style={styles.dataTxt}>{item.name}</Text>
                    <Text style={[styles.dataTxt, styles.last]}>{item.amount}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    // const calculateTotal = useMemo(() => {
    //     console.log("重新计算总计");
    //     return data.map(item => item.amount)
    //         .reduce((pre: number, cur: number) => pre + cur);
    // }, [data]);

    const totalAmountView = useMemo(() => {
        console.log("重新渲染总计")
        const total = data.map(item => item.amount)
                .reduce((pre: number, cur: number) => pre + cur);
        return (
            <View style={styles.totalLayout}>
                <Text>合计：</Text>
                <Text style={styles.totalTxt}>{total}</Text>
            </View>
        );
    }, [data]);

    return (
        <View style={styles.root}>
            <View style={styles.navBar}>
                <Text style={styles.navTitle}>消费清单</Text>
                <Switch 
                    style={styles.switch}
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
            {/* <View style={styles.totalLayout}>
                <Text>合计：</Text>
                <Text style={styles.totalTxt}>{calculateTotal}</Text>
            </View> */}
            {totalAmountView}
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: "100%",
        height: "100%",
        flexDirection: "column",
        backgroundColor: "white",
    },
    navBar: {
        width: "100%",
        height: 50,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center",
    },
    navTitle: {
        fontSize: 18,
        fontWeight: "bold",
    },
    switch: {
        position: "absolute",
        end: 16,
    },
    totalLayout: {
        width: "100%",
        height: 60,
        borderTopColor: "#F0F0F0",
        borderTopWidth: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingHorizontal: 16
    },
    totalTxt: {
        fontWeight: "bold",
        fontSize: 20,
        color: "black",
    }
});