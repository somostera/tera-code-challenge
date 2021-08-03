import React from 'react';
import Button from '@material-ui/core/Button';
import { InputAdornment, TextField } from '@material-ui/core'
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import Arrow from '../assets/arrow_gray.svg'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'relative',
    justifyContent: "flex-end"
  },
  paper: {
    marginRight: theme.spacing(2),
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.text.primary
  },
  input: {
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.text.primary,
    margin: "10px",
    boxShadow: "0 0 5px 1px lightgrey, inset 0 0 2px 1px lightgrey",
    borderColor: 'white',
    padding: "3px 0 3px 20px",
    fontSize: "11px",
  },
  inputFont: {
    fontSize: "11px"
  },
  pulldownButton: {
    borderLeft: "2px solid lightgrey",
    height: "36px",
    width: "20px",
    margin: "0",
    padding: "0"
  },
  select: {
    borderBottom: "solid 1px " + theme.palette.text.primary,
  }
}));

type Props = {
  condition?: string
  setCondition: React.Dispatch<React.SetStateAction< any >>
  categoryName?: string
  setCategoryName: React.Dispatch<React.SetStateAction< any >>
}

const menuOptions = [
  { key: 0, value: "Melhores Avalidados" },
  { key: 1, value: "Em estoque" },
  { key: 2, value: "Ordem alfabética" },
  { key: 3, value: "Livros Curtidos" },
  { key: 4, value: "Por Categoria" }
]

const FilterMenu: React.FC<Props> = ({ condition, setCondition, categoryName, setCategoryName }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  //const anchorRefFocus = (): void => anchorRef.current?.focus(); 

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClickAway = () => {
    setOpen(false);
  }

  const handleChangeCondition = (e: React.MouseEvent<HTMLElement>) => {
    const value = e.currentTarget.getAttribute("value")
    setCondition(value);
    setOpen(false);

    if(condition !== "Por Categoria") {
      setCategoryName("")
    }
  };

  const handleChangeCategory = (e: any) => {
    const value = e.currentTarget.value
    console.log(value);
    setCategoryName(value);
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
        anchorRef.current && anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return <>
    
    <div className="input_area_subgrid">
      {
        condition === "Por Categoria" ?
        <TextField 
          fullWidth={false}
          onChange={handleChangeCategory}
          className={classes.input}
          placeholder="Nome da Categoria"
          value={categoryName}
          InputProps={{
            classes: {
              input: classes.inputFont,
            },
            disableUnderline: true,
          }}
        />
        : <div></div>
      }
      <div className={classes.root}>
        <div>
          <TextField 
            onChange={handleChangeCategory}
            className={classes.input}
            placeholder="Filtros"
            value={condition}
            InputProps={{
              classes: {
                input: classes.inputFont,
              },
              disableUnderline: true,
              endAdornment: (
                <InputAdornment position="end">
                <Button
                  onClick={handleToggle}
                  variant="text"
                  disableElevation
                  className={classes.pulldownButton}
                  aria-controls={open ? 'menu-list-grow' : undefined}
                  aria-haspopup="true"
                  ref={anchorRef}
                  >
                  <img src={Arrow} className="arrow_down" alt="Favorite"></img>
                </Button>
                </InputAdornment>
            )}}
          />
        </div>

        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          <Paper className={classes.paper}>
            <ClickAwayListener onClickAway={handleClickAway}>
              <MenuList autoFocusItem={open} id="menu-list-grow">
                {menuOptions.map((option, index) => {
                  return (
                    <MenuItem 
                      className={index < menuOptions.length - 1 ? classes.select : ""}
                      onClick={handleChangeCondition} key={option.key} value={option.value}>{option.value}</MenuItem>
                  )
                })}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Popper>
      </div>
    </div>
  </>;
}

export default FilterMenu