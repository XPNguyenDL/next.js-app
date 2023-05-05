
export async function LoginApi(data) {
  return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/accounts`, {
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
}
