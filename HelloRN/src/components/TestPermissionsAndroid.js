import React from "react";
import { View, StyleSheet, PermissionsAndroid, Button } from "react-native";

export default () => {

    return (
        <View style={styles.root}>
            <Button 
                title="PermissionsAndroid.check & request"
                onPress={() => {
                    const permission = PermissionsAndroid.PERMISSIONS.CAMERA;
                    PermissionsAndroid.check(permission).then(agree => {
                        console.log(agree);
                        if (!agree) {
                            PermissionsAndroid.request(permission).then(status => {
                                console.log(status);
                            });
                        }
                    });
                }}
            />
            <Button 
                title="PermissionsAndroid.requestMultiple"
                onPress={() => {
                    const permissions = [PermissionsAndroid.PERMISSIONS.CAMERA, PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE];
                    PermissionsAndroid.requestMultiple(permissions).then(result => {
                       if (result["android.permission.CAMERA"] === "granted") {
                        console.log("相机权限 granted");
                       } else {
                        console.log("相机权限 denied | never_ask_again");
                       }
                       if (result["android.permission.WRITE_EXTERNAL_STORAGE"] === "granted") {
                        console.log("写磁盘 granted");
                       } else {
                        console.log("写磁盘 denied | never_ask_again");
                       }
                    });
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