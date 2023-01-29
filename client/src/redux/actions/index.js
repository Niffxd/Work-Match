const GET_ALL_JOBS = 'GET_ALL_JOBS'
const POST_JOB = 'POST_JOB'

const serverDeploy ='url-deploy-back'

export const postRecipes = (newJob) => async dispatch => {
  const response = await fetch(`${serverDeploy}/jobs`,
    { method: 'POST',
      body: JSON.stringify(newJob),
      headers:{
        'Content-Type': 'application/json'
      }
    }
  ).then(recipe => recipe.json())

  dispatch({
    type: POST_RECIPE,
    payload: response
  })
}

export const getRecipes = () => async dispatch => {
  const response = await fetch(`${serverDeploy}/jobs`)
  const jobs = await response.json()
  dispatch({
    type: GET_ALL_JOBS,
    payload: jobs
  })
}

// THESE ARE ACTIONS EXAMPLES