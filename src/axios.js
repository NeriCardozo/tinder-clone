import axios from 'axios'

const instance = axios.create({
    baseURL:'https://tinder-backend119.herokuapp.com/'
})

export default instance;