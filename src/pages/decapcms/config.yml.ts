import { BRANCH_URL, GIT_BRANCH, BRANCH_HOSTNAME } from "./oauth/_config"

export const prerender = true

export async function GET() {

  return new Response(
    `
backend:
  name: github
  branch: ${GIT_BRANCH}
  repo: zoefapp/zoefapp-website
  auth_endpoint: decapcms/oauth
  site_domain: ${BRANCH_HOSTNAME}
  base_url: ${BRANCH_URL}

publish_mode: editorial_workflow
local_backend: false

media_folder: public/uploads
public_folder: /uploads

i18n:
  # Required and can be one of multiple_folders, multiple_files or single_file
  # multiple_folders - persists files in '<folder>/<locale>/<slug>.<extension>'
  # multiple_files - persists files in '<folder>/<slug>.<locale>.<extension>'
  # single_file - persists a single file in '<folder>/<slug>.<extension>'
  structure: multiple_folders

  # Required - a list of locales to show in the editor UI
  locales: [en, nl]

  # Optional, defaults to the first item in locales.
  # The locale to be used for fields validation and as a baseline for the entry.
  default_locale: nl

collections:
  # - name: pages
  #   label: Pages
  #   files:
  #     - name: about
  #       label: About Page
  #       file: site/content/about.yml
  #       # Enable i18n for this file.
  #       i18n: true
  #       fields:
  #         - { label: Title, name: title, widget: string, i18n: true }

  - name: "blog" # Used in routes, e.g., /admin/collections/blog
    label: "Blog entries" # Used in the UI
    i18n:
      structure: single_file
    folder: "src/content/blog" # The path to the folder where the documents are stored
    create: true # Allow users to create new documents in this collection
    format: frontmatter
    slug: "{{year}}-{{month}}/{{slug}}" # Filename template, e.g., YYYY-MM-DD-title.md
    fields: # The fields for each document, usually in front matter
      - { label: "Source", name: "source", widget: "string" }
      - { label: "URL", name: "url", widget: "string" }
      - { label: "Featured Image", name: "img", widget: "image" }
      - { label: "Publish Date", name: "date", widget: "datetime" }
      - { label: "Title", name: "title", widget: "string" }
      - { label: "Body", name: "body", widget: "markdown" }

  - name: "faq" # Used in routes, e.g., /admin/collections/blog
    label: "FAQ" # Used in the UI
    folder: "src/content/faq" # The path to the folder where the documents are stored
    i18n:
      structure: multiple_folders
    create: true # Allow users to create new documents in this collection
    slug: "{{slug}}" # Filename template, e.g., YYYY-MM-DD-title.md
    fields: # The fields for each document, usually in front matter
      - { label: "Featured Image", name: "img", widget: "image" }
      - { label: "Tags", name: "tags", widget: "tags" }
      - { label: "Title", name: "title", widget: "string" }
      - { label: "Body", name: "body", widget: "markdown" }

  - name: "testimonial" # Used in routes, e.g., /admin/collections/blog
    label: "Testimonials" # Used in the UI
    folder: "src/content/testimonial" # The path to the folder where the documents are stored
    i18n: true
    create: true # Allow users to create new documents in this collection
    slug: "{{slug}}" # Filename template, e.g., YYYY-MM-DD-title.md
    fields: # The fields for each document, usually in front matter
      - { label: "Featured Image", name: "img", widget: "image" }
      - { label: "Tags", name: "tags", widget: "tags" }
      - { label: "Title", name: "title", widget: "string" }
      - { label: "Body", name: "body", widget: "markdown", i18n: true }
`
  )
}