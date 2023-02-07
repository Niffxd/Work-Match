import axios from "axios";

//URLS
const URL_PROJECT = "/project";
const URL_OWNER = "/user";

// TYPES
//projects
export const ORIGINAL_PROJECTS = "ORIGINAL_PROJECTS";
export const GET_PROJECTS = "GET_PROJECTS";
export const GET_PROJECT_ID = "GET_PROJECT_ID";
export const GET_OWNER = "GET_OWNER";
export const CLEAR_PROJECT_ID = "CLEAR_PROJECT_ID";
export const POST_PROJECT = "POST_PROJECT";
export const PUT_PROJECT = "PUT_PROJECT";
export const DELETE_PROJECT = "DELETE_PROJECT";
//pagination
export const ITEMS_PER_PAGE = "ITEMS_PER_PAGE";
export const CURRENT_PAGE = "CURRENT_PAGE";
// filter
export const FILTERED_PROJECTS = "FILTERED_PROJECTS";
export const FILTERS = "FILTERS";
// ACTIONS
//projects
export const getOriginalProjects = () => async (dispatch) => {
  const response = await axios.get(URL_PROJECT);
  const projects = response.data.data;
  dispatch({ type: ORIGINAL_PROJECTS, payload: projects });
};

export const getProjects = () => async (dispatch) => {
  const response = await axios.get(URL_PROJECT);
  const projects = response.data.data;
  dispatch({ type: GET_PROJECTS, payload: projects });
};

export const getProjectId = (id) => async (dispatch) => {
  const response = await axios.get(`${URL_PROJECT}/${id}`);
  const projectId = response.data.data[0];
  dispatch({ type: GET_PROJECT_ID, payload: projectId });
};

export const getOwner = (id) => async (dispatch) => {
  const response = await axios.get(`${URL_OWNER}/${id}`);
  const owner = response.data.data[0];
  dispatch({ type: GET_OWNER, payload: owner });
};

export const clearProjectId = () => async (dispatch) => {
  dispatch({ type: CLEAR_PROJECT_ID });
};

export const postProject = (data) => async (dispatch) => {
  const response = await axios.post(URL_PROJECT, data);
  const newProject = response.data;
  dispatch({ type: POST_PROJECT, payload: newProject });
};

export const putProjects = (data) => async (dispatch) => {
  await axios.put(URL_PROJECT, data);
  dispatch({
    type: PUT_PROJECT,
    payload: "Oferta de trabajo actualizada con éxito",
  });
};

export const deleteProjects = (id) => async (dispatch) => {
  await axios.delete(`${URL_PROJECT}/${id}`);
  dispatch({
    type: DELETE_PROJECT,
    payload: "Oferta de trabajo eliminada con éxito.",
  });
};

//pagination
export const itemsPerPage = (min, max) => ({
  type: ITEMS_PER_PAGE,
  payload: { min, max },
});

export const currentPg = (page) => ({
  type: CURRENT_PAGE,
  payload: page,
});

//filters
export const filters = (filters) => ({ type: FILTERS, payload: filters });

export const filteredProjects = () => ({
  type: FILTERED_PROJECTS,
});
