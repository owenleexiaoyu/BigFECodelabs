import React, { useState, useRef } from "react";
import { Image, Animated, TouchableOpacity } from "react-native";


import icon_heart from "../assets/icon_heart.png"
import icon_heart_empty from "../assets/icon_heart_empty.png";

type Props =  {
    size?: number;
    favorite: boolean;
    onFavoriteChange?: (favorite: boolean) => void;
}

export default (props: Props) => {

    const [favorite, setFavorite] = useState(props.favorite);
    const { size = 16 } = props;

    const scale = useRef<Animated.Value>(new Animated.Value(0)).current;
    const alpha = useRef<Animated.Value>(new Animated.Value(0)).current;

    return (
        <TouchableOpacity
            onPress={() => {
                const newValue = !favorite;
                setFavorite(newValue);
                props.onFavoriteChange?.(newValue);

                if (newValue) {
                    alpha.setValue(1);
                    const scaleAnim = Animated.timing(scale, {
                        toValue: 1.8,
                        duration: 300,
                        useNativeDriver: false,
                    });
                    const alphaAnim = Animated.timing(alpha, {
                        toValue: 0,
                        duration: 400,
                        delay: 200,
                        useNativeDriver: false,
                    });
                    Animated.parallel([scaleAnim, alphaAnim]).start();
                } else {
                    scale.setValue(0);
                    alpha.setValue(0);
                }
            }}
            >
            <Image 
                source={favorite ? icon_heart : icon_heart_empty}
                style={{
                    width: size,
                    height: size,
                    resizeMode: "cover",
                }}
                />
            <Animated.View 
                style={{
                    width: size,
                    height: size,
                    borderRadius: size / 2,
                    borderWidth: size / 20,
                    position: "absolute",
                    borderColor: "#FF2442",
                    transform: [
                        { scale: scale }
                    ],
                    opacity: alpha,
                }}
                />
        </TouchableOpacity>
    );  
}
