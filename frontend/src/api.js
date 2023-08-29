const API_ENDPOINT = "http://localhost:4001";

const api = {
  fetchCats: (keyword) => {
    return fetch(`${API_ENDPOINT}/api/cats/search?q=${keyword}`).then((res) =>
      res.json()
    );
  },
  fetchCatsPage: (keyword, page) => {
    return fetch(
      `${API_ENDPOINT}/api/cats/search?q=${keyword}&page=${page}`
    ).then((res) => res.json());
  },
  fetRandomCats: () => {
    return fetch(`${API_ENDPOINT}/api/cats/random50`).then((res) => res.json());
  },
  fetCatDetail: (id) => {
    return fetch(`${API_ENDPOINT}/api/cats/${id}`).then((res) => res.json());
  },
};
