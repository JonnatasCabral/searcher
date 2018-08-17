const result = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_QUERYSET':
      return {data: action.data}
    
    default:
      return state
  }
}

export default result