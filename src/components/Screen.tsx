import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

const Screen = (props: any) => {
    return (
        <View style={styles.view}>
            <ImageBackground
                source={props.backgroundImage}
                style={styles.background}
            >
                {props.children}
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    background: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
});
export default Screen;
