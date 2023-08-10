import React, { useState } from "react";
import { View, StyleSheet, Button, Modal, Text, TouchableOpacity } from "react-native";

export default () => {
    const [dialogVisiable, setDialogVisiable] = useState(false);
    return (
        <View style={styles.root}>
            <Button title="showDialog"
                onPress={() => setDialogVisiable(true)}/>
            <Modal 
                visible={dialogVisiable}
                transparent={true}
                statusBarTranslucent={true}
                animationType="fade"
                >
                <View style={styles.dialogContainer}>
                    <View style={styles.dialog}>
                        <Text style={styles.dialogTitle}>
                            这是标题
                        </Text>
                        <Text style={styles.dialogMessage}>
                            这是弹窗的内容，这是弹窗的内容，这是弹窗的内容，这是弹窗的内容
                        </Text>
                        <View style={styles.divider}/>
                        <TouchableOpacity 
                            style={styles.dialogButton}
                            onPress={()=> setDialogVisiable(false)}
                            >
                            <Text style={styles.dialogButtonTitle}>确定</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
    dialogContainer: {
        width: "100%",
        height: "100%",
        flexDirection: "column",
        backgroundColor: "#000000A0",
        justifyContent: "center",
        alignItems: "center",
    },
    dialog: {
        width: "80%",
        height: 240,
        borderRadius: 16,
        backgroundColor: "white",
        flexDirection: "column",
        alignItems: "center",
    },
    dialogTitle: {
        fontSize: 20,
        fontWeight: "bold",
        margin: 20,
    },
    dialogMessage: {
        fontSize: 16,
        marginHorizontal: 20,
        marginBottom: 20,
        flexGrow: 1
    },
    divider: {
        width: "100%",
        height: 0.5,
        backgroundColor: "#A0A0A0A0"
    },
    dialogButton: {
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
    },
    dialogButtonTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#0077FF",
    }
});