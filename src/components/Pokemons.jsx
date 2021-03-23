import React, { useEffect } from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { useDispatch, useSelector } from 'react-redux'
import {
  getAllTypes,
  getPokemonCards,
  setActivePokemonClear,
} from '../redux/pokemons-reducer'
import { Cards } from './Cards'
import MenuListComposition from './PopUp'

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingBottom: theme.spacing(8),
    maxWidth: 'md',
  },
  cardContainer: {
    marginBottom: theme.spacing(8),
    marginTop: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(1),
  },
  cardMedia: {
    paddingTop: '70%', // 16:9
    marginBottom: theme.spacing(1),
  },
  cardContent: {
    flexGrow: 1,
  },
  cardActions: {
    margin: '0 auto',
  },
  button: {
    width: '100%',
  },
  div: {
    position: 'relative',
    zIndex: 3,
    paddingTop: '100px',
  },
}))

export const Pokemons = React.memo(() => {
  const classes = useStyles()

  const { limit, offset, isInProgress } = useSelector((state) => state.pokemons)

  const dispatch = useDispatch()

  const onAddCards = () => {
    dispatch(getPokemonCards(limit, offset))
    dispatch(setActivePokemonClear())
  }

  useEffect(() => {
    dispatch(getPokemonCards(limit, offset))
    dispatch(getAllTypes())
  }, [])

  return (
    <React.Fragment>
      <Grid item xs={12} sm={12} md={6}>
        <div className={classes.div}>
          <MenuListComposition />
        </div>
        <Container className={classes.cardGrid}>
          <Grid className={classes.cardContainer} container={true} spacing={4}>
            <Cards />
          </Grid>
          <Button
            onClick={onAddCards}
            className={classes.button}
            variant="contained"
            color="primary"
            disabled={isInProgress}
          >
            Load more
          </Button>
        </Container>
      </Grid>
    </React.Fragment>
  )
})
