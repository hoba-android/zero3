import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HistoryComp = ({type, date, duration}) => {
  const typeColors = {
    13: '#66538A',
    16: '#E08372',
    18: '#438D90',
    20: '#E8AD6B',
  };

  const typeText = {
    13: '13',
    16: '16:8',
    18: '18:6',
    20: '20:4',
  };
  return (
    <View style={[styles.fastRect, {backgroundColor: typeColors[type]}]}>
      <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
        {typeText[type]}
      </Text>
      <Text style={{color: 'white', fontSize: 12}}>{date}</Text>
      <Text style={{color: 'white', fontSize: 14}}>{duration}</Text>
    </View>
  );
};

export default HistoryComp;

const styles = StyleSheet.create({
  fastRect: {
    width: 320,
    height: 80,
    borderRadius: 10,

    padding: 10,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,

    elevation: 10,
    opacity: 0.8,
  },
});
