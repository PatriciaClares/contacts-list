import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Home(props) {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 40}}>Bem vindo!</Text>
      <TouchableOpacity
        style={styles.button}
        title = "Ver meus contatos" 
        onPress={() => {props.navigation.navigate('Contatos')}}>
        <Text style={{color:'white'}}>Ver meus contatos</Text>
      </TouchableOpacity>
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
  button:{
    fontSize:10,
    padding:10,
    borderRadius: 10,
    backgroundColor: '#ae3751',
    margin: 4,
    alignItems: "center",
    justifyContent: "center",
  }
});
