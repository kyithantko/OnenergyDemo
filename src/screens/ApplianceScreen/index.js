import * as React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {ProgressBar} from 'react-native-paper';
import {COLOURS, FONTS} from '../../theme/paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';
import dayjs from 'dayjs';
import routes from '../../constants/routes';

export default function AppliancePage({navigation}) {
  const startDate = useSelector(state => state.data.startDate);

  const endDate = useSelector(state => state.data.endDate);

  let data = [
    {
      name: 'Air Conditioning',
      image: 'light.png',
      price: '40.5 SGD',
    },
    {
      name: 'Water Heater',
      image: 'heater.png',
      price: '23.5 SGD',
    },
    {
      name: 'Refrigerator',
      image: 'refrigerator.png',
      price: '69.5 SGD',
    },
    {
      name: 'Washing Machine',
      image: 'machine.png',
      price: '90.5 SGD',
    },
    {
      name: 'Electric Stove',
      image: 'stove.png',
      price: '23.5 SGD',
    },
    {
      name: 'Microwave Oven',
      image: 'oven.png',
      price: '99.5 SGD',
    },
    {
      name: 'Message Chair',
      image: 'chair.png',
      price: '45.5 SGD',
    },
  ];
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F4F2F4'}}>
      <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 16}}>
        Appliance
      </Text>
      <ScrollView
        contentContainerStyle={{alignItems: 'center'}}
        style={{
          backgroundColor: '#F4F2F4',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: '#ffffff',
            borderRadius: 28,
            paddingVertical: 10,
            paddingBottom: 20,
            width: '97%',
            paddingHorizontal: 15,
            marginTop: 25,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate(routes.CALENDAR)}>
            <EvilIcons
              name="calendar"
              size={30}
              style={{color: COLOURS.primaryFontColor, marginTop: 5}}
            />
          </TouchableOpacity>
          <View style={{flexDirection: 'column', justifyContent: 'center'}}>
            <Text style={{marginTop: -3, fontSize: 9}}>Select Date</Text>
            <Text
              style={{
                marginTop: 5,
                color: COLOURS.primaryColor,
                fontWeight: 'bold',
              }}>
              {startDate === ''
                ? 'Today'
                : dayjs(startDate).format('MMM DD, YYYY') +
                  ' - ' +
                  dayjs(endDate).format('MMM DD, YYYY')}
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate(routes.CALENDAR)}>
            <MaterialIcons
              name="keyboard-arrow-down"
              size={30}
              style={{color: COLOURS.primaryFontColor, marginTop: 5}}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '400',
            alignSelf: 'flex-start',
            marginTop: 10,
            marginLeft: 15,
          }}>
          Total Appliances : 7
        </Text>
        {data.map(x => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: '#ffffff',
              borderRadius: 10,
              paddingVertical: 10,
              paddingBottom: 20,
              width: '97%',
              paddingHorizontal: 15,
              marginTop: 15,
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: '70%',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/images/light.png')}
                style={{
                  width: '20%',
                  height: 50,
                }}
                resizeMode="contain"
              />
              <View style={{flexDirection: 'column', marginLeft: 10}}>
                <Text style={{fontWeight: 'bold'}}>{x.name}</Text>
                <Text style={{fontSize: 12, marginTop: 5}}>{x.name}</Text>
              </View>
            </View>
            <Text
              style={{
                color: COLOURS.primaryColor,
                marginTop: 15,
                fontSize: 12,
              }}>
              {x.price}
            </Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
