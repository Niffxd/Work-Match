import { cache } from 'react';
// import 'server-only';
const URL = process.env.API_URL + 'project';
// CACHE
export const preloadProject = async (id, query) => {
  void getCacheProject(id, query);
}
export const getCacheProject = cache(async (id, query) => {
  const res = await fetch(URL).then();
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
//GET
export const getProject = async (id, query) => {
  console.log(URL)
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