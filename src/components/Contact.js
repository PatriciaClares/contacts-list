import React from 'react'
import { View, Text, Image, TextInput } from 'react-native'

export default function Contact(props){
    return(
        <View>
            <Text>{props.contact.email}</Text>
        </View>
    )
}