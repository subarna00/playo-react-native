import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import VenueCard from '../components/VenueCard';

const BookScreen = () => {
  const venues = [
    {
      name: '147 One Four Seven Snooker, Billiards and Pool Sports Academy',
      rating: 4,
      deferLink: 'https://playo.page.link/ry8TT',
      fullLink:
        'https://playo.co/venue/?venueId=4ec5b58f-d58f-4ce1-8c84-2caa63007ecc',
      avgRating: 4,
      ratingCount: 3,
      lat: 12.9341796,
      lng: 77.6101537,
      icon: 'https://maps.google.com/mapfiles/kml/paddle/4-lv.png',
      filter_by: ['Pool', 'Snooker'],
      info: '\n    <h3>147 One Four Seven Snooker, Billiards and Pool Sports Academy</h3>\n    <strong>Ratings:</strong> 4 [3]<br/>\n    <strong>Sports:</strong> Pool, Snooker<br/>\n    <strong>Phone:</strong> 81059 00199<br/>\n    <a href="https://playo.page.link/ry8TT" target="_blank">https://playo.page.link/ry8TT</a><br/>\n    ',
    },
    {
      name: '33intact Clinics - Indiranagar',
      rating: 5,
      deferLink: 'https://z34v4.app.goo.gl/gNe3',
      fullLink:
        'https://playo.co/venue/?venueId=81bd286d-77b5-4fc2-adf0-26bd159ab965',
      lat: 12.97738637037637,
      lng: 77.64410844836385,
      avgRating: 5,
      ratingCount: 7,
      icon: 'https://maps.google.com/mapfiles/kml/paddle/5-lv.png',
      filter_by: [
        'Consultancy',
        'Physiotherapy',
        'Reflexology',
        'Sports Massage',
      ],
      info: '\n    <h3>33intact Clinics - Indiranagar</h3>\n    <strong>Ratings:</strong> 5 [7]<br/>\n    <strong>Sports:</strong> Consultancy, Physiotherapy, Reflexology, Sports Massage<br/>\n    <strong>Phone:</strong> 9206660840<br/>\n    <a href="https://z34v4.app.goo.gl/gNe3" target="_blank">https://z34v4.app.goo.gl/gNe3</a><br/>\n    ',
    },
    {
      avgRating: 3.55,
      name: '4S Shuttle Smash Sports Studio - Managed by Flick Sport Center',
      ratingCount: 337,
      deferLink: 'https://z34v4.app.goo.gl/q1nf',
      fullLink:
        'https://playo.co/venue/?venueId=cdbc6917-01b2-4ee1-81ef-cbeeda5b6eeb',
      lat: 12.901148,
      lng: 77.597311,
      rating: 3,
      icon: 'https://maps.google.com/mapfiles/kml/paddle/3-lv.png',
      filter_by: ['Badminton'],
      info: '\n    <h3>4S Shuttle Smash Sports Studio - Managed by Flick Sport Center</h3>\n    <strong>Ratings:</strong> 3.55 [337]<br/>\n    <strong>Sports:</strong> Badminton<br/>\n    <strong>Phone:</strong> 9743504189<br/>\n    <a href="https://z34v4.app.goo.gl/q1nf" target="_blank">https://z34v4.app.goo.gl/q1nf</a><br/>\n    ',
    },
  ];
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f5f5f5'}}>
      {/* header */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 12,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <Text>Narendra Uprety</Text>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <Ionicons name="chatbox-outline" size={24} color="black" />
          <Ionicons name="notifications-outline" size={24} color="black" />
          <Image
            style={{width: 30, height: 30, borderRadius: 15}}
            source={{
              uri: 'https://lh3.google.com/u/0/ogw/AF2bZyhfDae42KYeb2x4LAT8UnmUwkwa0d4NAC8r6LrsTiCe3w=s64-c-mo',
            }}
          />
        </View>
      </View>
      {/* search */}
      <View
        style={{
          marginHorizontal: 12,
          backgroundColor: '#E8E8E8',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 12,
          borderRadius: 25,
        }}>
        <TextInput placeholder="Search for Venues" />
        <Ionicons name="search" size={24} color="gray" />
      </View>
      {/* ------ */}
      <Pressable
        style={{
          alignItems: 'center',
          flexDirection: 'row',
          gap: 10,
          padding: 13,
        }}>
        <View
          style={{
            padding: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#E0E0E0',
          }}>
          <Text>Sports & Availablity</Text>
        </View>
        <View
          style={{
            padding: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#E0E0E0',
          }}>
          <Text>Favourites</Text>
        </View>
        <View
          style={{
            padding: 10,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: '#E0E0E0',
          }}>
          <Text>Offers</Text>
        </View>
      </Pressable>
      {/* Venues */}
      <FlatList
        data={venues}
        renderItem={({item}) => <VenueCard venue={item} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 20}}
      />
    </SafeAreaView>
  );
};

export default BookScreen;

const styles = StyleSheet.create({});
