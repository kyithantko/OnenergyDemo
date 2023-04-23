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

export default function Info({navigation}) {
  const [metric, setMetric] = React.useState('monthly');
  return (
    <SafeAreaView>
      <View style={{flexDirection: 'row', marginLeft: 10}}>
        <TouchableOpacity
          size={20}
          onPress={() => navigation.navigate(routes.APPLIANCE)}>
          <Ionicons name="arrow-back-sharp" size={25} />
        </TouchableOpacity>
        <Text
          style={{
            color: COLOURS.primaryFontColor,
            fontSize: 16,
            fontWeight: '700',
            marginLeft: 10,
          }}>
          Appliance Info
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#ffffff',
          borderRadius: 28,
          paddingVertical: 10,
          paddingBottom: 50,
          paddingTop: 20,
          width: '97%',
          paddingHorizontal: 15,
          alignSelf: 'center',
          marginTop: 30,
        }}>
        <Text style={{fontWeight: '400', fontSize: 20}}>Air Conditioning</Text>
        <Text style={{fontWeight: 'bold', fontSize: 20, marginTop: 20}}>
          $ 45.02
        </Text>
      </View>
      <View
        style={{
          backgroundColor: '#ffffff',
          borderRadius: 28,
          paddingVertical: 10,
          paddingBottom: 50,
          paddingTop: 20,
          width: '97%',
          paddingHorizontal: 15,
          alignSelf: 'center',
          marginTop: 30,
        }}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              borderRightWidth: 1,
              borderRightColor: '#000000',
              width: '50%',
            }}
            onPress={() => setMetric('monthly')}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: metric === 'monthly' ? 'bold' : 'normal',
              }}>
              Monthly Metrice
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{width: '50%'}}
            onPress={() => setMetric('weekly')}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: metric === 'weekly' ? 'bold' : 'normal',
              }}>
              Weekly Metrice
            </Text>
          </TouchableOpacity>
        </View>
        {metric === 'monthly' ? (
          <>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 20,
                marginTop: 20,
                borderBottomWidth: 1,
                borderBottomColor: '#D7D6DA',
                paddingBottom: 15,
              }}>
              <Text>Average Consumption</Text>
              <Text style={{fontWeight: 'bold'}}>194.93 kwh</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 20,
                marginTop: 17,
                borderBottomWidth: 1,
                borderBottomColor: '#D7D6DA',
                paddingBottom: 15,
              }}>
              <Text>Average Cost</Text>
              <Text style={{fontWeight: 'bold'}}>SGD 45.01</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 20,
                marginTop: 17,
                borderBottomWidth: 1,
                borderBottomColor: '#D7D6DA',
                paddingBottom: 15,
              }}>
              <Text>Average Carbon Footprint</Text>
              <Text style={{fontWeight: 'bold'}}>59.03 kG</Text>
            </View>
          </>
        ) : (
          <>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 20,
                marginTop: 20,
                borderBottomWidth: 1,
                borderBottomColor: '#D7D6DA',
                paddingBottom: 15,
              }}>
              <Text>Average Consumption</Text>
              <Text style={{fontWeight: 'bold'}}>33.93 kwh</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginHorizontal: 20,
                marginTop: 17,
                borderBottomWidth: 1,
                borderBottomColor: '#D7D6DA',
                paddingBottom: 15,
              }}>
              <Text>Average Cost</Text>
              <Text style={{fontWeight: 'bold'}}>SGD 10.01</Text>
            </View>
          </>
        )}
      </View>
    </SafeAreaView>
  );
}
