import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SocketClient from "./src/socket.io/SocketClient";

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <SocketClient />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        width: "100%",
        height: "100%",
    },
});
