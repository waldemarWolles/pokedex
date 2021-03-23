import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { capitalize, CardActionArea } from '@material-ui/core'
import { colorsHandler } from '../helpers/colors'
import gray from '@material-ui/core/colors/grey'
import { useDispatch } from 'react-redux'
import { setActivePokemon } from '../redux/pokemons-reducer'

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(1),
    backgroundColor: gray[100],
  },
  cardMedia: {
    paddingTop: '100%', // 16:9
    marginBottom: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      maxWidth: theme.spacing(100),
    },
  },
  cardContent: {
    flexGrow: 1,
  },
  cardTypes: {
    display: 'flex',
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  type: {
    border: '1px solid green',
    borderRadius: '5px',
    padding: '5px 19px',
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  cardContainer: {
    marginBottom: theme.spacing(8),
    marginTop: theme.spacing(8),
  },
}))

export const CardItem = ({ id, name, types }) => {
  const classes = useStyles()

  const dispatch = useDispatch()
  const choosePokemon = (e) => {
    dispatch(setActivePokemon(name))
  }

  return (
    <>
      <Grid item={true} xs={12} sm={6} md={6} lg={4}>
        <CardActionArea onClick={choosePokemon}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image={` https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
              title={name}
            />
            <CardContent className={classes.cardContent}>
              <Typography
                align="center"
                gutterBottom={true}
                variant="h5"
                component="h2"
              >
                {capitalize(name)}
              </Typography>
              {/* {cardTypes.length >= cards.length && ( */}
              <Typography className={classes.cardTypes}>
                {types.map((type, index) => {
                  return (
                    <span
                      key={`${index + type.type.name}`}
                      className={classes.type}
                      style={{
                        backgroundColor: `${colorsHandler(type.type.name)}`,
                      }}
                    >
                      {capitalize(type.type.name)}
                    </span>
                  )
                })}
              </Typography>
            </CardContent>
          </Card>
        </CardActionArea>
      </Grid>
    </>
  )
}
