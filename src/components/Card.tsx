import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import Text from "./Text";

const noiseImage = require("../../assets/noise.png");

const Card = (props: any) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={noiseImage} style={styles.backgroundImage}>
                {props.title !== "" && (
                    <Text style={[styles.title, props.titleStyle]}>
                        {props.title}
                    </Text>
                )}
                {props.children}
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        //padding: 13,
        borderRadius: 24,
        flex: 1,
        backgroundColor: "rgba(255,255,255, 0.1)",

        // shadow
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    title: {
        color: "#fff",
        fontWeight: "700",
        fontSize: 20,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
    },
});

export default Card;
