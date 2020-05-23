import React from 'react';
import { TouchableOpacity, StyleSheet,FlatList,SafeAreaView,Text, View} from 'react-native';
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
                <Text style={{fontSize: 20, marginTop:10, marginBottom:20}}>Todos os Contatos:</Text>
                <View>
                    <FlatList
                        data={this.state.contacts}
                        renderItem={
                            ({item}) =>             
                                <ContactModal contact={item}/>
                        }
                    />
                    <View style={styles.page}>
                        <TouchableOpacity
                            style={styles.pageButton}
                            onPress={() => {
                                if(this.state.page != 1){
                                    this.state.page = 1
                                    this.contacts()
                            }
                        }}><Text style={{color:'white'}}>Pagina 1</Text></TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.pageButton}
                            onPress={() => {
                                if(this.state.page != 2){
                                    this.state.page = 2
                                    this.contacts()
                                }
                        }}><Text style={{color:'white'}}>Pagina 2</Text></TouchableOpacity>
                    </View>
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
    flex:1,
    paddingLeft:20,
    paddingRight:20,
    justifyContent:'center',
    backgroundColor: '#fff',
    justifyContent:'flex-start'
  },
  page:{
    flexDirection:"row", 
    justifyContent:"center"
    
  },
  pageButton:{
    borderRadius: 10,
    backgroundColor: '#ef4c66',
    padding: 5,
    margin: 2,
    height: 30,
    width: 70,
    alignItems: "center",
    justifyContent: "center",
  }

});