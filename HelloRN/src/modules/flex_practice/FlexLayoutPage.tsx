/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';



function FlexLayoutDemoScreen(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView>
        <Text>display: flex, flexDirection: row</Text>
        <View style={styles.containerRow}>
          <View style={styles.child1} />
          <View style={styles.child2} />
          <View style={styles.child3} />
        </View>
        <Text>display: flex, flexDirection: column</Text>
        <View style={styles.containerColumn}>
          <View style={styles.child1} />
          <View style={styles.child2} />
          <View style={styles.child3} />
        </View>
        <Text>display: flex, flexDirection: row, alignItems: center</Text>
        <View style={styles.containerAlignItemCenter}>
          <View style={styles.child1} />
          <View style={styles.child2} />
          <View style={styles.child3} />
        </View>
        <Text>display: flex, flexDirection: row, justifyContent: center</Text>
        <View style={styles.containerJustifyContentCenter}>
          <View style={styles.child1} />
          <View style={styles.child2} />
          <View style={styles.child3} />
        </View>
        <Text>display: flex, flexDirection: row, child1(flexGrow: 1)</Text>
        <View style={styles.containerRow}>
          <View style={styles.child1FlexGrow1} />
          <View style={styles.child2} />
          <View style={styles.child3} />
        </View>
        <Text>display: flex, flexDirection: row, child1(flexGrow: 1), child2(flexGrow: 1)</Text>
        <View style={styles.containerRow}>
          <View style={styles.child1FlexGrow1} />
          <View style={styles.child2FlexGrow1} />
          <View style={styles.child3} />
        </View>
        <Text>display: flex, flexDirection: row, child1(flexGrow: 1), child2(flexGrow: 1), child3(flexGrow: 1)</Text>
        <View style={styles.containerRow}>
          <View style={styles.child1FlexGrow1} />
          <View style={styles.child2FlexGrow1} />
          <View style={styles.child3FlexGrow1} />
        </View>
        <Text>display: flex, flexDirection: row, children(big)</Text>
        <View style={styles.containerRow}>
          <View style={styles.child1Big} />
          <View style={styles.child2Big} />
          <View style={styles.child3Big} />
        </View>
        <Text>display: flex, flexDirection: row, children(big), child2(flexShrink: 1)</Text>
        <View style={styles.containerRow}>
          <View style={styles.child1Big} />
          <View style={styles.child2BigFlexShrink1} />
          <View style={styles.child3Big} />
        </View>
        <Text>display: flex, flexDirection: row, children(big), child1(flexShrink: 1), child2(flexShrink: 1)</Text>
        <View style={styles.containerRow}>
          <View style={styles.child1BigFlexShrink1} />
          <View style={styles.child2BigFlexShrink1} />
          <View style={styles.child3Big} />
        </View>
        <Text>display: flex, flexDirection: row, children(big), child1(flexShrink: 1), child2(flexShrink: 1), child3(flexShrink: 1)</Text>
        <View style={styles.containerRow}>
          <View style={styles.child1BigFlexShrink1} />
          <View style={styles.child2BigFlexShrink1} />
          <View style={styles.child3BigFlexShrink1} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  containerColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  containerAlignItemCenter: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerJustifyContentCenter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  child1: {
    width: 60,
    height: 60,
    backgroundColor: 'red',
  },
  child2: {
    width: 120,
    height: 120,
    backgroundColor: 'yellow',
  },
  child3: {
    width: 90,
    height: 90,
    backgroundColor: 'green',
  },
  child1FlexGrow1: {
    width: 60,
    height: 60,
    backgroundColor: 'red',
    flexGrow: 1,
  },
  child2FlexGrow1: {
    width: 120,
    height: 120,
    backgroundColor: 'yellow',
    flexGrow: 1,
  },
  child3FlexGrow1: {
    width: 90,
    height: 90,
    backgroundColor: 'green',
    flexGrow: 1,
  },
  child1Big: {
    width: 120,
    height: 120,
    backgroundColor: 'red',
  },
  child2Big: {
    width: 160,
    height: 160,
    backgroundColor: 'yellow',
  },
  child3Big: {
    width: 200,
    height: 200,
    backgroundColor: 'green',
  },
  child1BigFlexShrink1: {
    width: 120,
    height: 120,
    backgroundColor: 'red',
    flexShrink: 1,
  },
  child2BigFlexShrink1:{
    width: 160,
    height: 160,
    backgroundColor: 'yellow',
    flexShrink: 1,
  },
  child3BigFlexShrink1: {
    width: 200,
    height: 200,
    backgroundColor: 'green',
    flexShrink: 1,
  },
});

export default FlexLayoutDemoScreen;
