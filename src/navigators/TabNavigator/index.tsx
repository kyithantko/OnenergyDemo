import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import routes from '../../constants/routes';
import HomeScreen from '../../screens/HomeScreen';
import SettingsScreen from '../../screens/SettingsScreen';

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={routes.HOME}
      barStyle={{backgroundColor: '#fff'}}>
      <Tab.Screen
        name={routes.HOME}
        component={HomeScreen}
        options={{tabBarIcon: 'home'}}
      />
      <Tab.Screen
        name={routes.SETTINGS}
        component={SettingsScreen}
        options={{tabBarIcon: 'camera'}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
