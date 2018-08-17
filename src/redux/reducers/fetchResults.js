const results = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return [ 'item', 'item1' ]
    
    default:
      return state
  }
}

export default results