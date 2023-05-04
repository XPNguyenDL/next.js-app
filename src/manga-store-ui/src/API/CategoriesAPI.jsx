import { URL_API } from "../components/Services/Store";

export async function getCategoriesByQueries(parameters) {
  return await fetch(`${URL_API}/api/categories?${parameters}`, {
    method: "GET"
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Lỗi gòi");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    });
}

export async function deleteCategory(id) {
  return await fetch(`${URL_API}/api/categories/${id}`, {
    method: "DELETE"
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Lỗi gòi");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    });
}

export async function addCategory(category) {
  return await fetch(`${URL_API}/api/categories`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(category)
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Lỗi gòi");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    });
}

export async function updateCategory(categoryId, category) {
  return await fetch(`${URL_API}/api/categories/${categoryId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(category)
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Lỗi gòi");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    });
}

export async function getCategoryById(id) {
  return await fetch(`${URL_API}/api/categories/${id}`, {
    method: "GET"
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Lỗi gòi");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    });
}
