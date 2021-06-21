import React, {useEffect} from 'react';
import Navigator from './src/navigation/Navigator3';
import RNBootSplash from 'react-native-bootsplash';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import PushNotification from 'react-native-push-notification';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import FastsReducer from './src/store/FastsReducer';

import ReduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
  fasts: FastsReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

const App = () => {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
