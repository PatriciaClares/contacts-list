import axios from 'axios'

export function getContact(id){
    return axios.get(`https://reqres.in/api/users/${id}`).then(response => {
        return response.data;
    })
}

export function getContacts(page){
    return axios.get(`https://reqres.in/api/users?page=${page}`).then(response => {
        return response.data;
    })
}

export default {getContacts, getContact}
