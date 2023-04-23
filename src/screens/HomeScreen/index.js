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
import SwiperList from '../../components/SwiperList';
import RectanglePie from '../../components/RectanglePie';

export default function HomePage({navigation}) {
  const [consump, setConsump] = React.useState('kwh');
  const [toggle, setToggle] = React.useState(false);
  const startDate = useSelector(state => state.data.startDate);

  const endDate = useSelector(state => state.data.endDate);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../../assets/images/Frame.png')}
          style={{
            width: '53%',
            height: 50,
          }}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity
        style={{alignSelf: 'flex-end', top: -45, right: 15}}
        onPress={() => navigation.navigate(routes.NOTI)}>
        <Ionicons
          name="ios-notifications-sharp"
          size={23}
          style={{color: COLOURS.primaryFontColor}}
        />
      </TouchableOpacity>
      <ScrollView
        contentContainerStyle={{alignItems: 'center'}}
        style={{
          backgroundColor: '#F4F2F4',
          marginTop: -20,
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
        <View
          style={{
            backgroundColor: '#ffffff',
            height: 350,
            borderRadius: 15,
            width: '94%',
            padding: 20,
            marginTop: 20,
          }}>
          <RectanglePie />
        </View>
        <View
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 15,
            width: '94%',
            marginTop: 20,
            padding: 10,
            paddingBottom: consump == 'sgd' ? 10 : 30,
          }}>
          <Text
            style={{
              color: COLOURS.primaryFontColor,
              fontSize: 18,
              paddingLeft: 10,
            }}>
            Your consumption data
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 8,
              marginHorizontal: 20,
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                padding: 10,
                backgroundColor:
                  consump == 'kwh' ? COLOURS.primaryColor : '#ffffff',
                borderRadius: 5,
                justifyContent: 'center',
              }}
              onPress={() => setConsump('kwh')}>
              <MaterialCommunityIcons
                name="lightning-bolt"
                size={28}
                style={{color: consump == 'kwh' ? '#111111' : 'grey'}}
              />
              <Text
                style={{
                  color: consump == 'kwh' ? '#ffffff' : 'grey',
                  fontWeight: consump == 'kwh' ? '800' : 'normal',
                  fontSize: 20,
                  marginTop: 2,
                  marginLeft: 3,
                }}>
                8.35 kWh
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                padding: 10,
                backgroundColor:
                  consump == 'sgd' ? COLOURS.primaryColor : '#ffffff',
                borderRadius: 5,
                justifyContent: 'center',
              }}
              onPress={() => setConsump('sgd')}>
              <FontAwesome
                name="dollar"
                size={25}
                style={{color: consump == 'sgd' ? '#111111' : 'grey'}}
              />
              <Text
                style={{
                  color: consump == 'sgd' ? '#ffffff' : 'grey',
                  marginLeft: 3,
                  fontWeight: consump == 'sgd' ? '800' : 'normal',
                  fontSize: 20,
                }}>
                2.61 SGD
              </Text>
            </TouchableOpacity>
          </View>
          {consump == 'sgd' && (
            <View
              style={{
                flexDirection: 'row',
                alignSelf: 'center',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  fontSize: 11,
                  color: COLOURS.primaryColor,
                  fontWeight: '700',
                }}>
                {' '}
                Select your provider
              </Text>
              <TouchableOpacity onPress={() => setToggle(!toggle)}>
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={30}
                  style={{color: '#C6C4C7'}}
                />
              </TouchableOpacity>
            </View>
          )}
          {toggle && (
            <>
              <View
                style={{
                  marginTop: 10,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}>
                <View
                  style={{
                    width: '30%',
                    borderWidth: 1,
                    borderColor: 'rgba(95, 95, 95, 0.5)',
                    borderRadius: 7,
                    justifyContent: 'center',
                    alignItems: 'center',
                    // shadowOffset: {width: -2, height: 4},
                    // shadowColor: '#171717',
                    // shadowOpacity: 0.2,
                    // shadowRadius: 3,
                  }}>
                  <Image
                    source={require('../../assets/images/provider1.png')}
                    style={{
                      width: '60%',
                      height: 20,
                    }}
                    resizeMode="contain"
                  />
                  <Text
                    style={{
                      fontSize: 8,
                      color: COLOURS.primaryFontColor,
                      width: '80%',
                      textAlign: 'center',
                      marginTop: 3,
                    }}>
                    Keppel Electric pte Ltd
                  </Text>
                  <Text
                    style={{
                      fontSize: 8,
                      color: COLOURS.primaryColor,
                      marginTop: 2,
                      paddingBottom: 5,
                    }}>
                    SGD 0.34
                  </Text>
                </View>
                <View
                  style={{
                    width: '30%',
                    borderWidth: 1,
                    borderColor: 'rgba(95, 95, 95, 0.5)',
                    borderRadius: 7,
                    justifyContent: 'center',
                    alignItems: 'center',
                    // shadowOffset: {width: -2, height: 4},
                    // shadowColor: '#171717',
                    // shadowOpacity: 0.2,
                    // shadowRadius: 3,
                  }}>
                  <Image
                    source={require('../../assets/images/provider1.png')}
                    style={{
                      width: '60%',
                      height: 20,
                    }}
                    resizeMode="contain"
                  />
                  <Text
                    style={{
                      fontSize: 8,
                      color: COLOURS.primaryFontColor,
                      width: '80%',
                      textAlign: 'center',
                      marginTop: 3,
                    }}>
                    Keppel Electric pte Ltd
                  </Text>
                  <Text
                    style={{
                      fontSize: 8,
                      color: COLOURS.primaryColor,
                      marginTop: 2,
                      paddingBottom: 5,
                    }}>
                    SGD 0.34
                  </Text>
                </View>
                <View
                  style={{
                    width: '30%',
                    borderWidth: 1,
                    borderColor: 'rgba(95, 95, 95, 0.5)',
                    borderRadius: 7,
                    justifyContent: 'center',
                    alignItems: 'center',
                    // shadowOffset: {width: -2, height: 4},
                    // shadowColor: '#171717',
                    // shadowOpacity: 0.2,
                    // shadowRadius: 3,
                  }}>
                  <Image
                    source={require('../../assets/images/provider1.png')}
                    style={{
                      width: '60%',
                      height: 20,
                    }}
                    resizeMode="contain"
                  />
                  <Text
                    style={{
                      fontSize: 8,
                      color: COLOURS.primaryFontColor,
                      width: '80%',
                      textAlign: 'center',
                      marginTop: 3,
                    }}>
                    Keppel Electric pte Ltd
                  </Text>
                  <Text
                    style={{
                      fontSize: 8,
                      color: COLOURS.primaryColor,
                      marginTop: 2,
                      paddingBottom: 5,
                    }}>
                    SGD 0.34
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  alignSelf: 'center',
                  marginTop: 7,
                  fontSize: 11,
                  color: COLOURS.primaryColor,
                  fontWeight: '700',
                }}>
                Load more
              </Text>
            </>
          )}
        </View>

        <View
          style={{
            backgroundColor: '#ffffff',
            borderRadius: 15,
            width: '94%',
            marginTop: 20,
            padding: 10,
          }}>
          <Text
            style={{
              color: COLOURS.primaryFontColor,
              fontSize: 18,
              paddingLeft: 10,
            }}>
            Comparison to the similar Condominium household in NEA study
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text
              style={{
                color: '#379D1A',
                fontWeight: '600',
                fontSize: 15,
                marginLeft: 5,
              }}>
              Difference : - 1.1 %
            </Text>
            <Text
              style={{
                color: '#379D1A',
                fontWeight: '600',
                fontSize: 15,
                marginRight: 40,
              }}>
              NORMAL
            </Text>
          </View>
          <View
            style={{backgroundColor: '#C6C4C6', height: 1, marginTop: 10}}
          />
          <View style={{marginTop: 20, marginLeft: 13}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{width: '16%'}}>Yours</Text>

              <View style={{flex: 1}}>
                <ProgressBar
                  progress={0.5}
                  color={COLOURS.primaryColor}
                  style={{
                    width: undefined,
                    height: 24,
                    marginLeft: 20,
                    borderRadius: 5,
                    backgroundColor: '#ffffff',
                  }}
                />
              </View>
            </View>
            <Text>8.4</Text>
          </View>

          <View style={{marginTop: 7, marginLeft: 13}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{width: '16%'}}>Avg</Text>

              <View style={{flex: 1}}>
                <ProgressBar
                  progress={0.5}
                  color="#C6C4C6"
                  style={{
                    width: undefined,
                    height: 24,
                    marginLeft: 20,
                    borderRadius: 5,
                    backgroundColor: '#ffffff',
                  }}
                />
              </View>
            </View>
            <Text>10.7</Text>
          </View>

          <View style={{marginTop: 7, marginLeft: 13}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{width: '16%'}}>Efficient</Text>

              <View style={{flex: 1}}>
                <ProgressBar
                  progress={0.5}
                  color="#379D1A"
                  style={{
                    width: undefined,
                    height: 24,
                    marginLeft: 20,
                    borderRadius: 5,
                    backgroundColor: '#ffffff',
                  }}
                />
              </View>
            </View>
            <Text>9.5</Text>
          </View>
        </View>
        <View
          style={{
            height: 100,
            marginBottom: 130,
            marginTop: 20,
            marginHorizontal: 15,
          }}>
          <SwiperList />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
