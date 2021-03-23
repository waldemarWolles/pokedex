import axios from 'axios'

export const pokemonsAPI = {
  getPokemons: async (limit, offset) => {
    debugger
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
    )
    const requestsArray = response.data.results.map((request) => {
      return axios.get(`${request.url}`)
    })
    debugger
    const responseAll = await axios.all(requestsArray)
    return responseAll
  },

  getTypes: async () => {
    debugger
    const response = await axios.get(`https://pokeapi.co/api/v2/type?limit=999`)
    debugger
    return response.data
  },
}
