import React from "react";
import Home from "../screens/Home";
import FreePlay from "../screens/FreePlay";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

interface AppNavigatorProps {
    sendData: (data: string) => void;
}

export default function AppNavigator(props: AppNavigatorProps) {
    return (
        <NavigationContainer>
            <Navigator
                initialRouteName="Home"
                screenOptions={{ headerShown: false }}
            >
                <Screen name="Home" component={Home}></Screen>
                <Screen
                    name="Freeplay"
                    component={FreePlay}
                    initialParams={props}
                ></Screen>
            </Navigator>
        </NavigationContainer>
    );
}
