import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const data = [
  {percent: 40, color: '#DF5341', pertext: '40%', text: 'Air Con'},
  {percent: 20, color: '#555459', pertext: '20%', text: 'Water Heater'},
  {percent: 15, color: '#343235', pertext: '15%', text: 'Water Heater'},
  {percent: 25, color: '#D3D0D3', pertext: '25%', text: 'Water Heater'},
];

const RectanglePie = () => {
  //   const highestPercent = Math.max(...data.map(item => item.percent));
  let total = 0;
  for (let i = 0; i < data.length; i++) {
    total += data[i].percent;
  }

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <View style={[styles.rectangle, {backgroundColor: data[0].color}]}>
          <Text style={styles.text}>{data[0].pertext}</Text>
          <Text style={styles.text}>{data[0].text}</Text>
        </View>
      </View>
      <View style={styles.column}>
        {data.slice(1).map((item, index) => (
          <View
            key={item.percent / total}
            style={{
              flex: item.percent / total,
              backgroundColor: item.color,
              justifyContent: 'flex-end',
              paddingLeft: 10,
              paddingBottom: 5,
              borderWidth: 0.9,
              borderColor: '#000000',
            }}>
            <Text style={[styles.text, {marginLeft: 10}]}>{item.pertext}</Text>
            <Text style={styles.text}>{item.text}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#ffffff',
  },
  column: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rectangle: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingLeft: 10,
    paddingBottom: 5,
    borderWidth: 0.9,
    borderColor: '#000000',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default RectanglePie;
