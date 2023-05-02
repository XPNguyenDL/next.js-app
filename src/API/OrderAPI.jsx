import { URL_API } from "../components/Services/Store";

export async function CheckoutsAPI(data) {
  return fetch(`${URL_API}/api/orders/checkout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Lỗi gòi");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
    });
}

export async function getOrdersByQueries(parameters) {
  return fetch(`${URL_API}/api/orders?${parameters}`, {
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


export async function ToggleOrder(id) {
  return fetch(`${URL_API}/api/orders/toggle/${id}`, {
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