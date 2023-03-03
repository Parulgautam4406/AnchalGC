import React, {useState} from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function App() {

  const[name, setname] = useState('Welcome to the Book-Store')
  const clickHandler = () => {
    setName('We are passionate about books and reading, and we believe that there is nothing quite like the feeling of getting lost in a good book. Thanks for choosing our application, we are looking forward to serve you')
  }
  return(
    <View style={styles.container}>
      <Text> {name} </Text>
      <Text></Text>
      <View style={styles.buttonContainer}>
        <Button title='Next' onPress={clickHandler} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20
  }
})