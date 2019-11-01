const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_DINOSAUR_DETAILS': {
      return action.payload;
    }
    default:
      return state;
  }
};

export default reducer;
