import React, {useState} from 'react';
import {
  Text,
  Image,
  Button,
  SafeAreaView,
  TextInput,
  StyleSheet,
} from 'react-native';
import axios from 'axios';

export default function doggy() {
  const [data, setData] = useState({});
  const [name, setName] = useState({});

  const apiCall = () => {
    axios
      .get(`https://dog.ceo/api/breed/${name}/images/random`)
      .then(res => setData(res.data));
  };
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        placeholder="Enter doggies name here"
        onChangeText={text => setName(text)}
      />
      <Button title="Learn More" color="#841584" onPress={() => apiCall()} />
      <Image style={styles.stretch} source={{uri: data.message}} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
  stretch: {
    width: 200,
    height: 200,
    resizeMode: 'stretch',
  },
});
