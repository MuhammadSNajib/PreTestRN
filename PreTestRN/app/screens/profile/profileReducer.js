const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  data: []
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'PROFILE_PENDING':
      return {
        ...state,
        isLoading: true,
      }
    case 'PROFILE_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isSuccess: true,
        data: action.data.message.data
      }
    case 'PROFILE_PENDING':
      return {
        ...state,
        isLoading: false,
        isError: true,
      }
    default:
      return state
  }
}