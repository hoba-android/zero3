import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableNativeFeedback,
} from 'react-native';
import Video from 'react-native-video';

const sampleVid = 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4';
const localVid = require('../../assets/ali_08.mp4');

const VideoPlayer = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0.1);
  const [paused, setPuased] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const seekLeft = () => {};
  const seekRight = () => {};
  return (
    <View style={{width: '100%', height: '100%', flex: 1}}>
      <Video
        source={{
          uri: sampleVid,
        }}
        paused={true}
        resizeMode={'contain'}
        style={{width: 360, height: 300, margin: 10, alignSelf: 'center'}}
        controls={true}
      />
    </View>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  backgroundVideo: {
    width: 500,
    height: 400,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  overlaySet: {
    flex: 1,
    flexDirection: 'row',
  },
});
