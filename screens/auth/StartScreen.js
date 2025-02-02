import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {useNavigation} from '@react-navigation/native';

const StartScreen = () => {
  const navigation = useNavigation();
  const mapViews = useRef();
  const users = [
    {
      image:
        'https://images.pexels.com/photos/7208625/pexels-photo-7208625.jpeg?auto=compress&cs=tinysrgb&w=800',
      id: '1',
      latitude: '13.1295',
      longitude: '79.5977',
      name: 'sujan',
      description: 'Hey!',
    },
    {
      image:
        'https://images.pexels.com/photos/2913125/pexels-photo-2913125.jpeg?auto=compress&cs=tinysrgb&w=800',
      id: '2',
      latitude: '13.155',
      longitude: '77.6070',
      name: 'suhas',
      description: "let's play",
    },
    {
      image:
        'https://images.pexels.com/photos/1042140/pexels-photo-1042140.jpeg?auto=compress&cs=tinysrgb&w=800',
      id: '3',
      latitude: '13.0977',
      longitude: '77.5839',
      name: 'ashish',
      description: "I'm always",
    },
    {
      image:
        'https://images.pexels.com/photos/4307678/pexels-photo-4307678.jpeg?auto=compress&cs=tinysrgb&w=800',
      id: '4',
      latitude: '13.0490',
      longitude: '77.5936',
      name: 'abhi',
      description: 'At 8pm?',
    },
    {
      image:
        'https://images.pexels.com/photos/1379031/pexels-photo-1379031.jpeg?auto=compress&cs=tinysrgb&w=800',
      id: '5',
      latitude: '13.0623',
      longitude: '77.5871',
      name: 'akash',
      description: 'Hey!',
    },
    {
      image:
        'https://images.pexels.com/photos/3264235/pexels-photo-3264235.jpeg?auto=compress&cs=tinysrgb&w=800',
      id: '6',
      latitude: '13.0354',
      longitude: '77.5988',
      name: 'Preetham',
      description: 'What up?',
    },
  ];

  const BANGLORE_CORDS = {
    latitude: 12.9796,
    longitude: 77.5936,
  };

  const generateCurcularPoints = (center, radius, numPoints) => {
    const points = [];
    const angleStep = (2 * Math.PI) / numPoints;
    for (let i = 0; i < numPoints; i++) {
      const angle = i * angleStep;
      const x = center.latitude + (radius / 111) * Math.cos(angle);
      const y =
        center.longitude + (radius / (211 * Math.cos(angle))) * Math.sin(angle);
      points.push({latitude: x, longitude: y});
    }
    return points;
  };
  const numPoints = 6;
  const radius = 5; // in kms
  const circularPoints = generateCurcularPoints(
    BANGLORE_CORDS,
    radius,
    numPoints,
  );

  useEffect(() => {
    mapViews.current.fitToCoordinates(circularPoints, {
      edgePadding: {
        top: 70,
        bottom: 70,
        left: 70,
        right: 70,
      },
    });
  });

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <MapView
          ref={mapViews}
          style={{width: '100%', height: 400}}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {circularPoints?.map((point, index) => {
            const user = users[index % users.length];
            return (
              <Marker key={index} coordinate={point}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Image
                    style={{
                      width: 60,
                      height: 60,
                      resizeMode: 'cover',
                      borderRadius: 35,
                    }}
                    source={{uri: user.image}}
                  />
                </View>
                <View
                  style={{
                    backgroundColor: 'white',
                    paddingHorizontal: 10,
                    paddingVertical: 7,
                    borderRadius: 5,
                  }}>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: '500',
                      textAlign: 'center',
                      color: 'gray',
                    }}>
                    {user.description}
                  </Text>
                </View>
              </Marker>
            );
          })}
        </MapView>
        <View
          style={{
            marginTop: 35,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
              textAlign: 'center',
              width: '50%',
            }}>
            Find Player in your neighborhood
          </Text>
          <Text style={{marginTop: 20, color: 'gray', fontSize: 15}}>
            Just like you did as a kid
          </Text>
        </View>
        <Pressable
          style={{
            marginTop: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 16, color: 'gray'}}>
            Already have an account?{' '}
            <Text style={{color: 'green', fontWeight: '500'}}>Login</Text>
          </Text>
        </Pressable>
      </SafeAreaView>
      <SafeAreaView style={{marginHorizontal: 12}}>
        <Pressable
          style={{
            backgroundColor: 'green',
            padding: 10,
            borderRadius: 5,
            alignItems: 'center',
          }}
          onPress={() => navigation.navigate('RegisterScreen')}>
          <Text
            style={{
              color: 'white',
              fontSize: 16,
              textTransform: 'uppercase',
              fontWeight: '500',
            }}>
            Ready, Set , Go
          </Text>
        </Pressable>
      </SafeAreaView>
    </>
  );
};

export default StartScreen;

const styles = StyleSheet.create({});
