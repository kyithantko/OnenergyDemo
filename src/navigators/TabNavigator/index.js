import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import routes from '../../constants/routes';
import HomeScreen from '../../screens/HomeScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import AppliancePage from '../../screens/ApplianceScreen';

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
        name={routes.APPLIANCE}
        component={AppliancePage}
        options={{tabBarIcon: 'usb-port'}}
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
