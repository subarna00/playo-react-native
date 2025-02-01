import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Image} from 'react-native';

const PlayScreen = () => {
  const [option, setOption] = useState('My Sports');
  const [sport, setSport] = useState('Badminton');
  return (
    <SafeAreaView>
      <View style={{padding: 13, backgroundColor: '#223536'}}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: '500'}}>
              Narendra Uprety
            </Text>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="white" />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <Ionicons name="chatbox-outline" size={24} color="white" />
            <Ionicons name="notifications-outline" size={24} color="white" />
            <Image
              style={{width: 30, height: 30, borderRadius: 15}}
              source={{
                uri: 'https://lh3.google.com/u/0/ogw/AF2bZyhfDae42KYeb2x4LAT8UnmUwkwa0d4NAC8r6LrsTiCe3w=s64-c-mo',
              }}
            />
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            marginVertical: 13,
          }}>
          <Pressable onPress={() => setOption('Calender')}>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 15,
                color: option === 'Calender' ? '#12e04c' : 'white',
              }}>
              Calender
            </Text>
          </Pressable>
          <Pressable onPress={() => setOption('My Sports')}>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 15,
                color: option === 'My Sports' ? '#12e04c' : 'white',
              }}>
              My Sports
            </Text>
          </Pressable>
          <Pressable onPress={() => setOption('Other Sports')}>
            <Text
              style={{
                fontWeight: '500',
                fontSize: 15,
                color: option === 'Other Sports' ? '#12e04c' : 'white',
              }}>
              Other Sports
            </Text>
          </Pressable>
        </View>

        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Pressable
              style={{
                paddingHorizontal: 10,
                paddingVertical: 6,
                justifyContent: 'center',
                borderColor: 'white',
                marginRight: 10,
                borderRadius: 8,
                borderWidth: sport === 'Badminton' ? 0 : 1,
                backgroundColor:
                  sport === 'Badminton' ? '#1dbf22' : 'transparent',
              }}
              onPress={() => setSport('Badminton')}>
              <Text style={{color: 'white', fontSize: 15, fontWeight: '600'}}>
                Badminton
              </Text>
            </Pressable>
            <Pressable
              style={{
                paddingHorizontal: 10,
                paddingVertical: 6,
                justifyContent: 'center',
                borderColor: 'white',
                marginRight: 10,
                borderRadius: 8,
                borderWidth: sport === 'Cricket' ? 0 : 1,
                backgroundColor:
                  sport === 'Cricket' ? '#1dbf22' : 'transparent',
              }}
              onPress={() => setSport('Cricket')}>
              <Text style={{color: 'white', fontSize: 15, fontWeight: '600'}}>
                Cricket
              </Text>
            </Pressable>
            <Pressable
              style={{
                paddingHorizontal: 10,
                paddingVertical: 6,
                justifyContent: 'center',
                borderColor: 'white',
                marginRight: 10,
                borderRadius: 8,
                borderWidth: sport === 'Cycling' ? 0 : 1,
                backgroundColor:
                  sport === 'Cycling' ? '#1dbf22' : 'transparent',
              }}
              onPress={() => setSport('Cycling')}>
              <Text style={{color: 'white', fontSize: 15, fontWeight: '600'}}>
                Cycling
              </Text>
            </Pressable>
            <Pressable
              style={{
                paddingHorizontal: 10,
                paddingVertical: 6,
                justifyContent: 'center',
                borderColor: 'white',
                marginRight: 10,
                borderRadius: 8,
                borderWidth: sport === 'Running' ? 0 : 1,
                backgroundColor:
                  sport === 'Running' ? '#1dbf22' : 'transparent',
              }}
              onPress={() => setSport('Running')}>
              <Text style={{color: 'white', fontSize: 15, fontWeight: '600'}}>
                Running
              </Text>
            </Pressable>
          </ScrollView>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 10,
          backgroundColor: 'white',
        }}>
        <Pressable>
          <Text style={{fontWeight: 'bold'}}>Create Game</Text>
        </Pressable>
        <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
          <Pressable>
            <Text style={{fontWeight: 'bold'}}>Filter</Text>
          </Pressable>{' '}
          <Pressable>
            <Text style={{fontWeight: 'bold'}}>Sort</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PlayScreen;

const styles = StyleSheet.create({});
