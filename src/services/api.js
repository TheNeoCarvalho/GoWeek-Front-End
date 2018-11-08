import axios from 'axios'

const api = axios.create({
    baseURL: 'https://goweek-ujjehtoqif.now.sh:3000'
})

export default api