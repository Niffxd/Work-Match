import * as actions from '../actions/index'

const initialState = {
  jobs: [],
  details: []
}

const rootReducer = (state = initialState, action) => {
  switch(action.type){
    case actions.GET_ALL_JOBS:
      return {
        ...state,
        jobs: action.payload,
      }
 
    case actions.POST_JOB:
    default:
      return {...state }
  }
}

export default rootReducer

// REDUCERS EXAMPLES