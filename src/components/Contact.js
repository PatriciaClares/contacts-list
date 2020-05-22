import React from 'react'
import { View, Text, Image, TextInput } from 'react-native'

export default function Contact(props){
    return(
        <View>
            <Text>{props.json.email}</Text>
        </View>
    )
}