import React from "react";
import { View, StyleSheet, Image, ImageBackground } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import Text from "../components/Text";

const gradientImage = require("../../assets/gradientBackground.jpg");

const FreePlay = () => <Screen backgroundImage={gradientImage}></Screen>;

export default FreePlay;
