import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Bluetooth from "./src/bluetooth/Bluetooth";
import Home from "./src/screens/Home";

export default function App() {
    return (
        <View style={styles.container}>
            <Bluetooth />
            <Home></Home>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
    },
});
