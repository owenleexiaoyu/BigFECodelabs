import React, { useEffect, useState } from "react";
import { Dimensions, Image } from "react-native";

type Props = {
    uri: string,
}

const SCREEN_WIDTH = Dimensions.get("screen").width;
const SHOW_WIDTH = (SCREEN_WIDTH - 18) / 2;

export default ({ uri }: Props) => {

    const [height, setHeight] = useState(200);
    
    useEffect(() => {
        Image.getSize(uri, (width: number, height: number) => {
            const showHeight = SHOW_WIDTH * height / width;
            setHeight(showHeight);
        })
    }, [uri]);

    return (
        <Image 
            style={{
                width: SHOW_WIDTH,
                height: height,
                resizeMode: "cover",
            }}
            source={{ uri: uri }}
            />
    );
}