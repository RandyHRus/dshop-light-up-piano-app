import React, { useState } from "react";
import {
    View,
    StyleSheet,
    Image,
    ImageBackground,
    TouchableOpacity,
} from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import Text from "../components/Text";

const gradientImage = require("../../assets/gradientBackground.jpg");
const backButtonIcon = require("../../assets/backButton.png");

interface FreePlayProps {
    navigation: any;
}

function FreePlay(props: FreePlayProps) {
    const [displayedNote, setDisplayedNote] = useState("D");
    console.log("BBB");
    console.log(props.navigation);
    props.route.params.sendData("test data: ");

    const onClickBackButton = () => {
        console.log(JSON.stringify(props));
        setDisplayedNote("E");
        props.navigation.navigate("Home");
    };
    //props.navigation.navigate("Home");
    return (
        <Screen backgroundImage={gradientImage}>
            <TouchableOpacity onPress={onClickBackButton}>
                <Image style={styles.backButton} source={backButtonIcon} />
            </TouchableOpacity>

            <View style={styles.container}>
                <Text style={styles.modeText}>Freeplay Mode</Text>
                <View style={styles.noteContainer}>
                    <Text style={styles.displayedNote}>{displayedNote}</Text>
                </View>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        display: "flex",
        flex: 1,
        padding: 2,
        alignItems: "center",
    },
    noteContainer: {
        flexDirection: "column",
        display: "flex",
        flex: 1,
        padding: 2,
        alignItems: "center",
        justifyContent: "center",
    },
    displayedNote: {
        fontFamily: "Nunito",
        fontSize: 200,
        fontWeight: "bold",
    },
    modeText: {
        top: 50,
        fontFamily: "Nunito",
        fontSize: 24,
        fontWeight: "bold",
    },
    backButton: {
        width: 9,
        height: 18,
        top: 85,
        left: 66,
    },
});

export default FreePlay;
