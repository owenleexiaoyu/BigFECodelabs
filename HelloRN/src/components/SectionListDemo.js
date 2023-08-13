import React, { useRef, useEffect, useState } from "react";
import { Text, StyleSheet, SectionList, RefreshControl } from "react-native";
import { SectionData } from "../constants/Data";

export default () => {

    const sectionListRef = useRef(null);
    // useEffect(()=>{
    //     setTimeout(() => {
    //         sectionListRef.current.scrollToLocation({ 
    //             sectionIndex: 1,
    //             itemIndex: 3,
    //             viewPosition: 0,
    //             animated: true,
    //         });
    //     }, 3000);
    // }, []);

    const [refreshing, setRefreshing] = useState(false);

    const renderItem = ({item, index, section}) => {
        return (
            <Text style={styles.txt}>{item}</Text>
        );
    };
    const renderSectionHeader = ({ section }) => {
        return (
            <Text style={styles.sectionHeader}>{section.type}</Text>
        );
    }

    return (
        <SectionList 
            ref={sectionListRef}
            style={styles.root} 
            sections={SectionData}
            renderItem={renderItem}
            keyExtractor={(item, index) => `key-${index}`}
            renderSectionHeader={renderSectionHeader}
            stickySectionHeadersEnabled={true}
            refreshControl={
                <RefreshControl 
                    refreshing={refreshing}
                    onRefresh={
                        () => {
                            setRefreshing(true);
                            console.log("onEndReached ...");
                            setTimeout(() => {
                                setRefreshing(false);
                            }, 2000);
                        }
                    }/>
            }
            onEndReached={
                () => console.log("onEndReached ...")
            }
            onEndReachedThreshold={0.5}
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
    sectionHeader: {
        backgroundColor: "#A0A0A0",
        fontSize: 20,
        fontWeight: "bold",
        paddingHorizontal: 20,
        paddingVertical: 10,
    }
});