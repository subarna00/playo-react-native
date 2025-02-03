import {
  Alert,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  getRegistrationProgress,
  saveRegistrationProgress,
} from '../../utils/registrationUtils';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const navigation = useNavigation();
  const screenName = 'RegisterScreen';

  useEffect(() => {
    getRegistrationProgress(screenName).then(data => {
      if (data) {
        setEmail(data.email || '');
      }
    });
  }, []);

  const next = () => {
    if (email.trim() !== '') {
      saveRegistrationProgress(screenName, {email});
      navigation.navigate('PasswordScreen');
    } else {
      Alert.alert('Please enter email');
    }
  };
  return (
    <SafeAreaView>
      <View style={{padding: 13}}>
        <Text style={{fontSize: 16, fontWeight: '500'}}>
          You are almost there
        </Text>
        <View style={{flexDirection: 'column', gap: 16, marginVertical: 40}}>
          <Text>Enter Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            style={{
              padding: 15,
              borderColor: '#D0D0D0',
              borderWidth: 1,
              borderRadius: 10,
            }}
          />
          <Pressable
            onPress={next}
            style={{
              padding: 15,
              backgroundColor: email.length > 4 ? '#2dcf30' : '#E0E0E0',
            }}>
            <Text style={{textAlign: 'center'}}>Next</Text>
          </Pressable>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 15, textAlign: 'center', fontWeight: '500'}}>
            I agree to receive updates over whatsapp
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: 'gray',
              textAlign: 'center',
              marginTop: 20,
            }}>
            By signing up you agree to the terms of services and privacy and
            privacy policy
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
