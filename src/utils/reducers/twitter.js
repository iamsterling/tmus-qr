import { useReducer } from 'react'
import axios from 'axios'

export function useTwitterPicture (profile) {

    axios.get(`https://api.twitter.com/1.1/users/show.json?screen_name=jsterlingholt`)
        .then((response) => {
            console.log(response)
        }).catch(err => console.log(err))

    return profile
}