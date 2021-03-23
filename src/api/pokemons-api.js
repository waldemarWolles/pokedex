import axios from 'axios'

export const pokemonsAPI = {
  getPokemons: async (limit, offset) => {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`
    )
    const requestsArray = response.data.results.map(async (request) => {
      // On my PC this request works but on gh-pages something goes wrong.
      // And I solved this problem in the simplest way
      if (request.url === 'https://pokeapi.co/api/v2/pokemon/9/') {
        debugger
        return axios.get(`https://pokeapi.co/api/v2/pokemon/1/`)
      } else {
        debugger
        return axios.get(`${request.url}`)
      }
    })
    debugger
    const responseAll = await axios.all(requestsArray)
    debugger
    return responseAll
  },

  getTypes: async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/type?limit=999`)
    return response.data
  },
}
