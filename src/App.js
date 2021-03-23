import './App.css'
import { Pokemons } from './components/Pokemons'
import { Header } from './components/Header'
import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { InfoCard } from './components/InfoCard'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  header: {
    overflow: 'hidden',
  },
}))

function App() {
  const classes = useStyles()

  return (
    <>
      <Header />

      <Grid container={true} component="main" className={classes.root}>
        <Pokemons />

        <InfoCard />
      </Grid>
    </>
  )
}

export default App
