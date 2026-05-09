import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function VaultScreen({ navigation }) {
  const [pin, setPin] = useState("");

  const correctPIN = "1234";

  const unlockVault = () => {
    if (pin === correctPIN) {
      alert("Vault Unlocked 🔓");
      // یہاں بعد میں hidden videos screen open ہوگی
    } else {
      alert("Wrong PIN ❌");
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>🔒 Private Vault</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter PIN"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={pin}
        onChangeText={setPin}
      />

      <TouchableOpacity style={styles.button} onPress={unlockVault}>
        <Text style={styles.buttonText}>Unlock</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: "gray" }]}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.buttonText}>Back</Text>
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
    fontSize: 24,
    color: "#fff",
    marginBottom: 20
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: "#555",
    padding: 10,
    color: "#fff",
    marginBottom: 15,
    borderRadius: 8
  },
  button: {
    backgroundColor: "#1e90ff",
    padding: 12,
    marginTop: 10,
    width: 200,
    alignItems: "center",
    borderRadius: 8
  },
  buttonText: {
    color: "#fff"
  }
});
