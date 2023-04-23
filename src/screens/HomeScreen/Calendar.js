import * as React from 'react';
import {useState} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import {COLOURS, FONTS} from '../../theme/paper';
import CalendarPicker from 'react-native-calendar-picker';
import dayjs from 'dayjs';
import {useDispatch} from 'react-redux';
import {setStartDate, setEndDate} from '../../redux/slices/dataSlice';

export default function Calendar({navigation}) {
  const [toDate, setToDate] = useState(new Date().toISOString());
  const [fromDate, setFromDate] = useState(new Date().toISOString());
  const dispatch = useDispatch();

  const onDateChange = (date, type) => {
    if (type === 'END_DATE') {
      if (date !== null) {
        setToDate(date);
        dispatch(setStartDate(date.toISOString()));
      }
    } else {
      setFromDate(date);
      setToDate(date);
      dispatch(setStartDate(date.toISOString()));
      dispatch(setEndDate(date.toISOString()));
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 0.2, backgroundColor: '#313135'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 15,
            marginTop: 20,
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color: '#ffffff', fontSize: 16}}>X</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color: COLOURS.primaryColor, fontWeight: '600'}}>
              CONFIRM
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={{color: '#ffffff', marginLeft: 15, marginTop: 30}}>
          SELECT DATE RANGE
        </Text>
        <Text
          style={{
            color: '#ffffff',
            marginLeft: 15,
            marginTop: 10,
            fontSize: 20,
            fontWeight: '600',
          }}>
          {dayjs(fromDate).format('MMM DD')} - {dayjs(toDate).format('MMM DD')}
        </Text>
      </View>
      <View style={{flex: 0.8, backgroundColor: '#1D1B21'}}>
        <CalendarPicker
          onDateChange={onDateChange}
          allowRangeSelection={true}
          style={{backgroundColor: '#1D1B21'}}
          todayBackgroundColor={COLOURS.primaryColor}
          selectedDayColor="blue"
          textStyle={{color: '#AAA8AE'}}
          todayTextStyle={{color: '#ffffff'}}
          selectedRangeStyle={{backgroundColor: '#111111'}}
          selectedDayTextStyle={{color: '#ffffff'}}
          disabledDatesTextStyle={{color: '#39383E'}}
          selectedRangeStartStyle={{backgroundColor: COLOURS.primaryColor}}
          selectedRangeEndStyle={{backgroundColor: COLOURS.primaryColor}}
        />
      </View>
    </SafeAreaView>
  );
}
