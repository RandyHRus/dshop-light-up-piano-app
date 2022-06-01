import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Bluetooth from "./src/bluetooth/Bluetooth";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar hidden />
            <AppNavigator />
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
