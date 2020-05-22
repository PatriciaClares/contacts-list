import React from 'react'
import { View, Text, StyleSheet, Modal, TouchableHighlight } from 'react-native'

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
            <View>
                <Text>Eemplo</Text>
        
        <Modal
          animationType = {'slide'}
          transparent = {false}
          visible = {this.state.modalVisible}
          onRequestClose= {() => console.log('Modal fechado')}
        >

          <View style={styles.modal}>
            <Text>t{this.props.contact.email}</Text>

            <TouchableHighlight
              onPress={
                ()=>{
                  this.changeModal(!this.state.modalVisible)
                }}>
                    <Text style={styles.button}>Fechar</Text>
            </TouchableHighlight>

          </View>

        </Modal>


        <TouchableHighlight
          onPress={
            ()=>{
              this.changeModal(!this.state.modalVisible)
            }}>
          <Text style={styles.button}>Detalhes</Text>
        </TouchableHighlight>
     </View>
        )
    }
}

const styles = StyleSheet.create({
    outros: {
            width:'100%',
            margin: 5,
            textAlign: 'left',
            fontSize: 20,
            fontStyle:'italic',
    },
    button:{
      borderColor:'black',
      borderWidth: 1,
      fontSize: 20,
      backgroundColor: 'pink',
      textAlign: 'center'
    },
    modal: {
      borderColor: 'blue',
      borderWidth: 1,
      fontSize: 20,
      marginTop: 200,
      padding: 20
    }
  });
  