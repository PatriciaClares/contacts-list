import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';

export default function Home(props) {
  return (
    <View style={styles.container}>
      <Text>Bem vindo!</Text>
      <Button
        title = "Ver meus contatos" 
        onPress={() => {props.navigation.navigate('Contatos')}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
