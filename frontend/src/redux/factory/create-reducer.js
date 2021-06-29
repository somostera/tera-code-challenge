export const createReducer = (key, initialState, mappedActions) => ({
  [key]: (state = initialState, action) => {
    const fn = mappedActions[action.type]
    return fn ? fn(state, action) : state
  }
})