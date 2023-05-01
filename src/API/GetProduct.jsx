import { URL_API } from "../components/Services/Store";

export async function GetProduct() {
  const res = await fetch(`${URL_API}/api/products?PageNumber=1&PageSize=4`);

  if (!res.ok) throw new Error("Lỗi gòi");
  return res.json();
}

export async function GetProductBySlug(slug) {
  const res = await fetch(`${URL_API}/api/products/bySlug/${slug}`);

  if (!res.ok) throw new Error("Lỗi gòi");
  return res.json();
}
