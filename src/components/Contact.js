import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

export default function Contact(props){
    return(
        <View style={styles.contacts}>
            <Image 
                style={styles.avatar}
                source={{uri: props.contact.avatar}}/>
            <View style={{marginLeft: 10}}>
                <Text>Nome: {props.contact.first_name} {props.contact.last_name}</Text>
                <Text>email: {props.contact.email}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contacts: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 0.5,
        padding: 5,
        borderColor: '#ae3751',
        borderRadius: 10
    },
    avatar: {
        width: 70,
        height: 70,
        borderRadius: 50
    }
})