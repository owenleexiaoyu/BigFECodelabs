import React from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, Image, Text } from "react-native";
import icon_delete from "../assets/images/icon_delete.png";
import icon_error from "../assets/images/icon_error.png";
import icon_right from "../assets/images/icon_right.png";
import icon_question from "../assets/images/icon_question.webp";

export default class CustomInput3 extends React.Component {

    inputRef = React.createRef<TextInput>();

    constructor(props: any) {
        super(props);
        this.state = {
            input: "",
        };
    }

    customFocus = () => {
        console.log("customFocus...");
        this.inputRef.current?.focus();
    }

    customBlur = () => {
        console.log("customBlur...");
        this.inputRef.current?.blur();
    }

    test = () => {
        console.log("CustomInput3 test...");
    }

    render() {
        const { input } = this.state;
        return (
            <View style={styles.root}>
                <View style={[
                    styles.inputContainer,
                    { 
                        borderColor: input.length === 0 ? "#CCCCCC" : 
                        input.length === 11 ? "#0AF8B8" : "#EA8010",
                    }
                    ]}>
                    <TextInput
                        ref={this.inputRef}
                        style={styles.input} 
                        value={input}
                        onChangeText={(text) => {
                            this.setState({ input: text });
                        }}
                        />
                    <TouchableOpacity
                        onPress={() => {
                            this.setState({ input: "" });
                        }}>
                        <Image 
                            style={styles.deleteImg}
                            source={icon_delete}
                            />
                    </TouchableOpacity>
                </View>
                <View style={styles.tipLayout}>
                    { input.length === 0 ? 
                        <>
                            <Image style={styles.tipIcon} source={icon_question}/>
                            <Text style={[styles.tipTxt, { color: "#CCCCCC" }]}>请输入你的手机号</Text>
                        </> : input.length === 11 ?
                        <>
                            <Image style={styles.tipIcon} source={icon_right}/>
                            <Text style={[styles.tipTxt, { color: "#0AF8B8" }]}>输入正确，可进行提交</Text>
                        </> : 
                        <>
                            <Image style={styles.tipIcon} source={icon_error}/>
                            <Text style={[styles.tipTxt, { color: "#EA8010" }]}>格式错误，请输入正确手机号</Text>
                        </>
                    }
                    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        width: "100%",
        height: "100%",
        padding: 20,
        flexDirection: "column",
        backgroundColor: "#F0F0F0",
    },
    inputContainer: {
        width: "100%",
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 8,
        borderWidth: 2,
    },
    input: {
        flex: 1,
    },
    deleteImg: {
        width: 24,
        height: 24,
        resizeMode: "contain",
    },
    tipLayout: {
        flexDirection: "row",
        marginTop: 4,
        alignItems: "center",
    },
    tipIcon: {
        width: 20,
        height: 20,
        resizeMode: "contain",
    },
    tipTxt: {
        fontSize: 16,
        marginStart: 4,
    }
});