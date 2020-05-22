import React from 'react';
import { Button, StyleSheet,FlatList,SafeAreaView,TouchableHighlight, Image, View} from 'react-native';
import {getContacts} from '../service/api'
import ContactModal from '../components/ContactModal';
import SearchContacts from '../components/SearchContact';

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
                            <ContactModal contact={item}/>
                    }
                />
                <View style={{flexDirection:"row"}}>
                    <Button title='1' onPress={() => {
                        if(this.state.page != 1){
                            this.state.page = 1
                            this.contacts()
                        }
                    }} />
                    <Button title='2' onPress={() => {
                        if(this.state.page != 2){
                            this.state.page = 2
                            this.contacts()
                        }
                    }}/>
                </View>
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

}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#fff',
  },

});