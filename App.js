import React, {useEffect} from 'react';
import Navigator from './src/navigation/Navigator3';
import RNBootSplash from 'react-native-bootsplash';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  return <Navigator />;
};

export default App;
