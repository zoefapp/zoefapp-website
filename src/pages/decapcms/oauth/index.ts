import type { APIRoute } from "astro";
import { BASE_URL, authUrl } from "./_config";

export const prerender = false;

export const GET: APIRoute = ({ redirect, url }) => {
  let redirectUrl = authUrl;
  redirectUrl += `&redirect_uri=${BASE_URL}/decapcms/oauth/callback`;
  return redirect(authUrl);
};