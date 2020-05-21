import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'

export default class SearchContacts extends React.Component {
    
    constructor(props){
        super(props)
        this.buttonPressed = this.buttonPressed.bind(this)
        this.state = {}
    }

    buttonPressed(){
        this.state.id
        this.props.onSubmit(this.state.id)
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