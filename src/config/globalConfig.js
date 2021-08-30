import Axios from 'axios'
export const rootUrl = 'https://localhost/'

export const Http = Axios.create({
    baseURL: rootUrl
})