import AsyncStorage from '@react-native-async-storage/async-storage';

export async function logAsyncStorage() {
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }
  const storageKeys = await AsyncStorage.getAllKeys();

  if (storageKeys) {
    const storageItems = await AsyncStorage.multiGet(storageKeys);
    const storageData = storageItems.reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});
    console.log('CURRENT STORAGE: ', storageData);
  }
}
