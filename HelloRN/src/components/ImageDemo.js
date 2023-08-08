import React, { useEffect, useRef } from "react";
import { View, StyleSheet, Image, Text, ScrollView } from "react-native";
import chandler from "../assets/images/chandler.png";
import icon_browser from "../assets/images/icon_browser.png";
import DescView from "./DescView";
import { imageUrl, largeImageUrl } from "../constants/Url";

export default () => {

    useEffect(() => {
        Image.getSize(imageUrl, (width, height) => {
            console.log(`Image.getSize width=${width}, height=${height}`);
        }, (error) => {
            console.log(error);
        });

        Image.prefetch(imageUrl).then(result => {
            console.log(`Image.prefetch result=${result}`);
        }).catch(error => {
            console.log(e);
        })
    }, []);

    return (
        <ScrollView style={{ width: "100%"}}>
        <View style={styles.root}>
            <DescView title="加载本地图片" />
            <Image 
                style={styles.img} 
                source={chandler} />
            <DescView title="加载网络图片" />
            <Image 
                style={styles.img} 
                source={{ uri: imageUrl, }}
                onLoadStart={() => {
                    console.log("onLoadStart ...");
                }}
                onLoad={(event) => {
                    console.log(event.nativeEvent);
                }}
                onLoadEnd={() => {
                    console.log("onLoadEnd ...");
                }}
                onError={() => {
                    console.log("onError ...");
                }} />
            <DescView title="展示不同的 resizeMode" />
            <Image 
                style={styles.img2} 
                source={chandler} />
            <DescView title="defaultSource 占位图片" />
            <Image 
                style={styles.img} 
                source={{ uri: largeImageUrl }}
                defaultSource={chandler}
                fadeDuration={500} />
            <DescView title="blurRadius 实现高斯模糊" />
            <Image 
                style={styles.img} 
                source={chandler}
                blurRadius={5} />
            <DescView title="tintColor 着色" />
            <Image 
                style={styles.icon} 
                source={icon_browser} />
            <Image 
                style={styles.iconTint} 
                source={icon_browser} />
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: "#F0F0F0",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        padding: 20,
    },
    img: {
        width: 150,
        height: 150,
    },
    img2: {
        width: 300,
        height: 150,
        // resizeMode: "center",
        resizeMode: "contain",
        // resizeMode: "cover",
        // resizeMode: "stretch",
        // resizeMode: "repeat",
        backgroundColor: "#D0D0D0",
    },
    icon: {
        width: 60,
        height: 60,
    },
    iconTint: {
        width: 60,
        height: 60,
        tintColor: "red",
    }
    
});