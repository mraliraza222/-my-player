import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import * as MediaLibrary from "expo-media-library";

export default function VideoList({ navigation }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();

      if (status === "granted") {
        const media = await MediaLibrary.getAssetsAsync({
          mediaType: "video",
          first: 20,
        });

        setVideos(media.assets);
      }
    })();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() =>
        navigation.navigate("VideoPlayer", { videoUri: item.uri })
      }
    >
      <Text style={styles.text}>{item.filename}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>All Videos</Text>

      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    padding: 10,
  },
  title: {
    color: "#fff",
    fontSize: 22,
    marginBottom: 10,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  text: {
    color: "#fff",
  },
});
