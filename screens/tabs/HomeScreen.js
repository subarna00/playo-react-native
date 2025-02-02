import {
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: '',
      headerLeft: () => (
        <View>
          <Text style={{marginLeft: 15}}>Nigga</Text>
        </View>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            marginRight: 15,
          }}>
          <Ionicons name="chatbox-outline" size={24} color="green" />
          <Ionicons name="notifications-outline" size={24} color="green" />
          <Pressable>
            <Image
              style={{width: 30, height: 30, borderRadius: 15}}
              source={{
                uri: 'https://lh3.google.com/u/0/ogw/AF2bZyhfDae42KYeb2x4LAT8UnmUwkwa0d4NAC8r6LrsTiCe3w=s64-c-mo',
              }}
            />
          </Pressable>
        </View>
      ),
    });
  }, [navigation]);

  const data = [
    {
        id: '10',
        image:'https://playov2.gumlet.io/v3_homescreen/marketing_journey/Tennis%20Spotlight.png',
        ext: 'Learn Tennis',
        description: "Know more"
    },
    {
        id: '11',
        image:'https://playov2.gumlet.io/v3_homescreen/marketing_journey/playo_spotlight_08.png',
        text: 'Up Your Game',
        description: 'Find a coach',
    },
    {
        id: '12',
        image:'https://playov2.gumlet.io/v3_homescreen/marketing_journey/Tennis%20Spotlight.png',
        ext: 'Learn Tennis',
        description: "Know more"
    },
    {
        id: '13',
        image:'https://playov2.gumlet.io/v3_homescreen/marketing_journey/playo_spotlight_08.png',
        text: 'Up Your Game',
        description: 'Find a coach',
    }
  ]
  return (
    <ScrollView style={{flex: 1, backgroundColor: '#F8F8F8'}}>
      <View
        style={{
          padding: 13,
          backgroundColor: 'white',
          margin: 15,
          borderRadius: 12,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 12,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.25,
          shadowRadius: 2,
        }}>
        <View>
          <Image
            style={{width: 40, height: 40, borderRadius: 25}}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/128/785/785116.png',
            }}
          />
        </View>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
            <Text>Set Your Weekly Fit Goal</Text>
            <Image
              style={{width: 20, height: 20, borderRadius: 10}}
              source={{
                uri: 'https://cdn-icons-png.flaticon.com/128/426/426833.png',
              }}
            />
          </View>
          <Text style={{marginTop: 8, color: 'gray'}}>KEEP YOURSELF FIT</Text>
        </View>
      </View>
      <View
        style={{
          padding: 13,
          backgroundColor: 'white',
          marginVertical: 6,
          marginHorizontal: 13,
          borderRadius: 12,
        }}>
        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 4,
            backgroundColor: '#E0E0E0',
            borderRadius: 4,
            width: 200,
            marginVertical: 5,
          }}>
          <Text style={{color: '#484848', fontSize: 13}}>
            GEAR UP FOR YOUR GAME
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 16}}>Badmintion Activity</Text>
          <Pressable
            style={{
              padding: 10,
              backgroundColor: 'white',
              borderRadius: 7,
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              width: 80,
            }}>
            <Text style={{textAlign: 'center'}}>View</Text>
          </Pressable>
        </View>
        <Text style={{color: 'gray', marginTop: 4}}>
          You have no games today
        </Text>
        <Pressable
          style={{
            marginTop: 10,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: 5,
          }}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '600',
              textDecorationLine: 'underline',
            }}>
            View My Calender
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          padding: 13,
          flexDirection: 'row',
          alignItems: 'center',
          gap: 20,
        }}>
        <Pressable style={{flex: 1}}>
          <View style={{borderRadius: 10}}>
            <Image
              style={{width: 180, height: 120, borderRadius: 10}}
              source={{
                uri: 'https://images.pexels.com/photos/30356650/pexels-photo-30356650/free-photo-of-woman-sitting-with-tulip-bouquet-in-minimal-space.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
              }}
            />
          </View>
          <Pressable
            style={{
              backgroundColor: 'white',
              padding: 12,
              width: 180,
              borderRadius: 10,
            }}>
            <View>
              <Text style={{fontSize: 15, fontWeight: 500}}>Play</Text>
              <Text style={{fontSize: 15, color: 'gray', marginTop: 7}}>
                Find Playes and join their activities
              </Text>
            </View>
          </Pressable>
        </Pressable>
        <Pressable style={{flex: 1}}>
          <View style={{borderRadius: 10}}>
            <Image
              style={{width: 180, height: 120, borderRadius: 10}}
              source={{
                uri: 'https://images.pexels.com/photos/30346385/pexels-photo-30346385/free-photo-of-girl-in-field-of-lupines-holding-bouquet.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
              }}
            />
          </View>
          <Pressable
            style={{
              backgroundColor: 'white',
              padding: 12,
              width: 180,
              borderRadius: 10,
            }}>
            <View>
              <Text style={{fontSize: 15, fontWeight: 500}}>Book</Text>
              <Text style={{fontSize: 15, color: 'gray', marginTop: 7}}>
                Book your slots in venu nearby
              </Text>
            </View>
          </Pressable>
        </Pressable>
      </View>

      <View style={{padding: 13, gap: 15}}>
        <View
          style={{
            padding: 10,
            backgroundColor: 'white',
            borderRadius: 10,
            flexDirection: 'row',
            gap: 10,
          }}>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: '#29AB87',
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign name="addusergroup" size={24} color="white" />
          </View>
          <View>
            <Text style={{fontWeight: 'bold'}}>Groups</Text>
            <Text style={{marginTop: 10, color: 'gray'}}>
              Connect, Compete and Discuss
            </Text>
          </View>
        </View>
        <View
          style={{
            padding: 10,
            backgroundColor: 'white',
            borderRadius: 10,
            flexDirection: 'row',
            gap: 10,
          }}>
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              backgroundColor: 'yellow',
              padding: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Ionicons name="tennisball-outline" size={24} color="black" />
          </View>
          <View>
            <Text style={{fontWeight: 'bold'}}>Game Time Activities</Text>
            <Text style={{marginTop: 10, color: 'gray'}}>
              355 Playo hosted games
            </Text>
          </View>
        </View>
      </View>
      <View style={{padding: 13}}>
        <View style={{padding: 10, backgroundColor: 'white', borderRadius: 10}}>
          <Text style={{fontWeight: '500', fontSize: 15}}>SpotLight</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
                data?.map((item, index) => (
                    <ImageBackground imageStyle={{borderRadius: 10}} style={{width: 200, height: 280,resizeMode: 'contain', marginRight: 10, marginVertical:15 }} key={index} source={{uri: item?.image}}>

                    </ImageBackground>
                ))
            }
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
