import React, {useContext} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import LogContext from '../contexts/LogContext';

export default function FeedsScreen() {
  const {text, setText} = useContext(LogContext);
  return (
    <View style={styles.block}>
      <TextInput
        value={text}
        onChangeText={setText}
        placholder="텍스트를 입력하세요"
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {},
  input: {
    padding: 16,
    backgroundColor: 'white',
  },
});
