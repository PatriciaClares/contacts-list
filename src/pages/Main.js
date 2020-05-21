import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchContacts from '../components/SearchContacts';

export default class Main extends React.Component {
    state = {
        id:'',
        contacts: ''
    }

    render(){
        return (
            <View style={styles.container}>
                <SearchContacts onSubmit={this.onSearchSubmit} />
                <Text>{this.state.id}</Text>
            </View>
        );
    }
    onSearchSubmit = (IdText) =>{
        this.setState({id: IdText})
    }   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});


