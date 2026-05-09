import React, { useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SplashScreen({ navigation }) {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Home");
    }, 2000); // 2 seconds splash
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Player</Text>
      <Text style={styles.subtitle}>Loading...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 32,
    color: "#1e90ff",
    fontWeight: "bold"
  },
  subtitle: {
    color: "#aaa",
    marginTop: 10
  }
});
