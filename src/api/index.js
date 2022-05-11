export const apiUrl = "http://localhost:3001/directions";

export const getDirectionsRequest = (payload) => {
  return fetch(payload.search
      ? `${apiUrl}?name_like=${payload.search}`
      : payload.filter
      ? `${apiUrl}?_sort=name&_order=${payload.filter}`
      : apiUrl)
    .then((response) => {
      if (!response.ok) throw new Error();
      return response.json();
    })
    .catch((err) => {
      throw new Error(err);
    });
};

export const editDirectionRequest = (apiUrl, id, data) => {
  return fetch(apiUrl + `/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) throw new Error();
      return response.json();
    })
    .catch((err) => {
      throw new Error(err);
    });
};

export const getFilteredDirectionsRequest = (apiUrl, str) => {
  return fetch(apiUrl + `?q=${str}`)
    .then((response) => {
      if (!response.ok) throw new Error();
      return response.json();
    })
    .catch((err) => {
      throw new Error(err);
    });
};