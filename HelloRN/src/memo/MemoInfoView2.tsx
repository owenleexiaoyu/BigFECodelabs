import React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

type Props = {
    info: ProfileInfo
}

export default class MemoInfoView2 extends React.Component<Props, any> {

    constructor(props: Props) {
        super(props);
    }

    shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<any>, nextContext: any): boolean {
        return JSON.stringify(this.props.info) !== JSON.stringify(nextProps.info);
    }

    render(): React.ReactNode {
        const { info } = this.props;
        console.log("render ....")
        return (
            <View style={styles.content}>
                <Image source={{ uri: info.avatar }} style={styles.img} />
                <Text style={styles.txt}>{info.name}</Text>
                <View style={styles.infoLayout}>
                    <Text style={styles.infoTxt}>{info.desc}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        width: "100%",
        height: "100%",
        backgroundColor: "#666666",
        flexDirection: "column",
        alignItems: "center",
        paddingHorizontal: 16,
        paddingTop: 64,
    },
    img: {
        width: 96,
        height: 96,
        borderRadius: 48,
        borderWidth: 4,
        borderColor: "#FFFFFFF0",
    },
    txt: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        marginTop: 32,
    },
    infoLayout: {
        width: "90%",
        padding: 20,
        backgroundColor: "#808080",
        marginTop: 32,
        borderRadius: 12,
    },
    infoTxt: {
        fontSize: 16,
        color: "white",
    }
});
