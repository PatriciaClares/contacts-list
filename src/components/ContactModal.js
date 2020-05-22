import React from 'react'
import { View, Text, Image, TextInput } from 'react-native'

export default class ContactModal extends React.Component{

    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <View>
                <Text>{this.props.item.email}</Text>
            </View>
        )
    }
}