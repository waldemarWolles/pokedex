import * as HUE from '@material-ui/core/colors'

export const colorsHandler = (type) => {
  switch (type) {
    case 'normal':
      return HUE.blue[100]
    case 'fighting':
      return HUE.red[900]
    case 'flying':
      return HUE.blue[300]
    case 'poison':
      return HUE.green[900]
    case 'ground':
      return HUE.brown[400]
    case 'rock':
      return HUE.grey[500]
    case 'bug':
      return HUE.lightGreen[600]
    case 'ghost':
      return HUE.grey[200]
    case 'steel':
      return HUE.blueGrey[500]
    case 'fire':
      return HUE.orange[700]
    case 'water':
      return HUE.lightBlue[600]
    case 'grass':
      return HUE.green[500]
    case 'electric':
      return HUE.yellow[500]
    case 'psychic':
      return HUE.lime[200]
    case 'ice':
      return HUE.blue[50]
    case 'dragon':
      return HUE.orange[500]
    case 'dark':
      return HUE.indigo[400]
    case 'fairy':
      return HUE.pink[300]
    case 'unknown':
      return HUE.purple[200]
    case 'shadow':
      return HUE.deepPurple[400]

    default:
      break
  }
}
