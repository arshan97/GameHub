import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '0601e73017774a72b016f9158b98da1b'
    }
})