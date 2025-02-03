import {Pressable, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const PrefinalScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{marginTop: 80, flex: 1}}>
        <Text
          style={{
            fontSize: 32,
            fontWeight: 'bold',
            fontFamily: 'GeezaPro-Bold',
            marginLeft: 20,
          }}>
          All set to register
        </Text>
        <Text
          style={{
            fontSize: 32,
            fontWeight: 'bold',
            fontFamily: 'GeezaPro-Bold',
            marginLeft: 20,
          }}>
          Setting up your profile for you
        </Text>
      </View>
      <Pressable
        onPress={() => {}}
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
          Finish Regestering
        </Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default PrefinalScreen;

const styles = StyleSheet.create({});
