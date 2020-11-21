import React, { ReactElement, useContext } from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import SunIcon from '@material-ui/icons/WbSunnyOutlined'
import MoonIcon from '@material-ui/icons/Brightness2Outlined'
import CodeIcon from '@material-ui/icons/Code'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import { makeStyles } from '@material-ui/core/styles'
import { useTheme } from '@emotion/react'
import { ToggleThemeContext } from '../theme'

const useStyles = makeStyles({
  show: {
    transform: 'translateY(0)',
    transition: 'transform .5s',
  },
  hide: {
    transform: 'translateY(-110%)',
    transition: 'transform .5s',
  },
  toolbar: {
    paddingLeft: '10%',
  },
  toolbarContent: {
    paddingLeft: '10%',
  },
  toolbarRight: {
    right: 0,
    position: 'absolute',
    paddingRight: '10%',
  },
})

export const TopBar = (): ReactElement => {
  const trigger = useScrollTrigger()
  const classes = useStyles()
  const { toggleTheme, isDark } = useContext(ToggleThemeContext)

  return (
    <AppBar className={trigger ? classes.hide : classes.show} position="sticky">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6">DevFullStack</Typography>
        <div className={classes.toolbarContent}>
          <Button color="inherit">
            <CodeIcon />
            &nbsp;Topics
          </Button>
        </div>
        <div className={classes.toolbarRight}>
          <Button color="inherit" onClick={toggleTheme}>
            {isDark ? <SunIcon /> : <MoonIcon />}
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default TopBar
