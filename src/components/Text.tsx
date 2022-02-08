import React from "react";
import { StyleSheet, Text as TextRN } from "react-native";

const Text = (props: any) => {
    return <TextRN style={props.style}>{props.children}</TextRN>;
};

export default Text;
