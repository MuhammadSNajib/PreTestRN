const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  email: 'mid@meteor.id',
  password: 'admin123',
  token: '',
  loginResult: '',
  user: null
}

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'EMAIL':
      return {
        ...state,
        email: action.email
      }
    case 'PASSWORD':
      return {
        ...state,
        password: action.password
      }
    case 'LOGIN_PENDING':
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isError: false,
        loginResult: ''
      }
    case 'LOGIN_FULFILLED':
      if (!action.data.success) {
        return {
          ...state,
          isLoading: false,
          isSuccess: action.data.success,
          loginResult: action.data.message,
          token: ''
        }
      } else {
        return {
          ...state,
          isLoading: false,
          isSuccess: action.data.success,
          loginResult: 'success',
          token: action.data.message.token
        }
      }
    case 'LOGIN_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        loginResult: action.err
      }
    case 'RESET_DATA':
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: false,
        email: 'mid@meteor.id',
        password: 'admin123',
        loginResult: '',
        user: null
      }
    case 'LOGOUT':
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: false,
        email: 'mid@meteor.id',
        password: 'admin123',
        token: '',
        loginResult: '',
        user: null
      }
    default:
      return state
  }
}