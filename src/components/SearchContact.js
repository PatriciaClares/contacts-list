import React from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import {getContact} from '../service/api'
import Contact from './Contact'

export default class SearchContacts extends React.Component {

        state = {
            showContact: false,
            jsonContact : '',
        }

    async buttonPressed(valor){
        await getContact(valor).then(response => {
            this.state.jsonContact = response.data
        });
        this.setState({showContact : true})
    }

    render() {
        let id = ''
        return (
            <View style={styles.container}>
                <View >
                    <View>
                        <Text>Procure um contato por ID</Text>
                        <TextInput 
                            placeholder= "Digite aqui seu id"
                            clearButtonMode = "always"
                            onChangeText={value => id = value}
                            />
                    </View>
                        <Button 
                            title='BUSCAR'
                            onPress={() => {
                                this.buttonPressed(id)
                            }}
                        />
                </View>
               {this.state.showContact? <Contact contact={this.state.jsonContact}/> : null}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container : {
        backgroundColor : "red"
    }
})