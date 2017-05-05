const initialState = {
  fetching: false,
  fetched: false,
  removed: false,
  removing: false,
  error: null,
  newExperiencia: null,
}

const experienciaReducer  = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_EXPERIENCIA_PENDING':
      return {
        ...state,
        fetching: true,
      }
    case 'ADD_EXPERIENCIA_FULFILLED':
      return {
        ...state,
        fetching: false,
        fetched: true,
        newExperiencia: action.payload
      }
    case 'ADD_EXPERIENCIA_ERROR':
      return {
        ...state,
        fetching: false,
        fetched: false,
        error: action.payload,
      }
    case 'REMOVE_EXPERIENCIA_PENDING':
      return {
        ...state,
        removing: true,
      }
    case 'REMOVE_EXPERIENCIA_FULFILLED':
      return {
        ...state,
        removed: true,
        message: action.payload,
        removing: false,
      }
    case 'REMOVE_EXPERIENCIA_ERROR':
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}

export default experienciaReducer;
