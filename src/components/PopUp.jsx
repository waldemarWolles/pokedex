import React, { useEffect, useRef, useState } from 'react'
import Button from '@material-ui/core/Button'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'
import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuItem from '@material-ui/core/MenuItem'
import MenuList from '@material-ui/core/MenuList'
import { makeStyles } from '@material-ui/core/styles'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveType } from './../redux/pokemons-reducer'
import { capitalize } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}))

export default function MenuListComposition() {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const anchorRef = useRef(null)
  const dispatch = useDispatch()
  const { activeType, allTypes } = useSelector((state) => state.pokemons)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }

    setOpen(false)
  }

  const handleActiveType = (event) => {
    if (event.currentTarget.outerText === 'All') {
      dispatch(setActiveType(null))
    } else {
      dispatch(setActiveType(event.currentTarget.outerText.toLowerCase()))
    }

    setOpen(false)
  }

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open)
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus()
    }

    prevOpen.current = open
  }, [open])

  return (
    <div className={classes.root}>
      <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          Sort Pokemons by Type : {activeType ? activeType : 'All'}
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition={true}
          disablePortal={true}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom' ? 'center top' : 'center bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem onClick={handleActiveType}>All</MenuItem>
                    <MenuItem onClick={handleActiveType}>
                      {capitalize(allTypes[0].name)}
                    </MenuItem>
                    <MenuItem onClick={handleActiveType}>
                      {capitalize(allTypes[1].name)}
                    </MenuItem>
                    <MenuItem onClick={handleActiveType}>
                      {capitalize(allTypes[2].name)}
                    </MenuItem>
                    <MenuItem onClick={handleActiveType}>
                      {capitalize(allTypes[3].name)}
                    </MenuItem>
                    <MenuItem onClick={handleActiveType}>
                      {capitalize(allTypes[4].name)}
                    </MenuItem>
                    <MenuItem onClick={handleActiveType}>
                      {capitalize(allTypes[5].name)}
                    </MenuItem>
                    <MenuItem onClick={handleActiveType}>
                      {capitalize(allTypes[6].name)}
                    </MenuItem>
                    <MenuItem onClick={handleActiveType}>
                      {capitalize(allTypes[7].name)}
                    </MenuItem>
                    <MenuItem onClick={handleActiveType}>
                      {capitalize(allTypes[8].name)}
                    </MenuItem>
                    <MenuItem onClick={handleActiveType}>
                      {capitalize(allTypes[9].name)}
                    </MenuItem>
                    <MenuItem onClick={handleActiveType}>
                      {capitalize(allTypes[10].name)}
                    </MenuItem>
                    <MenuItem onClick={handleActiveType}>
                      {capitalize(allTypes[11].name)}
                    </MenuItem>
                    <MenuItem onClick={handleActiveType}>
                      {capitalize(allTypes[12].name)}
                    </MenuItem>
                    <MenuItem onClick={handleActiveType}>
                      {capitalize(allTypes[13].name)}
                    </MenuItem>
                    <MenuItem onClick={handleActiveType}>
                      {capitalize(allTypes[14].name)}
                    </MenuItem>
                    <MenuItem onClick={handleActiveType}>
                      {capitalize(allTypes[15].name)}
                    </MenuItem>
                    <MenuItem onClick={handleActiveType}>
                      {capitalize(allTypes[16].name)}
                    </MenuItem>
                    <MenuItem onClick={handleActiveType}>
                      {capitalize(allTypes[17].name)}
                    </MenuItem>
                    <MenuItem onClick={handleActiveType}>
                      {capitalize(allTypes[18].name)}
                    </MenuItem>
                    <MenuItem onClick={handleActiveType}>
                      {capitalize(allTypes[19].name)}
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  )
}
