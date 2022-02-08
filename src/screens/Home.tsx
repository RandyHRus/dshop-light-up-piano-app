import React from "react";
import { View, StyleSheet, Image, ImageBackground } from "react-native";
import Screen from "../components/Screen";
import Text from "../components/Text";

const gradientImage = require("../../assets/gradientBackground.jpg");

const Home = () => (
    <Screen backgroundImage={gradientImage}>
        <Text>home</Text>
    </Screen>
);

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
});

export default Home;
