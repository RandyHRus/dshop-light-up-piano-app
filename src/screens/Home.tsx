import React from "react";
import { View, StyleSheet, Image, ImageBackground } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import Text from "../components/Text";

const titleIcon = require("../../assets/LightUpPiano_Logo.png");
const gradientImage = require("../../assets/gradientBackground.jpg");
const songSelectionIcon = require("../../assets/Icons_SongSelection.png");
const freeplayModeIcon = require("../../assets/Icons_FreeplayMode.png");

const Home = () => (
    <Screen backgroundImage={gradientImage}>
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <View style={styles.titleContainer}>
                    <Image style={styles.titleIcon} source={titleIcon} />
                </View>

                <View style={styles.menuLayout}>
                    <View style={styles.iconLayout}>
                        <Image style={styles.icon} source={songSelectionIcon} />
                        <Text>Song Selection</Text>
                    </View>

                    <View style={styles.iconLayout}>
                        <Image style={styles.icon} source={freeplayModeIcon} />
                        <Text>Freeplay Mode</Text>
                    </View>
                </View>
            </View>

            <View style={styles.rightContainer}>
                <Card>
                    <Text style={styles.productDetails}>
                        The Light Up Piano is a d-shop project that uses
                        conductive paint technology to allow you to play songs
                        and inspire fun & learning in this d-shop space.
                    </Text>
                    <Text style={styles.bold}>
                        Don’t be shy to play around – have fun!
                    </Text>
                </Card>
            </View>
        </View>
    </Screen>
);

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    container: {
        flexDirection: "row",
        flex: 1,
        padding: 2,
    },
    leftContainer: {
        display: "flex",
        flex: 2,
        flexDirection: "column",
    },
    titleContainer: { alignSelf: "flex-start" },
    titleIcon: { flex: 1, width: 350, height: 100, resizeMode: "contain" },
    menuLayout: {
        flexDirection: "row",
        flex: 1,
        // border: "1px solid black",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },
    iconLayout: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        height: 200,
        paddingHorizontal: 4,
    },
    icon: {
        flex: 1,
        width: 125,
        height: 125,
        resizeMode: "contain",
        marginBottom: 50,
    },
    rightContainer: { flex: 1 },
    productDetails: {
        lineHeight: 40,
        padding: 15,
    },
    bold: {
        fontWeight: "700",
        lineHeight: 30,
        //padding: "15px",
    },
});

export default Home;
