import { redirect } from "react-router-dom";

export async function requireAuth() {
  const isLoggedIn = localStorage.getItem("loggingin");
  if (!isLoggedIn) {
    throw redirect("/login?message=You must login first.");
  }
}
