import { pokemonsAPI } from '../api/pokemons-api'
const SET_POKEMONS = 'pokemons-reducer/setPokemons'
const SET_ACTIVE_POKEMON = 'pokemons-reducer/setActivePokemon'
const SET_ALL_TYPES = 'pokemons-reducer/setAllTypes'
const SET_ACTIVE_TYPE = 'pokemons-reducer/setActiveType'
const SET_POKEMONS_IN_PROGRESS = 'pokemons-reducer/setPokemonsInProgress'

let initialState = {
  cards: [],
  offset: 0,
  limit: 12,
  isChosenPokemon: false,
  activePokemon: {},
  allTypes: [],
  activeType: null,
  isInProgress: false,
}

const pokemonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMONS: {
      return {
        ...state,
        cards: [...state.cards, ...action.pokemons],
        offset: action.offset + action.limit,
      }
    }

    case SET_ACTIVE_POKEMON: {
      return {
        ...state,
        activePokemon: {
          ...state.cards.find((element) => element.name === action.name),
        },
        isChosenPokemon: true,
      }
    }

    case SET_ALL_TYPES: {
      return {
        ...state,
        allTypes: [...action.types],
      }
    }

    case SET_ACTIVE_TYPE: {
      return {
        ...state,
        activeType: action.activeType,
      }
    }

    case SET_POKEMONS_IN_PROGRESS: {
      return {
        ...state,
        isInProgress: action.isInProgress,
      }
    }

    default:
      return state
  }
}

export default pokemonsReducer

export const setPokemons = (pokemons, limit, offset) => ({
  type: SET_POKEMONS,
  pokemons,
  limit,
  offset,
})

export const setActivePokemon = (name) => ({
  type: SET_ACTIVE_POKEMON,
  name,
})

export const setAllTypes = (types) => ({
  type: SET_ALL_TYPES,
  types,
})

export const setActiveType = (activeType) => ({
  type: SET_ACTIVE_TYPE,
  activeType,
})

export const setPokemonsInProgress = (isInProgress) => ({
  type: SET_POKEMONS_IN_PROGRESS,
  isInProgress,
})

export const getPokemonCards = (limit, offset) => {
  return async (dispatch, getState) => {
    dispatch(setPokemonsInProgress(true))
    let response = await pokemonsAPI.getPokemons(limit, offset)

    let pokemons = response.map((pokemon) => pokemon.data)

    dispatch(setPokemons(pokemons, limit, offset))
    dispatch(setPokemonsInProgress(false))
  }
}

export const getAllTypes = () => {
  return async (dispatch, getState) => {
    let response = await pokemonsAPI.getTypes()

    dispatch(setAllTypes(response.results))
  }
}
