import { createReducer } from "../factory/create-reducer";
import keys from './keys'

const saveThemeOnStore = (themeSelected) => localStorage.setItem('livraria-theme', themeSelected)
const getThemeFromStore = () => localStorage.getItem('livraria-theme') || (new Date().getTime() > 18 ? 'dark': 'light')

const INITIAL_STATE = {selected: getThemeFromStore() }

const mappedActions = {
  [keys.SELECT_THEME]: (state, action) => {
    const copy = {...state}
    copy.selected = action.payload
    saveThemeOnStore(copy.selected)
    return copy;
  },

  [keys.TOGGLE_THEME]: (state, action) => {
    const copy = {...state}
    copy.selected = copy.selected === 'dark' ? 'light' : 'dark'
    saveThemeOnStore(copy.selected)
    return copy;
  }
}

export default createReducer('theme', INITIAL_STATE, mappedActions)