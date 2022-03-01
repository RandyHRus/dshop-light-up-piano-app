import React from "react";
import { StyleSheet, View } from "react-native";
import Text from "./Text";

const Card = (props: any) => {
  return (
    <View style={styles.container}>
      {props.title !== "" && <Text style={[styles.title, props.titleStyle]}>{props.title}</Text>}
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 13,
    borderRadius: 20,
    flex: 1,
    backgroundColor: "rgba(255,255,255, 0.1)",

    // shadow
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 8,
  },
  title: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 20,
  },
});

export default Card;
