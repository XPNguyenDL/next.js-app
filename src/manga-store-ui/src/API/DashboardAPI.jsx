

export async function GetDashboard() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/dashboard`);
  if (!res.ok) throw new Error("Lỗi gòi");
  return res.json();
}
