import * as MediaLibrary from "expo-media-library";

export async function getPermissions() {
  const { status } = await MediaLibrary.requestPermissionsAsync();

  if (status !== "granted") {
    alert("Permission denied! Videos cannot be accessed.");
    return false;
  }

  return true;
}
