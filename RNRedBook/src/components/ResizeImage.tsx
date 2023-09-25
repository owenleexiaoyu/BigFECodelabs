import React, { useEffect, useState } from "react";
import { Image } from "react-native";

type Props = {
    uri: string,
    targetWidth: number,
    defaultHeight: number,
}

export default ({ uri, targetWidth, defaultHeight }: Props) => {

    const [height, setHeight] = useState(defaultHeight);
    
    useEffect(() => {
        Image.getSize(uri, (width: number, height: number) => {
            const showHeight = targetWidth * height / width;
            setHeight(showHeight);
        });
    }, [uri]);

    return (
        <Image 
            style={{
                width: targetWidth,
                height: height,
                resizeMode: "cover",
            }}
            source={{ uri: uri }}
            />
    );
}