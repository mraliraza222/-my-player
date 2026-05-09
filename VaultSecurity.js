import AsyncStorage from "@react-native-async-storage/async-storage";

// PIN save کرنا
export const savePIN = async (pin) => {
  try {
    await AsyncStorage.setItem("VAULT_PIN", pin);
    return true;
  } catch (error) {
    return false;
  }
};

// PIN check کرنا
export const checkPIN = async (inputPin) => {
  try {
    const savedPin = await AsyncStorage.getItem("VAULT_PIN");

    if (savedPin === inputPin) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

// PIN موجود ہے یا نہیں
export const hasPIN = async () => {
  const pin = await AsyncStorage.getItem("VAULT_PIN");
  return pin !== null;
};
