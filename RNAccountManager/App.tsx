import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  StatusBar,
  Switch,
} from 'react-native';
import FloatingButton from './src/components/FloatingButton';
import icon_add from './src/assets/icon_add.png';
import AddAccount from './src/components/AddAccount';

function App(): JSX.Element {

  const [showPassword, setShowPassword] = useState(false);
  // const [showAddAccountDialog, setShowAddAccountDialog] = useState(false);
  const addAccountRef = useRef(null);

  return (
    <SafeAreaView>
      <View style={styles.root}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="white"
        />
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
        <FloatingButton 
          style={styles.addButton}
          icon={icon_add}
          onClick={() => {
            addAccountRef.current.show();
          }}
        />
        <AddAccount ref={addAccountRef}/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F0F0F0",
    flexDirection: "column"
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
  },
  addButton: {
    position: "absolute",
    bottom: 30,
    end: 30,
  }
});

export default App;
