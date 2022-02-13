import React from "react";
import { View, StyleSheet, Image, ImageBackground } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import Text from "../components/Text";

const gradientImage = require("../../assets/gradientBackground.jpg");
const songSelectionIcon = require("../../assets/Icons_SongSelection.png");
const freeplayModeIcon = require("../../assets/Icons_FreeplayMode.png");

const Home = () => (
  <Screen backgroundImage={gradientImage}>
    <View style={styles.titleContainer}>
      <Text>D-SHOP</Text>
      <Text>LIGHT UP PIANO</Text>
    </View>
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <View style={styles.iconLayout}>
          <Image style={styles.icon} source={songSelectionIcon} />
          <Text>Song Selection</Text>
        </View>

        <View style={styles.iconLayout}>
          <Image style={styles.icon} source={freeplayModeIcon} />
          <Text>Freeplay Mode</Text>
        </View>
      </View>

      <View style={styles.rightContainer}>
        <Card>
          <Text style={styles.productDetails}>
            The Light Up Piano is a d-shop project that uses conductive paint technology to allow you to play songs
            and inspire fun & learning in this d-shop space.
          </Text>
          <Text style={styles.bold}>Don’t be shy to play around – have fun!</Text>
        </Card>
      </View>
    </View>
  </Screen>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  titleContainer: {},
  container: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    margin: "0 0 1em 0",
    padding: "1em",
    border: " 1px solid black",
  },
  leftContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: "10vw",
  },
  iconLayout: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    marginRight: "10vw",
    padding: "1em",
    // border: " 1px solid black",
  },
  icon: {
    flex: 1,
    width: 125,
    height: 125,
    resizeMode: "contain",
  },
  rightContainer: { flex: 1, margin: "45px" },
  productDetails: { lineHeight: 30, padding: "15px" },
  bold: {
    fontWeight: "700",
    lineHeight: 30,
    padding: "15px",
  },
});

export default Home;
