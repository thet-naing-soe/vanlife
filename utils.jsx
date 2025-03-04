import { redirect } from "react-router-dom";

export async function requireAuth(request) {
  const isLoggedIn = localStorage.getItem("loggingin");
  const pathname = new URL(request.url).pathname;
  if (!isLoggedIn) {
    throw redirect(`/login?message=You must login first.&redirectTo=${pathname}`);
  }
}
