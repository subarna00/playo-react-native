import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {saveRegistrationProgress} from '../../utils/registrationUtils';

const PasswordScreen = () => {
  const navigation = useNavigation();
  const [password, setPassword] = useState('');
  const screenName = 'PasswordScreen';
  const handleNext = () => {
    if (password.trim() !== '') {
      saveRegistrationProgress(screenName, {password});
      navigation.navigate('NameScreen');
    } else {
      Alert.alert('Please enter password');
    }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{marginTop: 90, marginHorizontal: 20}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              borderWidth: 2,
              borderColor: 'green',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <AntDesign name="lock1" size={24} color="green" />
          </View>
          <Image
            style={{width: 100, height: 40}}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/10613/10613685.png',
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 25,
            fontWeight: 'bold',
            fontFamily: 'Geeza-Bold',
            marginTop: 15,
          }}>
          Please choose a password
        </Text>
        <TextInput
          placeholder="Enter your password"
          autoFocus="true"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
          style={{
            width: 340,
            marginVertical: 10,
            marginTop: 25,
            borderBlockColor: 'black',
            borderBottomWidth: 1,
            paddingBottom: 10,
            fontFamily: 'Geeza-Bold',
            fontSize: password ? 22 : 22,
          }}
        />
        <Text style={{color: 'gray', fontSize: 15, marginTop: 7}}>
          Note: Your details will be safe with us
        </Text>
        <TouchableOpacity
          onPress={handleNext}
          activeOpacity={0.8}
          style={{marginTop: 30, marginLeft: 'auto'}}>
          <MaterialCommunityIcons
            name="arrow-right-circle"
            size={45}
            color="green"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PasswordScreen;

const styles = StyleSheet.create({});
