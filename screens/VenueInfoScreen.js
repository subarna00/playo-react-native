import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Pressable,
} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Amenities from '../components/Amenities';
const VenueInfoScreen = () => {
  const route = useRoute();
  const venue = route.params?.venue;

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <ScrollView>
          <>
            <View>
              <Image
                source={{
                  uri: 'https://images.pexels.com/photos/29557555/pexels-photo-29557555/free-photo-of-dreamy-outdoor-portrait-in-a-field-of-tall-grasses.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load',
                }}
                style={{
                  width: '100%',
                  height: 200,
                  resizeMode: 'cover',
                }}
              />
            </View>
            <View style={{padding: 10}}>
              <Text style={{}}>{venue?.name ?? 'Venue Name'}</Text>
              <View
                style={{
                  marginTop: 5,
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 5,
                }}>
                <IonIcons name="time-outline" size={24} color="black" />
                <Text style={{fontSize: 15, fontWeight: '500'}}>
                  6:00 AM - 10:00 PM
                </Text>
              </View>
              <View
                style={{
                  marginTop: 5,
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 5,
                }}>
                <IonIcons name="location-outline" size={24} color="black" />
                <Text style={{fontSize: 14, width: '80%', fontWeight: '500'}}>
                  {venue?.location ?? 'Venue Location'}
                </Text>
              </View>
            </View>
            <View
              style={{
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  {[0, 0, 0, 0, 0].map((i, j) => (
                    <FontAwesome
                      style={{paddingHorizontal: 3}}
                      name={j < Math.floor(venue.rating) ? 'star' : 'star-o'}
                      size={15}
                      color="#FFD700"
                    />
                  ))}
                  <Text>{venue.rating} (9 ratings)</Text>
                </View>
                <Pressable
                  style={{
                    marginTop: 6,
                    width: 160,
                    borderColor: '#686868',
                    borderWidth: 1,
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 10,
                  }}>
                  <Text>Rate Venue</Text>
                </Pressable>
              </View>
              <View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text>100 total Activities</Text>
                </View>
                <Pressable
                  style={{
                    marginTop: 6,
                    width: 160,
                    borderColor: '#686868',
                    borderWidth: 1,
                    borderRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 10,
                  }}>
                  <Text>1 Upcomming</Text>
                </Pressable>
              </View>
            </View>
            <Text
              style={{fontSize: 16, fontWeight: '500', marginHorizontal: 10}}>
              Sports Available
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {venue.sportsAvailable?.map((sport, i) => (
                <View
                  style={{
                    borderColor: '#686868',
                    margin: 10,
                    padding: 20,
                    width: 130,
                    height: 90,
                    borderWidth: 1,
                    borderRadius: 5,
                  }}>
                  <MaterialCommunityIcons
                    style={{textAlign: 'center'}}
                    name={sport.icon}
                    size={24}
                    color="gray"
                  />
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      marginTop: 10,
                    }}>
                    {sport.name}
                  </Text>
                </View>
              ))}
            </ScrollView>
            <Amenities />
            <View style={{marginHorizontal: 10}}>
              <Text style={{fontSize: 15, fontWeight: 'bold'}}>Activities</Text>
              <Pressable
                style={{
                  borderColor: '#787878',
                  marginTop: 10,
                  borderWidth: 1,
                  padding: 10,
                  justifyContent: 'center',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 10,
                  borderRadius: 5,
                }}>
                <AntDesign name="plus" size={24} color="black" />
                <Text>Create Activity</Text>
              </Pressable>
            </View>
          </>
        </ScrollView>
      </SafeAreaView>
      <SafeAreaView>
        <Pressable
          style={{
            backgroundColor: 'green',
            padding: 8,
            borderRadius: 5,
            marginHorizontal: 15,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontWeight: 'bold',
              marginVertical: 6,
            }}>
            Book Now
          </Text>
        </Pressable>
      </SafeAreaView>
    </>
  );
};

export default VenueInfoScreen;
