import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': 'a500436c8amsh54717afd7ee85f4p1bf137jsn687586e48543'
          }
    })

    return data
}

