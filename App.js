import React from "react";
import { StyleSheet, Text, TextInput, View, Image, Button } from "react-native";

export default class App extends React.Component {
  // this.imgs = assets/img/github-mark.png
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ flex: 1 }}>Login With</Text>

        <View style={{ flex: 1, flexDirection: "row" }}>
          <View
            style={{ width: 50, height: 50, backgroundColor: "powderblue" }}
          />
          <View style={{ width: 50, height: 50, backgroundColor: "skyblue" }} />
          <View
            style={{ width: 50, height: 50, backgroundColor: "steelblue" }}
          />
        </View>

        <View style={{ flex: 3, flexDirection: "column" }}>
          <TextInput
            style={{
              width: 250,
              height: 40,
              borderColor: "gray"
            }}
            textContentType="username"
            value="Username"
          />
          <TextInput
            style={{
              width: 250,
              height: 40,
              borderColor: "gray"
            }}
            textContentType="password"
            value="Password"
          />
          <Button title="LOGIN" onPress={() => alert("Loged In")} />
        </View>

        <Text>Looking to create an account?</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
