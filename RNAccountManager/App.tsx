import React, { useState, useRef, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  StatusBar,
  Switch,
  SectionList,
  Image,
  TouchableOpacity,
} from 'react-native';
import FloatingButton from './src/components/FloatingButton';
import icon_add from './src/assets/icon_add.png';
import icon_game from './src/assets/icon_game.png';
import icon_platform from './src/assets/icon_platform.png';
import icon_bank from './src/assets/icon_bank.png';
import icon_other from './src/assets/icon_other.png';
import icon_arrow from './src/assets/icon_arrow.png';
import AddAccount from './src/components/AddAccount';
import { load } from './src/utils/Storage';

function App(): JSX.Element {

  const [showPassword, setShowPassword] = useState(false);
  const [sectionData, setSectionData] = useState([]);
  const [sectionFold, setSectionFold] = useState({
    "游戏": false,
    "平台": false,
    "银行卡": false,
    "其他": false,
  });
  // const [showAddAccountDialog, setShowAddAccountDialog] = useState(false);
  const addAccountRef = useRef(null);


  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    load("accountList").then(data => {
      const accountList = data ? JSON.parse(data) : [];
      const gameList = [];
      const platformList = [];
      const bankList = [];
      const otherList = [];
      accountList.forEach(element => {
        if (element.type === "游戏") {
          gameList.push(element);
        } else if (element.type === "平台") {
          platformList.push(element);
        } else if (element.type === "银行卡") {
          bankList.push(element);
        } else if (element.type === "其他") {
          otherList.push(element);
        }
      });
      const sectionData = [
        { type: "游戏", icon: icon_game, data: gameList },
        { type: "平台", icon: icon_platform, data: platformList },
        { type: "银行卡", icon: icon_bank, data: bankList },
        { type: "其他", icon: icon_other, data: otherList },
      ];
      setSectionData(sectionData);
    });
  }

  const onAccountSaveSuccess = () => {
    loadData();
  }


  const renderItem = ({item, index, section}) => {
    const styles = StyleSheet.create({
      itemLayout: {
        width: "100%",
        flexDirection: "column",
        backgroundColor: "white",
      },
      divider: {
        width: "100%",
        height: 0.5,
        backgroundColor: "#A0A0A0",
      },
      itemInfoCntainer: {
        padding: 16,
      },
      itemName: {
        fontSize: 16,
        fontWeight: "bold",
      },
      accountLayout: {
        flexDirection: "row",
        marginTop: 10,
      },
      accountInfo: {
        flex: 1,
      }
    });
    if (sectionFold[section.type]) {
      return null;
    }
    return (
      <View style={[
        styles.itemLayout,
        { 
          borderBottomStartRadius: section.data.length - 1  === index ? 12 : 0, 
          borderBottomEndRadius: section.data.length - 1  === index ? 12 : 0, 
        }
        ]}>
        <View style={styles.divider}/>
        <View style={styles.itemInfoCntainer}>
          <Text style={styles.itemName}>{item.name}</Text>
          <View style={styles.accountLayout}>
            <Text style={styles.accountInfo}>{`账号：${item.account}`}</Text>
            <Text style={styles.accountInfo}>{`密码：${showPassword ? item.password : "******"}`}</Text>
          </View>
        </View>
      </View>
    );
  }

  const renderSectionHeader = ({section}) => {
    const styles = StyleSheet.create({
      sectionLayout: {
        width: "100%",
        height: 46,
        borderTopStartRadius: 12,
        borderTopEndRadius: 12,
        backgroundColor: "white",
        marginTop: 10,
        flexDirection: 'row',
        alignItems: "center",
      },
      sectionIcon: {
        width: 32,
        height: 32,
        marginStart: 10,
      },
      sectionTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginStart: 10,
      },
      sectionFoldButton: {
        position: 'absolute',
        padding: 10,
        end: 0,
      },
      sectionFoldIcon: {
        width: 24,
        height: 24,
        resizeMode: "contain",
      }
    });

    return (
      <View style={[
        styles.sectionLayout,
        { 
          borderBottomStartRadius: (!section.data.length || sectionFold[section.type]) ? 12 : 0, 
          borderBottomEndRadius: (!section.data.length || sectionFold[section.type]) ? 12 : 0, 
        }
        ]}>
        <Image 
          source={section.icon}
          style={styles.sectionIcon}
          />
        <Text style={styles.sectionTitle}>{section.type}</Text>
        <TouchableOpacity
          style={styles.sectionFoldButton}
          onPress={() => {
            const copy = {...sectionFold};
            copy[section.type] = !copy[section.type];
            setSectionFold(copy);
          }}
        >
          <Image 
            source={icon_arrow} 
            style={[
              styles.sectionFoldIcon,
              { transform: [{ rotate: sectionFold[section.type] ? "-90deg" : "0deg" }]}
            ]}
          />
        </TouchableOpacity>
      </View>
    );
  }

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
        <SectionList 
          sections={sectionData}
          keyExtractor={(item, index) => `${item}-${index}`}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          contentContainerStyle={styles.listContainer}
          />
        <FloatingButton 
          style={styles.addButton}
          icon={icon_add}
          onClick={() => {
            addAccountRef.current.show();
          }}
        />
        <AddAccount 
          ref={addAccountRef}
          onSave={onAccountSaveSuccess}
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
  listContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  addButton: {
    position: "absolute",
    bottom: 30,
    end: 30,
  }
});

export default App;
