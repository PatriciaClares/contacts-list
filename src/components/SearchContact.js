import React from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import {getContact} from '../service/api'
import Contact from './/Contact'

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
                <View style={styles.search}>
                    <View style={styles.spaceBetweenSearchAndInput}>
                        <Text>Procure por ID</Text>
                        <TextInput
                            placeholder= "Digite aqui seu id"
                            clearButtonMode = "always"
                            onChangeText={value => id = value}
                            />
                    </View>
                        <TouchableOpacity
                            style={styles.searchButton}
                            onPress={() => {
                                this.buttonPressed(id)
                            }}><Text style={{color: 'white'}}>Buscar</Text>
                        </TouchableOpacity>
                </View>
               {this.state.showContact? <Contact contact={this.state.jsonContact}/> : null}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container : {
        padding: 10,
    },
    search : {
        flexDirection : "row",
        width: 'auto',
        alignItems: "flex-end",
        marginBottom:10
    },
    spaceBetweenSearchAndInput : {
        padding: 4,
        marginRight: 5,
    },
    searchButton : {
        borderRadius: 10,
        backgroundColor: '#ae3751',
        margin: 4,
        height: 30,
        width: 70,
        alignItems: "center",
        justifyContent: "center",
    },
})