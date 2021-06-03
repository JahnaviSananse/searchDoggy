import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput} from 'react-native';

const App = () => {
  const [demo, setDemo] = useState('');
  return (
    <SafeAreaView>
      {alert('component re-render')}
      <Text> Hii </Text>
      <TextInput
        style={styles.input}
        onChangeText={text => setDemo(text)}
        // value={number}
        placeholder="useless placeholder"
        // keyboardType="numeric"
      />
      {/* {setDemo('hi')} */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default App;
