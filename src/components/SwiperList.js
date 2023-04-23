import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const SwiperList = () => (
  <View style={styles.container}>
    <Swiper>
      <View style={styles.slide}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Icon name="air-conditioner" size={50} />
        </View>
        <View style={{flex: 3}}>
          <View>
            <Text style={styles.text1}>Energy Saving Tip</Text>
          </View>
          <View>
            <Text style={styles.text2}>
              Run you air-con for 1 hour and switch to a fan to cool a room.
            </Text>
          </View>
          <View>
            <Text style={styles.text1}>Save about $386 a year.</Text>
          </View>
        </View>
      </View>
      <View style={styles.slide}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Icon name="kettle-alert-outline" size={50} />
        </View>
        <View style={{flex: 3}}>
          <View>
            <Text style={styles.text1}>Energy Saving Tip</Text>
          </View>
          <View>
            <Text style={styles.text2}>
              Use a thermos flask to store hot water instead of an electric
              air-pot.
            </Text>
          </View>
          <View>
            <Text style={styles.text1}>Save about $348 a year.</Text>
          </View>
        </View>
      </View>
      <View style={styles.slide}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Icon name="thermometer-lines" size={50} />
        </View>
        <View style={{flex: 3}}>
          <View>
            <Text style={styles.text1}>Energy Saving Tip</Text>
          </View>
          <View>
            <Text style={styles.text2}>
              Switch off water heater when hot water isn't needed.
            </Text>
          </View>
          <View>
            <Text style={styles.text1}>Save about $124 a year.</Text>
          </View>
        </View>
      </View>
      <View style={styles.slide}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Icon name="food-turkey" size={50} />
        </View>
        <View style={{flex: 3}}>
          <View>
            <Text style={styles.text1}>Energy Saving Tip</Text>
          </View>
          <View>
            <Text style={styles.text2}>
              Cool down hot food before storing in the fridge.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.slide}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Icon name="fridge-industrial-alert-outline" size={50} />
        </View>
        <View style={{flex: 3}}>
          <View>
            <Text style={styles.text1}>Energy Saving Tip</Text>
          </View>
          <View>
            <Text style={styles.text2}>
              Cover foods in your fridge to avoid overworking the compressor.
            </Text>
          </View>
        </View>
      </View>
    </Swiper>
  </View>
);

const styles = StyleSheet.create({
  container: {
    minHeight: 200,
  },
  slide: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 34,
  },
  text1: {
    color: 'black',
    fontSize: 14,
  },
  text2: {
    color: 'orange',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default SwiperList;
