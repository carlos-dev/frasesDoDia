import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} />

      <TouchableOpacity style={styles.btn}>
        <Text style={styles.textBtn}>Nova frase</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor:'#536539',
    paddingHorizontal: 40,
    paddingVertical: 10,
    marginTop: 20
  },
  textBtn: {
    color: '#fff'
  }
});
