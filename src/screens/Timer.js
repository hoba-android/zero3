import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Modal,
  ScrollView,
  Button,
} from 'react-native';

import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);

import {AnimatedCircularProgress} from 'react-native-circular-progress';
import BackgroundTimer from 'react-native-background-timer';
import moment from 'moment';
import {
  showNotification,
  hadleCancel,
  hadleScheduledNotification,
} from '../notification.android';

import {GoogleSignin} from '@react-native-google-signin/google-signin';

import Icon from 'react-native-vector-icons/Entypo';
import DatePicker from 'react-native-date-picker';
import Modal1 from 'react-native-modal';

import {useSelector, useDispatch} from 'react-redux';
import * as actions from '../store/fastActions';

const typeText = {
  13: '13',
  16: '16 : 8',
  18: '18 : 6',
  20: '20 : 4',
};

const Timer = ({route, navigation}) => {
  const [date, setDate] = useState(new Date());
  const [type, setType] = useState('16');
  const [fastedHours, setFastedHours] = useState(16);

  const [modalVisible, setModalVisible] = useState(false);

  const [timerOn, setTimerOn] = useState(false);
  const [staredTime, setStaredTime] = useState('');

  const [elepsedTime, setElepsedTime] = useState('00:00:00');

  const [elepsedPercent, setElepsedPercent] = useState(0);

  const dispatch = useDispatch();

  var fastDuration = 16;

  if (route.params !== undefined) {
    var {fastType} = route.params;
    fastDuration = +fastType;
  } else {
    var fastType = '16';
  }

  const timestamp_to_seconds = timestamp => {
    var [hours, minutes, seconds] = timestamp
      .split(':')
      .map(t => parseInt(t, 10));
    return seconds + 60 * minutes + 60 * 60 * hours;
  };

  // BackgroundTimer.runBackgroundTimer(() => {
  //   if (timerOn) {
  //     getTimeElapsed();
  //   }
  // }, 1000);

  const getTimeElapsed = () => {
    const diffInMs = new Date() - staredTime;
    const diffInHours = diffInMs / 1000 / 60 / 60;
    setFastedHours(diffInHours);

    const nowTime = moment();

    const ms = nowTime.diff(staredTime);
    var d = new Date(1000 * Math.round(ms / 1000));

    const pad = i => {
      return ('0' + i).slice(-2);
    };

    var s =
      d.getUTCHours() +
      ':' +
      pad(d.getUTCMinutes()) +
      ':' +
      pad(d.getUTCSeconds());

    const start = new Date(staredTime);
    const end = new Date();
    const ratio = ((Math.round(end - start) / start) * 100).toFixed(2);
    console.log(ratio);
    setElepsedPercent(ratio);
    setElepsedTime(s);
  };

  const startFast = () => {
    setDate(new Date());
    setStaredTime(new Date());
  };

  const endFast = () => {
    getTimeElapsed();

    setElepsedTime('00:00:00');
    setElepsedPercent(0);
    hadleScheduledNotification('Bravo', 'You completed your fasting');

    addAFast({
      id: new Date(),
      type: fastType,
      date: moment(date).format('dd mm yy'),
      duration: fastedHours,
    });
  };

  const handFastButton = () => {
    if (timerOn) {
      setTimerOn(false);
      endFast();
    } else if (timerOn == false) {
      setTimerOn(true);
      startFast();
    }
  };

  const addAFast = addedFast => {
    dispatch(actions.addFast(addedFast));
  };

  return (
    <ScrollView>
      <View style={styles.main}>
        <Modal1 isVisible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <DatePicker date={date} onDateChange={setStaredTime} />
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <Text>Update time</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal1>

        <Text style={{fontSize: 20, fontWeight: 'bold'}}>You're fasting!</Text>
        <View style={styles.fastType}>
          <Text style={{fontWeight: 'bold', fontSize: 12}}>
            {typeText[fastDuration]} TRF
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 15,
          }}>
          <AnimatedCircularProgress
            size={300}
            width={25}
            fill={elepsedPercent}
            tintColor="#F7803C"
            onAnimationComplete={() => {}}
            backgroundColor="#3d5875"
          />

          <View style={styles.col2}>
            <Text style={{fontSize: 14, marginBottom: 15}}>
              Elapsed time : {elepsedPercent} %
            </Text>
            <Text style={{fontSize: 35, marginBottom: 15}}> {elepsedTime}</Text>
          </View>
        </View>
        <View style={styles.row2}>
          <View style={styles.end2}>
            <Text style={{fontSize: 12, fontWeight: 'bold', color: 'grey'}}>
              STARTED FASTING
            </Text>
            <Text>
              {timerOn ? moment(staredTime).format('DD-MM-YY, h:mm a') : ''}
            </Text>

            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 14, color: '#F7803C', paddingRight: 5}}>
                {timerOn ? 'Edit start' : ''}
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              alignItems: 'center',
              justifyContent: 'flex-start',
              paddingVertical: 10,
            }}>
            <Text style={{fontSize: 12, fontWeight: 'bold', color: 'grey'}}>
              FAST ENDING
            </Text>
            <Text>
              {timerOn
                ? moment(staredTime)
                    .add(fastDuration, 'hours')
                    .format('DD-MM-YY, h:mm a')
                : ''}
            </Text>
          </View>
        </View>

        <TouchableOpacity onPress={handFastButton}>
          <View style={styles.endView}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#F7803C'}}>
              {timerOn ? 'End fast' : 'Start fast'}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Timer;

const styles = StyleSheet.create({
  main: {
    alignItems: 'center',
    marginTop: 15,
  },
  centeredView: {
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,

    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  endView: {
    width: 180,
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    marginBottom: 5,
    shadowColor: 'lightgrey',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,

    elevation: 1,
  },
  end2: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 10,
  },
  row2: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    width: 300,
  },
  fastType: {
    width: 110,
    height: 25,
    borderRadius: 10,
    backgroundColor: 'lightgrey',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  col2: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    paddingVertical: 10,
  },
});
