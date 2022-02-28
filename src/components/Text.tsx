import React from "react";
import { StyleSheet, Text as TextRN } from "react-native";
import { NunitoSans_400Regular, NunitoSans_600SemiBold } from "@expo-google-fonts/nunito-sans";

const Text = (props: any) => {
  return <TextRN style={[styles.text, props.style]}>{props.children}</TextRN>;
};

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    fontSize: 18,
    fontFamily: "Arial",
    // fontFamily: "NunitoSans_400Regular",
  },
});

export default Text;
