import { URL_API } from "../components/Services/Store";

export async function GetDashboard() {
  const res = await fetch(`${URL_API}/api/dashboard`);
  if (!res.ok) throw new Error("Lỗi gòi");
  return res.json();
}
