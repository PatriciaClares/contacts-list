import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import {getContact} from '../service/api'
import Contact from './Contact'

export default class SearchContacts extends React.Component {
    
    constructor(props){
        super(props)
        
        this.state = {
            id: '', 
            jsonContact : ''
        }
        
        this.buttonPressed = this.buttonPressed.bind(this)
    }

    async buttonPressed(){
        await getContact(this.state.id).then(response => {
            this.state.jsonContact = response.data
        })
        console.log(this.state.jsonContact)
    }

    render() {
        return (
            <View>
                <Text>Procure um contato por ID</Text>
                <View>
                    <TextInput 
                        placeholder= "Digite aqui seu id"
                        clearButtonMode = "always"
                        onChangeText={value => this.setState({id:value})}
                        />
                    <Button 
                        title='BUSCAR'
                        onPress={this.buttonPressed}
                    />
                    
                </View>
            </View>
        )
    }
}