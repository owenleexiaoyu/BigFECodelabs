import React from "react";
import { Image, ImageSourcePropType, StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from "react-native"

export interface FloatingButtonProps {
    style?: StyleProp<ViewStyle>;
    icon: ImageSourcePropType;
    onClick: () => void;
}


const FloatingButton: React.FC<FloatingButtonProps> = (props) => {
    return (
        <TouchableOpacity
            style={[props.style,]}
            onPress={props.onClick}
            activeOpacity={0.5}
        >
            <Image style={styles.icon}
                source={props.icon}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    icon: {
        width: 64,
        height: 64,
        resizeMode: "contain",
    }
});

export default FloatingButton;