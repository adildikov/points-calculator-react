export const apiUrl = "http://localhost:3001/directions";

export const getDirectionsApi = (payload) => {
  return fetch(`
    ${apiUrl}?name_like=${payload.search || ""}&_sort=name&_order=${payload.filter}`
    )
    .then((response) => {
      if (!response.ok) throw new Error();
      return response.json();
    })
    .catch((err) => {
      throw new Error(err);
    });
};