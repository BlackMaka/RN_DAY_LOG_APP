import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useContext} from 'react/cjs/react.development';
import LogContext from '../contexts/LogContext';

export default function CalendarScreen() {
  const {text} = useContext(LogContext);

  return (
    <View style={styles.block}>
      <Text style={styles.text}>text : {text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {},
  text: {
    padding: 16,
    fontSize: 24,
  },
});
