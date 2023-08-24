import React, { useState, useImperativeHandle, forwardRef } from "react";
import { View, StyleProp, StyleSheet, Modal, ViewStyle, Text, TouchableOpacity, Image, TextInput, Button, KeyboardAvoidingView, Platform, ToastAndroid, } from "react-native"
import icon_close_modal from '../assets/icon_close_modal.png';
import { getUUID } from "../utils/UUID";
import { save, load } from "../utils/Storage";

export interface AddAccountProps {
    style?: StyleProp<ViewStyle>;
    
}

const AddAccount: React.FC<AddAccountProps> = forwardRef((props, ref) => {

    const [ visible, setVisible] = useState(false);
    const [type, setType] = useState("游戏");
    const [name, setName] = useState("");
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");

    const show = () => {
        setVisible(true);
    }

    const hide = () => {
        setVisible(false);
    }

    useImperativeHandle(ref, () => {
        return {
            show,
            hide,
        }
    });

    const renderTitle = () => {
        return (
            <View style={styles.titleLayout}>
                <Text style={styles.title}>添加账号</Text>
                <TouchableOpacity 
                    style={styles.closeButton}
                    onPress={hide}
                    activeOpacity={0.5}
                    >
                    <Image 
                        source={icon_close_modal}
                        style={styles.closeButtonIcon}
                        />
                </TouchableOpacity>
            </View>
        );
    }

    const renderTypes = () => {
        const styles = StyleSheet.create({
            typesLayout: {
                width: "100%",
                height: 32,
                flexDirection: "row",
                alignItems: "center",
            },
            tab: {
                flex: 1,
                height: "100%",
                borderWidth: 1,
                borderColor: "#C0C0C0",
                justifyContent: "center",
                alignItems: "center",
            },
            tabLeft: {
                borderTopStartRadius: 8,
                borderBottomStartRadius: 8,
            },
            tabRight: {
                borderTopEndRadius: 8,
                borderBottomEndRadius: 8,
            },
            moveLeft1Px: {
                marginStart: -1,
            },
        });
        const typesArray = ["游戏", "平台", "银行卡", "其他"];
        return (
            <View style={styles.typesLayout}>
                {typesArray.map((item, index) => {
                    return (
                        <TouchableOpacity 
                            style={[
                                styles.tab,
                                index === 0 ? 
                                    styles.tabLeft 
                                    : index === 3 ? 
                                        styles.tabRight : {},
                                index > 0 && styles.moveLeft1Px,
                                { backgroundColor: type === item ? "#3050FF" : "transparent"},
                            ]}
                            key={item}
                            activeOpacity={0.7}
                            onPress={() => {
                                setType(item);
                            }}
                            >
                            <Text style={{ color: type === item ? "white" : "#666666"}}>{item}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    }

    const renderInput = (props) => {
        const styles = StyleSheet.create({
            input: {
                width: "100%",
                height: 40,
                backgroundColor: "#F0F0F0",
                borderRadius: 8,
                paddingHorizontal: 12,
                fontSize: 16,
                color: "#333333",
            }
        });
        return (
            <TextInput 
                style={styles.input} 
                onChangeText={props.onChangeText}
                />
        );
    }

    const onSaveAccount = () => {
        if (name.length === 0 || account.length === 0 || password.length === 0) {
            ToastAndroid.show("有内容为空，请完善信息", ToastAndroid.SHORT);
            return;
        }
        const id = getUUID();
        console.log(`id=${id}, type=${type}, name=${name}, account=${account}, password=${password}`);
        const newAccount = {id, type, name, account, password};
        load("accountList").then(data => {
            let accountList = data ? JSON.parse(data) : [];
            accountList.push(newAccount);
            save("accountList", JSON.stringify(accountList)).then(() => {
                // 清除内部持有的
                setName("");
                setAccount("");
                setPassword("");
                hide();
                load("accountList").then(newData => {
                    console.log(newData);
                });
            })
        });
    }

    return (
        <Modal 
            visible={visible}
            transparent={true}
            statusBarTranslucent={true}
            animationType="fade"
            onRequestClose={hide}
        >
            <KeyboardAvoidingView 
                style={styles.root}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                >
                <View style={styles.container}>
                    { renderTitle() }
                    <Text style={styles.subtitleText}>账号类型</Text>
                    { renderTypes() }
                    <Text style={styles.subtitleText}>账号名称</Text>
                    { renderInput({
                        onChangeText: (text: string) => {
                            setName(text);
                        }
                    }) }
                    <Text style={styles.subtitleText}>账号</Text>
                    { renderInput({
                        onChangeText: (text: string) => {
                            setAccount(text);
                        }
                    }) }
                    <Text style={styles.subtitleText}>密码</Text>
                    { renderInput({
                        onChangeText: (text: string) => {
                            setPassword(text);
                        }
                    }) }
                    <View style={{marginVertical: 10}}>
                        <TouchableOpacity 
                            style={styles.submitButton}
                            activeOpacity={0.7}
                            onPress={onSaveAccount}
                        >
                            <Text style={styles.submitButtonText}>保存</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </Modal>
    );
});

const styles = StyleSheet.create({
    root: {
        width: "100%",
        height: "100%",
        backgroundColor: "#00000060",
        padding: 40,
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        backgroundColor: "white",
        borderRadius: 12,
        width: "100%",
        padding: 10,
    },
    titleLayout: {
        width: "100%",
        height: 48,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
    },
    closeButton: {
        position: "absolute",
        end: 10,
    },
    closeButtonIcon: {
        width: 28,
        height: 28,
        resizeMode: "contain",
    },
    subtitleText: {
        fontSize: 12,
        marginTop: 10,
        marginBottom: 10,
    },
    submitButton: {
        backgroundColor: "#3050FF",
        width: "100%",
        height: 42,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    submitButtonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    }
});

export default AddAccount;