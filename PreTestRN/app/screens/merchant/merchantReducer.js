const initialState = {
  isLoading: false,
  isLoadingNext: false,
  isError: false,
  isSuccess: false,
  page: 1,
  fullData: [],
  listData: []
}

export default function merchantReducer(state = initialState, action) {
  switch (action.type) {
    case 'MERCHANT_PENDING':
      if (action.refresh == true) {
        return {
          ...state,
          isLoading: true,
        }
      } else {
        if (action.page == 1) {
          return {
            ...state,
            isLoading: true,
            isError: false,
          }
        } else {
          return {
            ...state,
            isLoading: false,
            isLoadingNext: true,
            isError: false,
          }
        }
      }
    case 'MERCHANT_FULFILLED':
      if (action.refresh == true) {
        return {
          ...state,
          isLoading: false,
          isSuccess: action.data.success,
          page: action.page,
          listData: action.data.message.data,
          fullData: action.data.message
        }
      } else {
        if (action.page == 1) {
          return {
            ...state,
            isLoading: false,
            isSuccess: action.data.success,
            page: action.page,
            listData: action.data.message.data,
            fullData: action.data.message
          }
        } else {
          return {
            ...state,
            isLoading: false,
            isLoadingNext: false,
            isSuccess: action.data.success,
            page: action.page,
            listData: state.listData.concat(action.data.message.data)
          }
        }
      }
    case 'MERCHANT_REJECTED':
      if (action.refresh == true) {
        return {
          ...state,
          isLoading: false,
        }
      } else {
        return {
          ...state,
          isLoading: false,
          isError: true,
        }
      }
    default:
      return state
  }
}