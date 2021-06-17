import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Button,
  Image,
  PermissionsAndroid,
} from 'react-native';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import {LoginManager, AccessToken} from 'react-native-fbsdk-next';
import auth from '@react-native-firebase/auth';

import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome';

const Login = ({navigation}) => {
  const [number, setNumber] = useState('');
  const [confirm, setConfirm] = useState(null);
  const [code, setCode] = useState('');

  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState([]);

  const androidId =
    '1072231116706-at3i3k42jj1nqi3h3pldl0v5voaq9ct4.apps.googleusercontent.com';
  const webId =
    '1072231116706-1mqd13uvgfj2agd7ltafv5u4qvn2qed5.apps.googleusercontent.com';

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: webId,
    });
  }, []);

  const signInWithPhoneNumber = async phoneNumber => {
    const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
    setConfirm(confirmation);
  };

  const confirmCode = async () => {
    try {
      await confirm.confirm(code);
      console.log('confirmed');
      navigation.navigate('Tabs');
    } catch (error) {
      console.log('Invalid code.');
    }
  };

  const EnterNumber = () => {
    return (
      <View style={{width: '90%', alignItems: 'center'}}>
        <TextInput
          style={styles.input2}
          placeholder="Mobile Number"
          value={number}
          keyboardType="name-phone-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={setNumber}
        />

        <TouchableOpacity
          style={[styles.loginButton, {width: 150, backgroundColor: '#FF6462'}]}
          onPress={() => signInWithPhoneNumber(number)}>
          <Text
            style={{fontSize: 20, fontFamily: 'CairoRegular', color: 'white'}}>
            Send code
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const ConfirmNumber = () => {
    return (
      <View style={{width: '90%', alignItems: 'center'}}>
        <TextInput
          style={styles.input2}
          placeholder="Enter code"
          value={code}
          keyboardType="name-phone-pad"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={text => setCode(text)}
        />

        <TouchableOpacity
          style={[styles.loginButton, {width: 150, backgroundColor: '#FF6462'}]}
          onPress={confirmCode}>
          <Text
            style={{fontSize: 20, fontFamily: 'CairoRegular', color: 'white'}}>
            Confirm Code
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  const faceBook = async () => {
    try {
      const result = await LoginManager.logInWithPermissions([
        'public_profile',
        'email',
      ]);

      if (result.isCancelled) {
        throw 'User cancelled the login process';
      }

      const data = await AccessToken.getCurrentAccessToken();

      if (!data) {
        throw 'Something went wrong obtaining access token';
      }

      const facebookCredential = auth.FacebookAuthProvider.credential(
        data.accessToken,
      );
      await auth().signInWithCredential(facebookCredential);
      console.log('er');
      navigation.navigate('Tabs');
    } catch (er) {
      console.log(er);
    }
  };

  const google = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const {idToken} = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      await auth().signInWithCredential(googleCredential);
      setloggedIn(true);
      console.log('logged in');
      navigation.navigate('Tabs');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <KeyboardAvoidingView>
      <View style={styles.container}>
        <Image
          source={require('../assets/logo.png')}
          style={{width: 230, height: 120, resizeMode: 'contain'}}
        />

        {!confirm ? <EnterNumber /> : <ConfirmNumber />}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '75%',
            marginVertical: 10,
          }}>
          <View style={styles.hor} />
          <Text style={{fontSize: 20, fontFamily: 'CairoRegular'}}>Or</Text>
          <View style={styles.hor} />
        </View>

        <TouchableOpacity style={styles.facebookButton} onPress={faceBook}>
          <Icon2
            name="facebook"
            size={24}
            color="white"
            style={{marginRight: 10}}
          />
          <Text
            style={{fontSize: 20, fontFamily: 'CairoRegular', color: 'white'}}>
            Login with facebook account
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.googleButton} onPress={google}>
          <Icon
            name="google"
            size={24}
            color="white"
            style={{marginRight: 10}}
          />
          <Text
            style={{fontSize: 20, fontFamily: 'CairoRegular', color: 'white'}}>
            Login with google account
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input1: {
    width: '40%',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    borderColor: 'lightgrey',
    padding: 7,
    marginVertical: 10,
    fontFamily: 'CairoRegular',
  },
  input2: {
    width: '80%',
    borderWidth: 1,
    borderRadius: 5,
    height: 40,
    borderColor: 'lightgrey',
    padding: 7,
    marginVertical: 10,
    fontFamily: 'CairoRegular',
  },
  loginButton: {
    width: '80%',
    height: 45,

    borderRadius: 25,
    backgroundColor: '#388bcb',
    padding: 7,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  newButton: {
    width: '80%',
    height: 45,

    borderRadius: 25,
    backgroundColor: 'black',
    padding: 7,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  facebookButton: {
    width: '80%',
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderRadius: 25,
    backgroundColor: '#064EB0',
    padding: 7,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleButton: {
    width: '80%',
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-around',

    borderRadius: 25,
    backgroundColor: '#DD4337',
    padding: 7,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  hor: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 2,
    width: '40%',
  },
});
