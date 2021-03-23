import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import './../App.css'

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'fixed',
    zIndex: 2,
  },
  text: {
    margin: '0 auto',
  },
}))

export const Header = () => {
  const classes = useStyles()

  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography
            className={classes.text}
            variant="h6"
            color="inherit"
            noWrap={true}
          >
            Pokedex
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}
