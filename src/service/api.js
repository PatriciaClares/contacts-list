import axios from 'axios'

export default getContact = (id) => {
    return axios.get(`https://reqres.in/api/users/${id}`).then(response => {
        return response.data;
    })
}