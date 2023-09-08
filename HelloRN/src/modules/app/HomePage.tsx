import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from "react-native";

const dataList = [
    {
        "name": "Flex Layout",
        "route": "flex_layout"
    },
    {
        "name": "React Native Components",
        "route": "rn_components"
    },
    {
        "name": "React Native Apis",
        "route": "rn_apis"
    },
    {
        "name": "TypeScript",
        "route": "typescript"
    },
    {
        "name": "Context",
        "route": "context"
    },
    {
        "name": "HOC",
        "route": "hoc"
    },
    {
        "name": "Memo",
        "route": "memo"
    },
    {
        "name": "Ref",
        "route": "ref"
    },
    {
        "name": "NativeWind",
        "route": "nativewind"
    },
    {
        "name": "React Navigation",
        "route": "navigation"
    },
];

export default () => {

    const navigation = useNavigation<StackNavigationProp<any>>();

    const renderItem = ({item, index}) => {
        return (
            <TouchableOpacity 
                style={{ 
                    width: "100%", 
                    height: 60, 
                    paddingHorizontal: "5%", 
                    flexDirection: "column",
                    justifyContent: "center",
                }}
                onPress={() => {
                    navigation.push(item.route);
                }}
                >
                <Text style={{ fontSize: 16, color: "#333" }}>{item.name}</Text>
            </TouchableOpacity>
        );
    };

    const Divider = () => {
        return (
            <View style={{ width: "90%", height: 1, marginStart: "5%", backgroundColor: "#C0C0C0"}}></View>
        );
    }

    return (
        <View style={styles.root}>
            <FlatList 
                data={dataList}
                keyExtractor={(item, index) => `${item.route}-${index}`}
                renderItem={renderItem}
                ItemSeparatorComponent={Divider}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
    }
});