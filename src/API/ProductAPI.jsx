import { URL_API } from "../components/Services/Store";

export async function GetProduct() {
  const res = await fetch(`${URL_API}/api/products?PageNumber=1&PageSize=4`);

  if (!res.ok) throw new Error("Lỗi gòi");
  return res.json();
}

export async function GetProductBySlug(slug) {
  return fetch(`${URL_API}/api/products/bySlug/${slug}`, {
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

export async function GetProductById(id) {
  return fetch(`${URL_API}/api/products/${id}`, {
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

export async function getProductsByQueries(parameters) {
  return fetch(`${URL_API}/api/products?${parameters}`, {
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

export async function getTopSales() {
  return fetch(`${URL_API}/api/products/TopSales`, {
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

export async function getRelatedProducts(slug) {
  return fetch(`${URL_API}/api/products/Related/${slug}`, {
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

export async function AddProduct(product) {
  return fetch(`${URL_API}/api/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(product)
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

export async function updateProductPictures(productId, formData) {
  return fetch(`${URL_API}/api/products/${productId}/picture`, {
    method: "POST",
    body: formData
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

export async function updateProduct(productId, product) {
  return fetch(`${URL_API}/api/products/${productId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(product)
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

export async function deleteProduct(id) {
  return fetch(`${URL_API}/api/products/${id}`, {
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