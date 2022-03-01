import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Bluetooth from "./src/bluetooth/Bluetooth";
import Home from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FreePlay from "./src/screens/FreePlay";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <View style={styles.container}>
            <Bluetooth />
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="FreePlay" component={FreePlay} />
                </Stack.Navigator>
            </NavigationContainer>
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
