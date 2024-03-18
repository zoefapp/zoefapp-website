import type { APIRoute } from "astro"

export const prerender = false

/**
 * Utility function that redirects preview routes to the correct path.
 */
export const GET: APIRoute = ({ redirect, url }) => {
    return redirect('/TODO-replace-content-path-with-actual-path')
}
