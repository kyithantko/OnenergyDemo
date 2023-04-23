import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from '../../constants/routes';
import LoginScreen from '../../screens/LoginScreen';
import TabNavigator from '../TabNavigator';
import Notification from '../../screens/HomeScreen/Notification';
import Calendar from '../../screens/HomeScreen/Calendar';
import {TouchableOpacity} from 'react-native';
import {COLOURS} from '../../theme/paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator initialRouteName={routes.LOGIN}>
      <Stack.Screen
        name={routes.LOGIN}
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={routes.TAB}
        component={TabNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={routes.NOTI}
        component={Notification}
        options={{
          title: 'Alert Notifications',
          headerShadowVisible: false,
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: COLOURS.primaryFontColor,
            fontSize: 16,
            fontWeight: '700',
            alignSelf: 'center',
          },
          headerLeft: () => (
            <TouchableOpacity
              size={20}
              onPress={() => navigation.navigate(routes.HOME)}>
              <Ionicons
                name="arrow-back-sharp"
                size={25}
                style={
                  {
                    // color: COLOURS.primary,
                  }
                }
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name={routes.CALENDAR}
        component={Calendar}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default RootNavigator;
