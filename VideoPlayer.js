import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Video } from "expo-av";

export default function VideoPlayer({ route, navigation }) {
  const { videoUri } = route.params;

  return (
    <View style={styles.container}>

      <Video
        source={{ uri: videoUri }}
        useNativeControls
        resizeMode="contain"
        style={styles.video}
        shouldPlay
      />

      <TouchableOpacity
        style={styles.button}
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
    justifyContent: "center"
  },
  video: {
    width: "100%",
    height: 300
  },
  button: {
    backgroundColor: "#1e90ff",
    padding: 12,
    marginTop: 20,
    alignSelf: "center",
    borderRadius: 8
  },
  buttonText: {
    color: "#fff"
  }
});
