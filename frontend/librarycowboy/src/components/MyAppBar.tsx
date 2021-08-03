import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { ModeContext } from "../App";

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    background: theme.palette.primary.main,
    border: 0,
    color: theme.palette.primary.contrastText,
    height: 'auto',
    padding: '5px',
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  buttonLabel: {
    fontSize: '1.2rem',
    textTransform: 'none',
  },
  typography: {
    h4: {
      fontSize: '1.2rem',
      '@media (min-width:600px)': {
        fontSize: '1.5rem',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '3rem',
      },
    }
  }
}))

const MyAppBar: React.FC = () => {
  const classes = useStyles()
  const { setDarkMode } = useContext(ModeContext)

  const toggleMode = () => {
    setDarkMode((darkMode) => !darkMode)
  }

  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
        <Typography variant="h4" className={classes.title}>
          Livraria do cowboy
        </Typography>
        <Button color="inherit" className={classes.buttonLabel} onClick={toggleMode}>Dark mode</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default MyAppBar;