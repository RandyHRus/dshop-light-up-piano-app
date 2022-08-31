import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";
import Card from "../components/Card";
import Screen from "../components/Screen";
import Text from "../components/Text";

const titleIcon = require("../../assets/LightUpPiano_Logo.png");
const gradientImage = require("../../assets/gradientBackground.jpg");
const songSelectionIcon = require("../../assets/Icons_SongSelection.png");
const freeplayModeIcon = require("../../assets/Icons_FreeplayMode.png");
interface HomeScreenProps {
    navigation: any;
}

function Home(props: HomeScreenProps) {
    const onClickFreePlayMode = () => props.navigation.navigate("Freeplay");

    return (
        <Screen backgroundImage={gradientImage}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <View style={styles.titleContainer}>
                        <Image style={styles.titleIcon} source={titleIcon} />
                    </View>

                    <View style={styles.menuLayout}>
                        <View style={styles.iconLayout}>
                            <TouchableOpacity onPress={onClickFreePlayMode}>
                                <Image
                                    style={styles.icon}
                                    source={songSelectionIcon}
                                />
                            </TouchableOpacity>
                            <Text>Song Selection</Text>
                        </View>

                        <View style={styles.iconLayout}>
                            <TouchableOpacity onPress={onClickFreePlayMode}>
                                <Image
                                    style={styles.icon}
                                    source={freeplayModeIcon}
                                />
                            </TouchableOpacity>
                            <Text>Freeplay Mode</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.rightContainer}>
                    <Card>
                        <Text style={styles.productDetails}>
                            The Light Up Piano is a d-shop project that uses
                            conductive paint technology to allow you to play
                            songs and inspire fun & learning in this d-shop
                            space.
                        </Text>
                        <Text style={styles.bold}>
                            Don’t be shy to play around {"\n"} – have fun!
                        </Text>
                    </Card>
                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
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
    titleContainer: {
        height: 70,
        marginLeft: 10,
        marginTop: 20,
    },
    titleIcon: {
        left: 40,
        top: 40,
        flex: 1,
        width: 300,
    },
    menuLayout: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginTop: -70,
    },
    iconLayout: {
        flexDirection: "column",
        alignItems: "center",
        height: 100,
        paddingHorizontal: 40,
    },
    icon: {
        flex: 3,
        width: 100,
    },
    rightContainer: { flex: 1, margin: 50 },
    productDetails: {
        fontSize: 17,
        lineHeight: 49,
        padding: 15,
        alignSelf: "center",
    },
    bold: {
        alignSelf: "center",
        fontWeight: "700",
        lineHeight: 49,
        padding: 15,
    },
});

export default Home;
