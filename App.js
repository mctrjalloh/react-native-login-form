import React from "react";
import { StyleSheet, Text, TextInput, View, Image, Button } from "react-native";
import LogIn from "./src/components/login";

export default class App extends React.Component {
  // this.imgs = assets/img/github-mark.png
  render() {
    return (
      <View style={styles.container}>
        <LogIn />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end"
  }
});
