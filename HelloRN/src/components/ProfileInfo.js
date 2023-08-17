import React, { useState } from "react";
import { View, StyleSheet, Text, Image, ImageBackground, TouchableOpacity, Modal, StatusBar } from "react-native";
import icon_menu from "../assets/images/icon_menu.png";
import icon_share from "../assets/images/icon_share.png";
import icon_bg from "../assets/images/icon_bg.png";
import default_avatar from "../assets/images/default_avatar.png";
import icon_add from "../assets/images/icon_add.png";
import icon_code from "../assets/images/icon_code.png";
import icon_male from "../assets/images/icon_male.png";
import icon_setting from "../assets/images/icon_setting.png";
import icon_1 from "../assets/images/icon_1.png";
import icon_2 from "../assets/images/icon_2.png";
import icon_3 from "../assets/images/icon_3.png";
import icon_close_modal from "../assets/images/icon_close_modal.png";
import SectionListDemo from "./SectionListDemo";

const footerDatas = [
    {
        image: icon_1,
        text: "用一句话，分享今天的快乐吧~",
        buttonText: "去分享"
    },
    {
        image: icon_2,
        text: "快去收藏你喜欢的作品吧~",
        buttonText: "去收藏"
    },
    {
        image: icon_3,
        text: "你还没有给作品点赞哦~",
        buttonText: "去点赞"
    }
]

export default () => {

    const NavBar = () => {
        return (
            <View
                style={styles.navBar}
            >
                <TouchableOpacity>
                    <Image style={styles.navBarIcon} source={icon_menu} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.navBarIcon} source={icon_share} />
                </TouchableOpacity>
            </View>
        );
    }

    // 头像及昵称
    const BasicInfo = () => {
        return (
            <View style={styles.basicInfo}>
                <View>
                    <Image style={styles.avatar} source={default_avatar} />
                    <TouchableOpacity>
                        <Image style={styles.fastFollow} source={icon_add} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.nickname}>OwenLee</Text>
                    <View style={styles.uidContainer}>
                        <Text style={styles.uid}>小红书号：2924354040</Text>
                        <TouchableOpacity>
                        <Image
                            style={styles.qrCodeIcon}
                            source={icon_code} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }

    const RoundedButton = (props) => {
        return (
            <TouchableOpacity
                onPress={props.onClick}
                style={styles.roundButton}>
                {props.children}
            </TouchableOpacity>
        );
    }

    const EmptyView = (props) => {
        return (
            <View style={styles.emptyView}>
                <Image
                    style={styles.emptyImage}
                    source={props.image} />
                <Text style={styles.emptyText} >{props.text}</Text>
                <TouchableOpacity style={styles.emptyButton} >
                    <Text style={styles.emptyButtonText}>{props.buttonText}</Text>
                </TouchableOpacity>
            </View>
        );
    }

    const [showFollowList, setShowFollowList] = useState(false);
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <View style={styles.root}>
            <StatusBar 
                translucent={true} 
                backgroundColor="transparent" />
            <ImageBackground
                style={styles.profileHeader}
                source={icon_bg}
            >
                {NavBar()}
                {BasicInfo()}
                <Text style={styles.description}>点击关注，填写简介</Text>
                <ImageBackground
                    style={styles.sex}
                    source={icon_male}
                    imageStyle={styles.sexIcon} />
                <View style={{ flexDirection: "row", paddingHorizontal: 20 }}>
                    <TouchableOpacity
                        style={styles.followContainer}
                        onPress={() => {
                            setShowFollowList(true);
                        }}
                    >
                        <Text style={styles.followValue}>142</Text>
                        <Text style={styles.followTitle}>关注</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.followContainer}
                        onPress={() => {
                            setShowFollowList(true);
                        }}
                    >
                        <Text style={styles.followValue}>2098</Text>
                        <Text style={styles.followTitle}>粉丝</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.followContainer}
                        onPress={() => {
                            setShowFollowList(true);
                        }}
                    >
                        <Text style={styles.followValue}>1042</Text>
                        <Text style={styles.followTitle}>获赞与收藏</Text>
                    </TouchableOpacity>
                    <View style={{ flexGrow: 1 }} />
                    <RoundedButton
                        onClick={() => {
                            console.log("click edit prpfile");
                        }}>
                        <Text style={styles.editProfile}>编辑资料</Text>
                    </RoundedButton>
                    <RoundedButton
                        onClick={() => {
                            console.log("click setting");
                        }}
                        style={{ marginStart: 10 }}>
                        <Image
                            style={styles.settingIcon}
                            source={icon_setting}
                        />
                    </RoundedButton>
                </View>
            </ImageBackground>
            <View
                style={styles.profileFooter}>
                <View style={styles.tabs}>
                    <TouchableOpacity 
                        style={styles.tabContainer}
                        onPress={() => {
                            setTabIndex(0);
                        }}
                    >
                        <Text style={ tabIndex == 0 ? styles.tabTitleSelected : styles.tabTitle}>笔记</Text>
                        <View style={tabIndex == 0 ? styles.tabIndicator : styles.tabIndicatorInvisible} />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.tabContainer}
                        onPress={() => {
                            setTabIndex(1);
                        }}
                    >
                        <Text style={tabIndex == 1 ? styles.tabTitleSelected : styles.tabTitle}>收藏</Text>
                        <View style={tabIndex == 1 ? styles.tabIndicator : styles.tabIndicatorInvisible} />
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.tabContainer}
                        onPress={() => {
                            setTabIndex(2);
                        }}
                    >
                        <Text style={tabIndex == 2 ? styles.tabTitleSelected : styles.tabTitle}>赞过</Text>
                        <View style={tabIndex == 2 ? styles.tabIndicator : styles.tabIndicatorInvisible} />
                    </TouchableOpacity>
                </View>
                <EmptyView
                    image={footerDatas[tabIndex].image}
                    text={footerDatas[tabIndex].text}
                    buttonText={footerDatas[tabIndex].buttonText}
                />

            </View>
            {showFollowList &&
                <Modal transparent={true}>
                    <View style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#00000090",
                        justifyContent: "flex-end",
                    }}>
                        <View style={{
                            width: "100%",
                            height: "75%",
                            backgroundColor: "white",
                            borderTopStartRadius: 12,
                            borderTopEndRadius: 12,
                        }}>
                            <View style={{
                                width: "100%",
                                height: 60,
                                flexDirection: "row",
                                paddingHorizontal: 20,
                                justifyContent: "flex-end",
                                alignItems: "center",
                            }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        setShowFollowList(false);
                                    }}>
                                    <Image
                                        style={{
                                            width: 30,
                                            height: 30,
                                            resizeMode: "contain",
                                        }}
                                        source={icon_close_modal}
                                    />
                                </TouchableOpacity>

                            </View>
                            <SectionListDemo />
                        </View>
                    </View>
                </Modal>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    root: {
        width: "100%",
        height: "100%",
        flexDirection: "column",
        backgroundColor: "#F0F0F0",
    },
    profileHeader: {
        width: "100%",
        height: 400,
    },
    navBar: {
        width: "100%",
        height: 50,
        marginTop: 20,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    navBarIcon: {
        width: 30,
        height: 30,
    },
    basicInfo: {
        width: "100%",
        height: 120,
        flexDirection: "row",
        paddingHorizontal: 20,
        alignItems: "center",
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginEnd: 12,
    },
    fastFollow: {
        width: 30,
        height: 30,
        position: "absolute",
        end: 5,
        bottom: 5,
    },
    nickname: {
        fontSize: 24,
        color: "white",
        fontWeight: "bold",
    },
    uidContainer: {
        flexDirection: "row",
        marginTop: 20,
        alignItems: "center",
    },
    uid: {
        color: "white",
        fontSize: 16,
        textAlignVertical: "center",
    },
    qrCodeIcon: {
        width: 14,
        height: 14,
        tintColor: "white",
        marginStart: 8,
    },
    description: {
        fontSize: 18,
        color: "white",
        marginHorizontal: 20,
        marginVertical: 5,
    },
    sex: {
        width: 36,
        height: 26,
        borderRadius: 50,
        backgroundColor: "#DDDDDD30",
        marginHorizontal: 20,
        marginVertical: 5,
    },
    sexIcon: {
        width: 16,
        height: 16,
        marginTop: 5,
        marginStart: 10,
        resizeMode: "contain",
    },
    followContainer: {
        marginEnd: 10,
        alignItems: "center",
    },
    followValue: {
        fontSize: 18,
        color: "#FFFFFF",
    },
    followTitle: {
        fontSize: 18,
        color: "#FFFFFF90",
    },
    roundButton: {
        borderRadius: 100,
        borderColor: "white",
        borderWidth: 1,
        paddingHorizontal: 16,
        paddingVertical: 4,
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
    },
    editProfile: {
        height: 24,
        fontSize: 20,
        color: "white",
        textAlignVertical: "center",
    },
    settingIcon: {
        width: 24,
        height: 24,
        tintColor: "white",
        resizeMode: "cover"
    },
    profileFooter: {
        width: "100%",
        height: "100%",
        backgroundColor: "#F0F0F0",
        borderTopStartRadius: 12,
        borderTopEndRadius: 12,
        marginTop: -60,
    },
    tabs: {
        width: "100%",
        height: 60,
        borderTopStartRadius: 12,
        borderTopEndRadius: 12,
        backgroundColor: "white",
        borderBottomColor: "#A0A0A0",
        borderBottomWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    tabContainer: {
        marginHorizontal: 15,
    },
    tabTitle: {
        fontSize: 20,
        color: "#909090",
    },
    tabTitleSelected: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",

    }, 
    tabIndicator: {
        marginTop: 5,
        width: 40,
        height: 4,
        backgroundColor: "red",
    },
    tabIndicatorInvisible: {
        marginTop: 5,
        width: 1,
        height: 4,
    },
    emptyView: {
        width: "100%",
        height: "100%",
        alignItems: "center",
    },
    emptyImage: {
        width: 160,
        height: 120,
        resizeMode: "contain",
    },
    emptyText: {
        fontSize: 18,
        marginTop: 20,
    },
    emptyButton: {
        borderRadius: 50,
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderWidth: 1,
        borderColor: "#A0A0A0",
        marginTop: 20,
    },
    emptyButtonText: {
        fontSize: 18,
    }
});