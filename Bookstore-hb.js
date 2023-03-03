import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Header from './src/Header';
import Boxes from './src/Boxes';


export default class App extends React.Component{
render() {
  return(
    <View style={StyleSheet.container}>
      <Header />
      <Boxes />
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  }
})