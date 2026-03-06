const API_BASE_URL = "http://localhost:5000/api";

export async function getCourses() {
  const res = await fetch(`${API_BASE_URL}/courses`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch courses");

  return res.json();
}