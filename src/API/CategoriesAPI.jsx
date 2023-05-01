import { URL_API } from "../components/Services/Store";

export async function getCategoriesByQueries(parameters) {
  return fetch(`${URL_API}/api/categories?${parameters}`, {
    method: "GET"
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Lỗi gòi");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      return data;
    });
}
