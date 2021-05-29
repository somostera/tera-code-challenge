import keys from './keys'

export const toggleTheme = () => {
  return {
    type: keys.TOGGLE_THEME
  }
}

export const selectTheme = theme => {
  return {
    type: keys.TOGGLE_THEME,
    payload: theme
  }
}