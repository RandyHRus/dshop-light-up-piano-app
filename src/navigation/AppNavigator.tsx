import React from "react";
import Home from "../screens/Home";
import FreePlay from "../screens/FreePlay";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Navigator
                initialRouteName="Home"
                screenOptions={{ headerShown: false }}
            >
                <Screen name="Home" component={Home}></Screen>
                <Screen name="Freeplay" component={FreePlay}></Screen>
            </Navigator>
        </NavigationContainer>
    );
}
