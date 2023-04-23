import * as React from 'react';
import {View, Text, Image} from 'react-native';
import {TextInput, Button, Checkbox} from 'react-native-paper';
import routes from '../../constants/routes';
import {COLOURS} from '../../theme/paper';

export default function Login({navigation}) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [checked, setChecked] = React.useState(false);
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff', alignItems: 'center'}}>
      <Image
        source={require('../../assets/images/Frame.png')}
        style={{width: '70%', marginTop: 110}}
        resizeMode="contain"
      />

      <TextInput
        label="Email"
        value={email}
        onChangeText={email => setEmail(email)}
        style={{width: '90%', backgroundColor: '#ffffff'}}
        outlineColor={COLOURS.primaryFontColor}
        activeOutlineColor={COLOURS.primaryFontColor}
        mode="outlined"
        left={<TextInput.Icon icon="email" />}
      />
      <TextInput
        label="Password"
        value={password}
        onChangeText={password => setPassword(password)}
        style={{width: '90%', backgroundColor: '#ffffff', marginTop: 20}}
        outlineColor={COLOURS.primaryFontColor}
        activeOutlineColor={COLOURS.primaryFontColor}
        mode="outlined"
        left={<TextInput.Icon icon="lock" />}
        right={<TextInput.Icon icon="eye" />}
      />
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
        <Checkbox.Android
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => {
            setChecked(!checked);
          }}
          color={COLOURS.primaryColor}
        />

        <Text
          style={{
            marginLeft: 6,
            color: COLOURS.primaryColor,
            // fontFamily: FONTS.fontFamily,
            fontWeight: '400',
          }}>
          Remember me
        </Text>
      </View>
      <Button
        mode="contained"
        style={{
          backgroundColor: COLOURS.primaryColor,
          width: 250,
          height: 45,
          marginTop: 10,
          borderRadius: 30,
          justifyContent: 'center',
        }}
        onPress={() => navigation.navigate(routes.TAB)}>
        Login
      </Button>
      <Text
        style={{
          marginLeft: 6,
          color: COLOURS.primaryColor,
          // fontFamily: FONTS.fontFamily,
          fontWeight: '400',
          marginTop: 15,
        }}>
        Forget Password
      </Text>
    </View>
  );
}
