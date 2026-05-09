import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function App() {
  const [screen, setScreen] = useState("home");

  return (
    <View style={styles.container}>

      <Text style={styles.title}>My Player</Text>

      {screen === "home" && (
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>All Videos</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Folders</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setScreen("vault")}
          >
            <Text style={styles.buttonText}>🔒 Private Vault</Text>
          </TouchableOpacity>
        </View>
      )}

      {screen === "vault" && (
        <View>
          <Text style={styles.vaultText}>Enter PIN to unlock videos</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setScreen("home")}
          >
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </View>
      )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center"
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
    borderRadius: 10,
    alignItems: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 16
  },
  vaultText: {
    color: "#fff",
    marginBottom: 20
  }
});
