import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class Header extends React.Component{
render() {
  return(
    <View style={StyleSheet.Header}>
        <Text>Book Store</Text>
    </View>
  );
}
}

const styles = StyleSheet.create({
  Header: {
    width: '100%',
    height: '15%', 
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eee'
  }
})