import React from 'react'
import {Image, View, Text, StyleSheet, Modal, TouchableHighlight } from 'react-native'

export default class ContactModal extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            modalVisible: false,
        }  
    }
      changeModal(visibilidade){
        this.setState({modalVisible: visibilidade});
      }
    
    render(){
        return(
            <View style={styles.container}>

                <View style={styles.info}>
                    <Text>Nome: {this.props.contact.first_name} {this.props.contact.last_name} </Text>
            
                    <TouchableHighlight
                        style={styles.modalButton}
                        onPress={
                            ()=>{
                            this.changeModal(!this.state.modalVisible)
                            }}>
                        <Text style={{color:'white'}}>Detalhes</Text>
                    </TouchableHighlight>
                </View>
                
                <Modal
                    transparent={true} 
                    animationType={'slide'}
                    visible = {this.state.modalVisible}>
                                                            
                    <View style={styles.modalContainer}>
                        <View style={styles.modal}>
                            <View style={styles.contacts}>
                                <Image 
                                    style={styles.avatar}
                                    source={{uri: this.props.contact.avatar}}/>
                                <View style={{marginLeft: 10}}>
                                    <Text>Nome: {this.props.contact.first_name} {this.props.contact.last_name}</Text>
                                    <Text>email: {this.props.contact.email}</Text>
                                </View>
                            </View>

                            <TouchableHighlight
                            style={styles.modalButton}
                            onPress={
                                ()=>{
                                    this.changeModal(!this.state.modalVisible)
                                }}>
                                    <Text style={{color:'white'}}>Fechar</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>


            </View>
        )
    }
}
 
const styles = StyleSheet.create({
    container:{
        borderWidth:0.5,
        marginBottom:10,
        borderRadius:20
    },
    info:{
        padding:10,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    contacts: {
        flexDirection: "row",
        alignItems: "center",
        padding: 30,
    },
    modalButton:{
        borderRadius: 10,
        backgroundColor: '#ae3751',
        margin: 4,
        height: 30,
        width: 70,
        alignItems: "center",
        justifyContent: "center",
    },
    modalContainer:{
        alignItems:"center",
        backgroundColor:'#000000aa',
        flex:1,
        justifyContent:"center"
    },
    modal: {
        backgroundColor:'#fff',
        alignItems:"center",
    },
    avatar: {
        width: 100,
        height: 100,
    }
})