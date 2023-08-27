import React, { useState } from "react";
import { View, Button } from "react-native";
import PageView from "./PageView";
import { ThemeContext } from "./ThemeContext";

export default () => {
    const [theme, setTheme] = useState("dark");
    return (
        <ThemeContext.Provider value={theme}>
            <Button 
                title={`切换到${ theme === "dark" ? "light" : "dark"}主题`}
                onPress={()=>{
                    if (theme === "dark") {
                        setTheme("light");
                    } else if (theme === "light") {
                        setTheme("dark");
                    }
                }}
                />
            <View style={{ width: "100%" }}>
                <PageView />
            </View>
        </ThemeContext.Provider>
        
    );
};