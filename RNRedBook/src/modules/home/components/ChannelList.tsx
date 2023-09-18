import React, { useState } from "react";
import { View, ScrollView, Text, Image, TouchableOpacity } from "react-native";

import icon_arrow from "../../../assets/icon_arrow.png";

type Props = {
    channelList: Channel[];
    onArrowPress?: () => void;
}

export default (props: Props) => {

    const { channelList } = props;
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <View className="w-full h-9 flex-row bg-white mb-1.5">
            <ScrollView
                className="flex-1 h-full"
                contentContainerStyle={{
                    flexDirection: "row",
                    alignItems: "center",
                    height: "100%"
                }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                >
                {channelList.map((item, index) => {
                    return (
                        <TouchableOpacity
                            className="w-14 h-full justify-center items-center mx-0.5"
                            key={`${item.name}-${index}`}
                            onPress={() => {
                                setSelectedIndex(index);
                            }}
                            >
                            <Text 
                                className={`text-base text-center align-middle ${selectedIndex === index ? "text-black font-bold" : "text-gray-500"}`}>
                                {item.name}
                            </Text>
                        </TouchableOpacity> 
                    );
                })}
            </ScrollView>
            <TouchableOpacity 
                className="w-9 h-9 items-center justify-center mx-2"
                onPress={() => {
                    props.onArrowPress?.();
                }}
                >
                <Image
                    className="w-4 h-4 -rotate-90"
                    source={icon_arrow} />
            </TouchableOpacity>
        </View>
    );
}