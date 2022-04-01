import React, { useState } from "react";
import { View, StyleSheet, Image, ImageBackground } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import Text from "../components/Text";

const gradientImage = require("../../assets/gradientBackground.jpg");

function FreePlay(props: any) {
    const [displayedNote, setDisplayedNote] = useState("D");

    return (
        <Screen backgroundImage={gradientImage}>
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
});

export default FreePlay;
