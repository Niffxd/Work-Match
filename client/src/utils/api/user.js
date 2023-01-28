// const URL = process.env.API_URL + "user";
const URL = 'http://localhost:3001/user'
// GET user
export const getUser = async (id) => {
  const res = await fetch(URL + `/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const { data } = await res.json();
  return data;
};

// POST user
export const postUser = async (data) => {
  const res = await fetch(URL, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Failed to post data");
  }
  return res.json();
};

// PUT user
export const putUser = async (data) => {
  const res = await fetch(URL, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Failed to post data");
  }
  return res.json();
};

// DELETE user
export const deleteUser = async (id) => {
  const res = await fetch(URL + `/${id}`, {
    method: "DELETE",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Failed to post data");
  }
  return res.json();
};
