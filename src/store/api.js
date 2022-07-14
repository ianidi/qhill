import ky from "ky";

const API_URL = "http://localhost/";

export async function applyActiveFilters({ filter }) {
  const res = await ky
    .post(API_URL + "search/filters/active", {
      json: {
        filter,
      },
    })
    .json();
  return res;
}
