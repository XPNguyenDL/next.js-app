import React from 'react'

export default async function GetProduct() {
const res = await fetch("https://localhost:7158/api/products?PageNumber=1&PageSize=4");

if (!res.ok) throw new Error("Lỗi gòi");

  return res.json();
}
