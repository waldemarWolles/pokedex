import axios from 'axios'

export const pokemonsAPI = {
  getPokemons: async (limit, offset) => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
    )
    const requestsArray = response.data.results.map(async (request) => {
      return axios.get(`https://pokeapi.co/api/v2/pokemon/${request.name}`)
    })
    const responseAll = await axios.all(requestsArray)
    return responseAll
  },

  getTypes: async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/type?limit=999`)
    return response.data
  },
}
