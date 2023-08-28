import React, { useState } from "react";
import { Button, View } from "react-native";
import MemoInfoView from "./MemoInfoView";
import MemoInfoView2 from "./MemoInfoView2";
import { imageUrl } from "../constants/Url"
import CustomList from "./CustomList";


export default () => {
    const [info, setInfo] = useState<ProfileInfo>({
        name: "",
        avatar: "",
        desc: "",
    });

    return (
        <View style={{ width: "100%"}}>
            {/* <Button 
                title="获取 profile 资料"
                onPress={() => {
                    setInfo({
                        avatar: imageUrl,
                        name: "尼古拉斯·坤坤",
                        desc: "各位产品经理大家好，我是个人开发者尼古拉斯·坤坤，我学习 RN 两年半了，我喜欢安卓、RN 和 Flutter。",
                    })
                }}
            /> */}
            {/* <MemoInfoView info={info} /> */}
            {/* <MemoInfoView2 info={info} /> */}
            <CustomList />
        </View>
    );
};