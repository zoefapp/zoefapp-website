import type { APIRoute } from "astro";
import { authUrl } from "./_config";

export const prerender = false;

export const GET: APIRoute = ({ redirect, url }) => {
  let redirectUrl = authUrl;

  if (url.hostname == 'localhost') {
    redirectUrl += "&redirect_uri=https://127.0.0.1:4321/decapcms/oauth/callback";  
  }
  return redirect(authUrl);
};