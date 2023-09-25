import React, { useEffect, useState } from "react";
import { Dimensions, Image, View } from "react-native";
import { ImageSlider } from "../../../components/slidePager";

type DedatilImageSliderProps = {
    images: string[],
}

const SCREEN_WIDTH = Dimensions.get("screen").width;

export default (props: DedatilImageSliderProps) => {

    const { images } = props;
    if (!images.length) {
        return null;
    }

    const [height, setHeight] = useState<number>(400);

    useEffect(() => {
        const uri = images[0];
        Image.getSize(uri, (width: number, height: number) => {
            const showHeight = SCREEN_WIDTH * height / width;
            setHeight(showHeight);
        })
    }, [images]);

    const data: any[] = images.map(item => {
        return {
            img: item
        }
    });
    return (
        <View className="mb-8">
            <ImageSlider
                data={data}
                autoPlay={false}
                closeIconColor="white"
                caroselImageStyle={{
                    height
                }}
                indicatorContainerStyle={{
                    bottom: -40
                }}
                activeIndicatorStyle={{
                    width: 6,
                    height: 6,
                    backgroundColor: '#ff2442',
                    borderRadius: 3,
                }}
                inActiveIndicatorStyle={{
                    width: 6,
                    height: 6,
                    backgroundColor: '#c0c0c0',
                    borderRadius: 3,
                }}
            />
        </View>
    );
};