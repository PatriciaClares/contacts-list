import React from 'react';
import { Text, View, StyleSheet,FlatList,SafeAreaView,TouchableHighlight, Image} from 'react-native';
import SearchContact from '../components/SearchContact';
import {getContacts} from '../service/api'
import ContactModal from '../components/ContactModal';
import SearchContacts from '../components/SearchContact';
import Contact from '../components/Contact';

export default class Main extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            page : 1
        }    
    }

    render(){
        return (
            <SafeAreaView style={styles.container}>
                <SearchContacts />
                
                <FlatList
                    data={this.state.contacts}
                    renderItem={
                        ({item}) =>             
                            <this.Item item={item}/>
                    }
                />
            </SafeAreaView>
        );
    }

    componentDidMount(){
        this.contacts();
     }
 
     async contacts(){
         await getContacts(this.state.page).then(response => {
             this.setState({contacts: response.data});
         });
 
     }
 
     Item(contact){
         return(
             <Text>{contact.item.email} Ola</Text>
         )
     } 

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  item: {
    borderColor: 'black',
    borderWidth: 2,
    padding: 20,
  }
});