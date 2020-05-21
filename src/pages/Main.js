import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchContacts from '../components/SearchContacts';
import getContact from '../service/api'

export default class Main extends React.Component {
    state = {
        contacts: ''
    }

    render(){
        return (
            <View style={styles.container}>
                <SearchContacts onSubmit={this.onSearchSubmit} />
                <Text>{this.state.contacts}</Text>
            </View>
        );
    }
    onSearchSubmit = (IdText) =>{
        getContact(IdText).then(data => {
            this.state.contacts = data
        })
        console.log(this.state.contacts)
    }   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});


