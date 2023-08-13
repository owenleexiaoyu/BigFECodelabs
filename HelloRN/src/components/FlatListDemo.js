import React, { useEffect, useRef } from "react";
import { Text, StyleSheet, FlatList, TextInput, View } from "react-native";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,17, 18, 19, 20];

export default () => {

    const listRef = useRef(null);
    useEffect(()=>{
        setTimeout(() => {
            listRef.current.scrollToIndex({index: 16, viewPosition: 1, animated: true});
            // listRef.current.scrollToItem({item: 5, viewPosition: 0, animated: true});
        }, 3000);
    }, []);

    // 注意这里是要用解构语法，而不是直接 (item, index)。
    const renderItem = ({item, index}) => {
        return (
            <Text style={styles.txt}>{`FlatList item ${item}`}</Text>
        );
    };
    const ListHeader = () => 
        <Text style={styles.header}>列表顶部</Text>

    const ListFooter = () =>
        <Text style={styles.footer}>列表底部</Text>

    const ListEmpty = () => 
        <Text style={styles.empty}>列表是空的</Text>

    return (
        <FlatList 
            ref={listRef}
            style={styles.root}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item, index) => `key-${item}`}
            // contentContainerStyle={styles.containerStyle}
            // showsVerticalScrollIndicator={false}
            // onScroll={() => {
            //     console.log("onScroll ...");
            // }}
            // keyboardDismissMode="on-drag"
            // keyboardShouldPersistTaps="handled"
            ListHeaderComponent={ListHeader}
            ListFooterComponent={ListFooter}
            ListEmptyComponent={ListEmpty}
            // ItemSeparatorComponent={
            //     <View style={{ height: 1, backgroundColor: "#D0D0D0", marginHorizontal: 20}}/>
            // }
            // initalNumToRender={15}
            // inverted={true}
            // numColumns={2}
            // onViewableItemsChanged={
            //     (info) => {
            //         const { viewableItems } = info
            //         // console.log(viewableItems);
            //         if (viewableItems && viewableItems.length > 0) {
            //             const firstViewableItem = viewableItems[0];
            //             const lastViewableItem = viewableItems[viewableItems.length - 1];
            //             console.log(`第一个可见元素是：${firstViewableItem.item}，最后一个可见元素是：${lastViewableItem.item}`);
            //         }
            //     }
            // }

        />
    );
}

const styles = StyleSheet.create({
    root: {
        width: "100%",
        height: "100%",
        flexDirection: "column",
        backgroundColor: "white",
    },
    txt: {
        fontSize: 20,
        marginVertical: 10,
        marginLeft: 20,
    },
    txtGrid: {
        height: 150,
        width: "50%",
        backgroundColor: "#F0F0F0",
        borderRadius: 10,
        margin: 5,
        textAlign: "center",
        textAlignVertical: "center",
    },
    containerStyle: {
        backgroundColor: "#D0D0D0",
        paddingHorizontal: 20,
    },
    header: {
        backgroundColor: "#E58383",
        width: "100%",
        height: 50,
        textAlign: "center",
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textAlignVertical: "center",
    },
    footer: {
        backgroundColor: "#55B87F",
        width: "100%",
        height: 50,
        textAlign: "center",
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        textAlignVertical: "center",
    },
    empty: {
        width: "100%",
        height: 300,
        textAlign: "center",
        textAlignVertical: "center",
    }
});