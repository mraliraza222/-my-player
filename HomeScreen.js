import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>My Player</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("VideoList")}
      >
        <Text style={styles.buttonText}>All Videos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Vault")}
      >
        <Text style={styles.buttonText}>🔒 Private Vault</Text>
      </TouchableOpacity>

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
    fontSize: 28,
    color: "#fff",
    marginBottom: 30
  },
  button: {
    backgroundColor: "#1e90ff",
    padding: 15,
    marginVertical: 10,
    width: 200,
    alignItems: "center",
    borderRadius: 10
  },
  buttonText: {
    color: "#fff",
    fontSize: 16
  }
});
