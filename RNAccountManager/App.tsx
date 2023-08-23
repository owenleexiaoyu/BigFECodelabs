import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  StatusBar,
  Switch
} from 'react-native';


function App(): JSX.Element {

  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.root}>
      <View>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="white"
        />
      </View>
      <View style={styles.navBar}>
        <Text style={styles.navTitle}>账号管家</Text>
        <Switch 
          style={styles.switch}
          value={showPassword}
          onValueChange={(checked) => {
            setShowPassword(checked);
          }}
        />
      </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F0F0F0",
  },
  navBar: {
    width: "100%",
    height: 52,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  navTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  switch: {
    position: "absolute",
    end: 20,
  }
});

export default App;
