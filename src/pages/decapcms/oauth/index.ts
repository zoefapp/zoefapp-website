import type { APIRoute } from "astro";
import { BRANCH_HOSTNAME, authUrl, githubOAuthRedirectUrl } from "./_config";

export const prerender = false;

/**
 * This route is called when the user clicks the "Login with GitHub" button.
 */
export const GET: APIRoute = ({ redirect, url }) => {
  // aftwards, github will redirect us to our redirect function, which will then redirect to the correct hostname
  return redirect(`${authUrl}&redirect_uri=${githubOAuthRedirectUrl}?domain=${BRANCH_HOSTNAME}`);
};