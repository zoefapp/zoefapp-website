/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
interface Window {
    Alpine: import('alpinejs').Alpine;
    AOS: any;
}

interface ImportMetaEnv {
    readonly DECAPCMS_OAUTH_CLIENT_ID: string
    readonly DECAPCMS_OAUTH_CLIENT_SECRET: string
    readonly VERCEL_BRANCH_URL: string
    readonly VERCEL_GIT_COMMIT_REF: string

    readonly ZOEF_API_BASEURL: string;
  }

  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }

  import './api/zoef/modules/trips/api'
