import React, { useRef } from "react";
import { View, StyleSheet, ScrollView, Text, TextInput, Button, Dimensions, useWindowDimensions } from "react-native";

export default () => {
    
    const getListView = () => {
        const arr = [];
        for (let i = 1; i < 31; i++) {
            arr.push(<Text key={`item-${i}`} style={styles.txt}>{`List item ${i}`}</Text>);
        }
        return arr;
    }

    const { width, height } = useWindowDimensions();
    const scrollRef = useRef(null);
    return (
        <View style={styles.root}>
            <ScrollView 
                ref={scrollRef}
                style={styles.scrollViewStyle} 
                contentContainerStyle={styles.containerStyle}
                // keyboardDismissMode='on-drag'
                // keyboardShouldPersistTaps='handled'
                // onMomentumScrollBegin={() => {
                //     console.log("onMomentumScrollBegin ...");
                // }}
                // onMomentumScrollEnd={() => {
                //     console.log("onMomentumScrollEnd ...");
                // }}
                // onScroll={(event) => {
                //     console.log(event.nativeEvent.contentOffset);
                // }}
                // scrollEventThrottle={16}
                // overScrollMode='auto'
                // pagingEnabled={true}
                // scrollEnabled={false}
                // contentOffset={{x: 0, y: 200}}
                // showsVerticalScrollIndicator={false}
                // stickyHeaderIndices={[3]}

            >
                <TextInput style={styles.input} />
                <Button title="按钮" onPress={() => {
                    console.log("onPress ...");
                    // scrollRef.current.scrollTo({y: 300, animated: true});
                    scrollRef.current.scrollToEnd({animated: true});
                }}/>
                {getListView()}
            </ScrollView>
            {/* <ScrollView 
                pagingEnabled={true}
                horizontal={true}
            >
                <View style={{ width: 300, height: 200, backgroundColor: "red"}} />
                <View style={{ width: 300, height: 200, backgroundColor: "blue"}} />
                <View style={{ width: 300, height: 200, backgroundColor: "yellow"}} />
            </ScrollView> */}
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
    txt: {
        fontSize: 20,
        marginVertical: 10,
    },
    scrollViewStyle: {
        backgroundColor: "blue",
        padding: 20,
    },
    containerStyle: {
        paddingHorizontal: 20,
        backgroundColor: "green",
    },
    input: {
        backgroundColor: "yellow"
    }
});