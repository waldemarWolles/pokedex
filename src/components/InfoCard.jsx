import React from 'react'
import { capitalize } from '@material-ui/core'
import { Card } from '@material-ui/core'
import { CardMedia } from '@material-ui/core'
import { CardContent } from '@material-ui/core'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { useSelector } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  grid: {
    display: 'flex',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  paper: {
    position: 'fixed',
    height: '100%',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },

  cardContainer: {
    marginBottom: theme.spacing(8),
    marginTop: theme.spacing(8),
  },
  card: {
    maxWidth: 'md',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(1),
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      maxWidth: '400px',
    },
  },
  cardTitle: {
    textAlign: 'center',
    fontWeight: 700,
  },
  cardMedia: {
    paddingTop: '100%', // 16:9
    marginBottom: theme.spacing(1),
    width: '100%',
  },
  cardContent: {
    flexGrow: 1,
  },

  table: {
    maxWidth: '100%',
    textAlign: 'center',
  },

  tabletd: {
    width: '100%',
    padding: theme.spacing(1, 5),
    border: '1px solid black',
  },
  divTable: {
    display: 'flex',
    width: '400px',
    textAlign: 'center',
    justifyContent: 'space-between',
    [theme.breakpoints.down('md')]: {
      width: '300px',
    },
  },
  divTableRight: {
    width: '30%',
    border: '1px solid black',
  },
  divTableLeft: {
    width: '70%',
    border: '1px solid black',
    borderRight: 'none',
  },
  divLeftEl: {
    borderBottom: '1px solid black',
    '&:last-child': {
      borderBottom: 'none',
    },
  },
  divRightEl: {
    borderBottom: '1px solid black',
    '&:last-child': {
      borderBottom: 'none',
    },
  },
}))

export const InfoCard = () => {
  const classes = useStyles()
  const { isChosenPokemon, activePokemon } = useSelector(
    (state) => state.pokemons
  )
  return (
    <>
      <Grid
        className={classes.grid}
        item
        xs={false}
        sm={false}
        md={6}
        elevation={6}
        square="true"
      >
        <div className={classes.paper}>
          {isChosenPokemon && (
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={`https://pokeres.bastionbot.org/images/pokemon/${activePokemon.id}.png`}
              />
              <CardContent className={classes.cardContent}>
                <Typography
                  className={classes.cardTitle}
                  gutterBottom={true}
                  variant="h5"
                  component="h2"
                >
                  <span>
                    {capitalize(activePokemon.name)} #{activePokemon.order}
                  </span>
                </Typography>
                <div className={classes.divTable}>
                  <div className={classes.divTableLeft}>
                    <div className={classes.divLeftEl}>
                      {capitalize('Type')}
                    </div>

                    <div className={classes.divLeftEl}>
                      {capitalize(activePokemon.stats[1].stat.name)}
                    </div>
                    <div className={classes.divLeftEl}>
                      {capitalize(activePokemon.stats[2].stat.name)}
                    </div>
                    <div className={classes.divLeftEl}>
                      {capitalize(activePokemon.stats[0].stat.name)}
                    </div>
                    <div className={classes.divLeftEl}>
                      {capitalize(activePokemon.stats[3].stat.name)}
                    </div>
                    <div className={classes.divLeftEl}>
                      {capitalize(activePokemon.stats[4].stat.name)}
                    </div>

                    <div className={classes.divLeftEl}>
                      {capitalize(activePokemon.stats[5].stat.name)}
                    </div>
                    <div className={classes.divLeftEl}>
                      {capitalize('weight')}
                    </div>
                  </div>
                  <div className={classes.divTableRight}>
                    <div className={classes.divRightEl}>
                      <span>
                        {capitalize(activePokemon.types[0].type.name)}
                      </span>
                    </div>
                    <div className={classes.divRightEl}>
                      {activePokemon.stats[1].base_stat}
                    </div>
                    <div className={classes.divRightEl}>
                      {activePokemon.stats[2].base_stat}
                    </div>
                    <div className={classes.divRightEl}>
                      {activePokemon.stats[0].base_stat}
                    </div>
                    <div className={classes.divRightEl}>
                      {activePokemon.stats[3].base_stat}
                    </div>
                    <div className={classes.divRightEl}>
                      {activePokemon.stats[4].base_stat}
                    </div>

                    <div className={classes.divRightEl}>
                      {activePokemon.stats[5].base_stat}
                    </div>
                    <div className={classes.divRightEl}>
                      {activePokemon.weight}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
          {!isChosenPokemon && (
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="https://media.giphy.com/media/uWLJEGCSWdmvK/giphy.gif"
              />
              <CardContent className={classes.cardContent}>
                <Typography
                  className={classes.cardTitle}
                  gutterBottom={true}
                  variant="h5"
                  component="h2"
                >
                  <span>Choose Your Pokemon</span>
                </Typography>
              </CardContent>
            </Card>
          )}
        </div>
      </Grid>
    </>
  )
}
