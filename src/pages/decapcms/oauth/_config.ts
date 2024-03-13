export const clientId = "2857faab313f81362680"
export const clientSecret = "fd67c7b0eaab908df26d6c2c300a765be4a04055"

export const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&scope=repo,user`;
export const tokenUrl = "https://github.com/login/oauth/access_token";

export const BRANCH_URL = import.meta.env.VERCEL_BRANCH_URL ? `https://${import.meta.env.VERCEL_BRANCH_URL}` : "http://localhost:4321";
export const BRANCH_HOSTNAME = import.meta.env.VERCEL_BRANCH_URL ? import.meta.env.VERCEL_BRANCH_URL : "localhost:4321";
export const GIT_BRANCH = import.meta.env.VERCEL_GIT_COMMIT_REF ?? "main";