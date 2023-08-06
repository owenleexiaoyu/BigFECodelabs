import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import InfoCard from "./InfoCard";

export default () => {

    // chapter 6.8 
    // 箭头函数的标准写法
    // const getLevelView = () => {
    //     return (
    //         <Text style={{ fontSize: 20, marginVertical: 10, color: "orange" }}>
    //             {`等级：高级`}
    //         </Text>
    //     );
    // };

    const [levelUp, setLevelUp] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLevelUp(true);
        }, 2000);
    }, []);

    // chapter 6.8 
    // 只返回 View 的箭头函数的简略写法，省略 return
    const getLevelView = () => (
        levelUp ? 
        <Text style={{ fontSize: 24, marginVertical: 10, color: "orange" }}>
            {`等级：高级`}
        </Text> :
        <Text style={{ fontSize: 20, marginVertical: 10, color: "black" }}>
            {`等级：低级`}
        </Text>
    );

    // chapter 6.8 
    // 只返回 View 的箭头函数的简略写法，省略 return，括号
    // const getLevelView = () => 
    //     <Text style={{ fontSize: 20, marginVertical: 10, color: "orange" }}>
    //         {`等级：高级`}
    //     </Text>

    return (
        <View style={{ width: "100%", height: "100%", backgroundColor: "#F0F0F0"}}>
            <InfoCard 
                name="zhangsan"
                age={12}
                sex="男"
                levelView={getLevelView()} >
                <Text style={{ fontSize: 20, marginVertical: 10, color: "blue" }}>
                    {"爱好：唱、跳、rap、篮球"}
                </Text>
                <Text style={{ fontSize: 20, marginVertical: 10, color: "blue" }}>
                    {"地址：江苏省南京市"}
                </Text>
            </InfoCard>
        </View>
    );
};