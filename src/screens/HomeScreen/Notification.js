import * as React from 'react';
import {useState, useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {COLOURS} from '../../theme/paper';

export default function Notification({navigation}) {
  return (
    <ScrollView style={{backgroundColor: '#ffffff'}}>
      <View
        style={{
          marginTop: 15,
          backgroundColor: '#E8E6E9',
          borderRadius: 10,
          padding: 10,
          paddingLeft: 20,
          width: '90%',
          alignSelf: 'center',
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              color: COLOURS.primaryColor,
              fontSize: 14,
              fontWeight: '600',
            }}>
            Appliance Fault
          </Text>
          <Text style={{fontSize: 10, color: '#555459', marginTop: -3}}>
            today, 15:34 PM
          </Text>
        </View>
        <Text
          style={{
            color: COLOURS.primaryFontColor,
            fontWeight: '600',
            fontSize: 12,
            marginTop: 8,
          }}>
          Water Heater showing high energy load than usual
        </Text>
      </View>
      <View
        style={{
          marginTop: 15,
          backgroundColor: '#E8E6E9',
          borderRadius: 10,
          padding: 10,
          paddingLeft: 20,
          width: '90%',
          alignSelf: 'center',
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text
            style={{
              color: COLOURS.primaryColor,
              fontSize: 14,
              fontWeight: '600',
            }}>
            Appliance Fault
          </Text>
          <Text style={{fontSize: 10, color: '#555459', marginTop: -3}}>
            today, 15:34 PM
          </Text>
        </View>
        <Text
          style={{
            color: COLOURS.primaryFontColor,
            fontWeight: '600',
            fontSize: 12,
            marginTop: 8,
          }}>
          Water Heater showing high energy load than usual
        </Text>
      </View>
    </ScrollView>
  );
}
