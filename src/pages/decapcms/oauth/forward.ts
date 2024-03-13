import type { APIRoute } from "astro";

export const prerender = false;

/**
 * This route is called by Github after the user has authorized the app.
 * Note that it will always arrive at the main domain (Zoef.app), and the purpose of this route is to redirect to the correct hostname.
 * 
 * This function is not used yet, it will activate once we move this Astro project to the main domain.
 */
export const GET: APIRoute = ({ redirect, url }) => {
  let domain = url.searchParams.get('domain')
  // note that this is potentially unsafe - we should limit the exact domain names
  if (!domain?.endsWith('.vercel.app')) {
    console.error('Redirect call was called with invalid query parameters: ' + url.toString())
    throw new Error('Invalid parameters');
  }
  return redirect(`https://${domain}/decapcms/oauth/callback?code=${url.searchParams.get('code')}`);
};