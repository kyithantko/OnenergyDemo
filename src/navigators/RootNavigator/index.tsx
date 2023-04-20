import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from '../../constants/routes';
import LoginScreen from '../../screens/LoginScreen';
import TabNavigator from '../TabNavigator';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={routes.LOGIN}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.LOGIN} component={LoginScreen} />
      <Stack.Screen name={routes.TAB} component={TabNavigator} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
