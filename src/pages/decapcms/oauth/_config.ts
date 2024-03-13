export const clientId = import.meta.env.DECAPCMS_OAUTH_CLIENT_ID ?? 'unset-env-variable'
export const clientSecret = import.meta.env.DECAPCMS_OAUTH_CLIENT_SECRET ?? 'unset-env-variable'

export const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo,user`;
export const tokenUrl = "https://github.com/login/oauth/access_token";
export const githubOAuthRedirectUrl = 'https://get.zoef.app/decapcms/oauth/redirect'

export const BRANCH_URL = import.meta.env.VERCEL_BRANCH_URL ? `https://${import.meta.env.VERCEL_BRANCH_URL}` : "http://localhost:4321";
export const BRANCH_HOSTNAME = import.meta.env.VERCEL_BRANCH_URL ? import.meta.env.VERCEL_BRANCH_URL : "localhost:4321";
export const GIT_BRANCH = import.meta.env.VERCEL_GIT_COMMIT_REF ?? "main";