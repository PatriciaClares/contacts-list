import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchContact from '../components/SearchContact';
import getContact from '../service/api'

export default class Main extends React.Component {
    state = {
        contact: ''
    }    
    onSearchSubmit = (jsonContact) =>{
        this.setState.contact = jsonContact
    }   
    render(){
        return (
            <View style={styles.container}>
                <SearchContact onSubmit={this.onSearchSubmit} />
                <Text>{this.state.contact.email}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});


