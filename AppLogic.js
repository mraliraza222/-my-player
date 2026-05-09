import React, { useEffect, useState } from "react";
import * as MediaLibrary from "expo-media-library";

export function useVideoData() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await MediaLibrary.requestPermissionsAsync();

      if (status === "granted") {
        const media = await MediaLibrary.getAssetsAsync({
          mediaType: "video",
          first: 50,
        });

        setVideos(media.assets);
      }
    })();
  }, []);

  return videos;
}
