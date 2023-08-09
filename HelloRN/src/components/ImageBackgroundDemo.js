import React, { useRef } from "react";
import { View, StyleSheet, Image, Text, ImageBackground } from "react-native";
import bg_card from "../assets/images/bg_card.png";
import icon_bank from "../assets/images/icon_bank.png";
import DescView from "./DescView";

export default () => {

    const viewRef = useRef(null);
    const imgRef = useRef(null); 

    return (
        <View style={styles.root}>
            <DescView title="ImageBackground 银行卡布局" />
            <ImageBackground
                style={styles.viewStyle}
                imageStyle={styles.imgStyle}
                source={bg_card}
                ref={viewRef}
                imageRef={imgRef}
            >
                <Image
                    style={styles.logo}
                    source={icon_bank}
                    />
                <Text style={styles.txtBank}>
                    {`招商银行\n`}
                    <Text style={styles.innerTxtCard}>{`储蓄卡\n\n`}</Text>
                    ●●●●   ●●●●   ●●●●   3068
                </Text>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        width: "100%",
        height: "100%",
        padding: 5,
        flexDirection: "column",
        backgroundColor: "#F0F0F0",
    },
    viewStyle: {
        width: "100%",
        height: 150,
        flexDirection: "row",
    },
    imgStyle: {
        resizeMode: "cover",
        borderRadius: 12,
    },
    logo: {
        width: 48,
        height: 48,
        marginTop: 20,
        marginStart: 20
    },
    txtBank: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 18,
        marginStart: 12,
    },
    innerTxtCard: {
        color: "#FFFFFF90",
        fontSize: 18,
        fontWeight: "normal",
    }
});
