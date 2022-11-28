// import axios from 'axios'

// export const URL_API = 'http://localhost:3000'

// export const API = {
//     get: (url) => axios.get(url),
//     post: (url, data) => axios.post(url, data),
//     patch: (url, id, data) => axios.patch(`${url}/${id}`, data),
//     delete: (url, id) => axios.delete(`${url}/${id}`),
// }

import axios from "axios"

export default axios.create({
    baseURL: ' http://localhost:3006/product'
});

// export const getPosts = async () => {
//     const response = await api.get('/posts')
//     return response.data
// }