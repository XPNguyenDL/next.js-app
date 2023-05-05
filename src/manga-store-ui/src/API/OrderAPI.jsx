
export async function CheckoutsAPI(data) {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/orders/checkout`, {
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
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/orders?${parameters}`, {
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
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/orders/toggle/${id}`, {
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