export default function (state = [], action = {}) {
    switch (action.type) {
      case 'FETCH_DINOSAURUS': {
        return action.payload
      }
      default:
        return state
    }
  }