import request from 'superagent'

export const baseUrl = 'http://localhost:4000/dinos/';

const dinosaursFetch = dinosaurs => ({
    type: 'FETCH_DINOSAURUS',
    payload: dinosaurs
  })

export const getDinos = () => (dispatch, getState) => {
    const state = getState()
    const { dinosaurs } = state
  
    if (!dinosaurs.length) {
      request(`${baseUrl}`)
      .then(response => {
        const action = dinosaursFetch(response.body)
        dispatch(action)
      })
      .catch(console.error)
    }
  }