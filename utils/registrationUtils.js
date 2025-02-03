import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveRegistrationProgress = async (screenName, data) => {
  try {
    const key = `registration_progress_${screenName}`;
    await AsyncStorage.setItem(key, JSON.stringify(data));
    console.log(`Progress saved for screen ${screenName}`);
  } catch (error) {
    console.log('error', error);
  }
};

export const getRegistrationProgress = async screenName => {
  try {
    const key = `registration_progress_${screenName}`;
    const progress = await AsyncStorage.getItem(key);
    return progress ? JSON.parse(progress) : null;
  } catch (error) {
    console.log('error', error);
  }
};
