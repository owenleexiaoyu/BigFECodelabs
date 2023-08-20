import React, { useEffect } from "react";
import { View, StyleSheet, Button, Dimensions, useWindowDimensions } from "react-native";

export default () => {

    const {width, height, scale, fontScale} = useWindowDimensions();
    console.log(`window width=${width}, window height=${height}, scale=${scale}, fontScale=${fontScale}`);
    
    useEffect(() => {
        const subcription = Dimensions.addEventListener('change', ({window, screen}) => {
            console.log(window);
            console.log(screen);
        });
        // 在生命周期结束时，移除监听器
        return () => {
            subcription.remove();
        }
    }, []);

    return (
        <View style={styles.root}>
            <Button 
                title="Dimensions"
                onPress={() =>{
                    const windowSize = Dimensions.get('window');
                    console.log(`window width=${windowSize.width}, window height=${windowSize.height}`);
                    const screenSize = Dimensions.get('screen');
                    console.log(`screen width=${screenSize.width}, screen height=${screenSize.height}`);
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