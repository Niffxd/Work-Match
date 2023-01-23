import { cache } from 'react';
// import 'server-only';
const URL = process.env.API_URL + 'project';
// CACHE
export const preloadProject = async (id, query) => {
  void getCacheProject(id, query);
}
export const getCacheProject = cache(async (id, query) => {
  const res = await fetch(URL);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  const { data } = await res.json();
  return data;
}
);
/**
 * Trae datos de proyectos (ofertas de trabajos) la api
 * @param {arg} number 
 * @param {arg} object
 * @returns data
 */
export const getProject = async (arg) => {

  // Si le pasas como parametro un:
  // Numero lo trae por id (1)
  const query = (typeof arg === "number") ? '/' + arg
  // Objeto puede traer una pagina ({page=1})
  // u ordenar ({column:'id', direction:'DESC'}) direction es opcinal por defecto es ASC
  // o ambos p.e. await getProject({page:1, column:'id', direction:'DESC'})
    : (typeof arg === "object") ? '?' + new URLSearchParams(arg) 
  // Si no directamente trae todos de la 1er pagina (por defecto)
    : '';

  const uri = URL + query;
  console.log(uri)
  const res = await fetch(uri);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
  const { data } = await res.json();
  return data;
};
// POST
export const postProject = async (data) => {
  const res = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to post data');
  }

  return res.json();
};