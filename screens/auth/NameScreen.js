import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  getRegistrationProgress,
  saveRegistrationProgress,
} from '../../utils/registrationUtils';

const NameScreen = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const screenName = 'NameScreen';

  useEffect(() => {
    getRegistrationProgress(screenName).then(data => {
      if (data) {
        setFirstName(data.firstName || '');
        setLastName(data.lastName || '');
      }
    });
  });
  const saveName = () => {
    if (firstName.trim() === '' || lastName.trim() === '') {
      alert('Please enter first name and last name');
      return;
    }
    saveRegistrationProgress(screenName, {firstName, lastName});
    navigation.navigate('SelectImageScreen');
  };
  return (
    <>
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{marginHorizontal: 10}}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </View>
        <View style={{marginHorizontal: 10, marginVertical: 15}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            Complete Your Profile
          </Text>
          <Text style={{marginTop: 10, color: 'gray'}}>
            What would like your mate to call you?
          </Text>
        </View>

        <View
          style={{
            backgroundColor: 'white',
            marginHorizontal: 10,
            marginVertical: 15,
            gap: 20,
            flexDirection: 'column',
          }}>
          <View>
            <Text style={{fontSize: 16, color: 'gray'}}>First Name *</Text>
            <TextInput
              value={firstName}
              onChangeText={setFirstName}
              style={{
                padding: 10,
                borderColor: '#D0D0D0',
                borderWidth: 1,
                borderRadius: 10,
                marginTop: 10,
              }}
            />
          </View>
          <View>
            <Text style={{fontSize: 16, color: 'gray'}}>Last Name *</Text>
            <TextInput
              value={lastName}
              onChangeText={setLastName}
              style={{
                padding: 10,
                borderColor: '#D0D0D0',
                borderWidth: 1,
                borderRadius: 10,
                marginTop: 10,
              }}
            />
          </View>
        </View>
      </SafeAreaView>
      <SafeAreaView>
        <Pressable
          onPress={saveName}
          style={{
            backgroundColor: '#07bc0c',
            padding: 12,
            marginHorizontal: 10,
            borderRadius: 5,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontSize: 15,
              fontWeight: '500',
            }}>
            Next
          </Text>
        </Pressable>
      </SafeAreaView>
    </>
  );
};

export default NameScreen;

const styles = StyleSheet.create({});
