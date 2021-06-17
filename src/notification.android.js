import PushNotification from 'react-native-push-notification';

const showNotification = (title, message) => {
  PushNotification.localNotification({
    title: title,
    message: message,
    largeIcon: 'zero_launcher_round',
    smallIcon: 'zero_launcher_round',
    channelId: 'your-channel-id',
    soundName: 'juntos.mp3',
  });
};

const hadleScheduledNotification = (title, message) => {
  PushNotification.localNotificationSchedule({
    title: title,
    message: message,
    date: new Date(Date.now() + 5 * 1000),
  });
};

const hadleCancel = () => {
  PushNotification.cancelAllLocalNotifications();
};

export {showNotification, hadleCancel, hadleScheduledNotification};
