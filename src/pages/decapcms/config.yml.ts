import { TestimonialRelevance } from "~/lib/testimonial"
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
  locales: [nl, en]

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
    path: '{{year}}-{{month}}/{{slug}}'
    i18n:
      structure: multiple_files
    folder: "src/content/blog" # The path to the folder where the documents are stored
    create: true # Allow users to create new documents in this collection
    format: frontmatter
    extension: md
    identifier_field: id
    fields: # The fields for each document, usually in front matter
      - { label: "Blog Identifier", name: "id", widget: "string", i18n: "duplicate" }
      - { label: "Title", name: "title", widget: "string" }
      - { label: "Author", name: "author", widget: "string", i18n: "duplicate" }
      - { label: "Published date", name: "date", widget: "datetime", i18n: "duplicate" }
      - { label: "Header Image", name: "headerImage", widget: "image", required: false }
      - { label: "Meta Description", name: "metaDescription", widget: "string" }
      - { label: "Meta Canonical Link", name: "metaCanonical", widget: "string", required: false }
      - { label: "Meta OG:Title", name: "metaOgTitle", widget: "string" }
      - { label: "Meta OG:Description", name: "metaOgDescription", widget: "string" }
      - { label: "Meta OG:Image", name: "metaOgImage", widget: "image" }
      - { label: "Tags", name: "tags", widget: "list", i18n: "duplicate", allow_add: true }
      - { label: "Body", name: "body", widget: "markdown" }

  - name: "faq" # Used in routes, e.g., /admin/collections/blog
    label: "FAQ" # Used in the UI
    folder: "src/content/faq" # The path to the folder where the documents are stored
    summary: "{{question}}"
    i18n:
      structure: multiple_folders
    extension: yaml
    format: yaml
    create: true # Allow users to create new documents in this collection
    slug: "{{slug}}" # Filename template, e.g., YYYY-MM-DD-title.md
    fields: # The fields for each document, usually in front matter
      - { label: "Question", name: "question", widget: "string", i18n: true }
      - { label: "Answer", name: "answer", widget: "text", i18n: true }
      - { label: "Homepage Order", name: "homepageOrder", widget: "number", required: false }

  - name: "testimonial" # Used in routes, e.g., /admin/collections/blog
    label: "Testimonials" # Used in the UI
    folder: "src/content/testimonial" # The path to the folder where the documents are stored
    i18n: 
      structure: multiple_folders
    extension: yaml
    summary: "{{date}}\\n{{company}} - {{person}}"
    format: yaml
    create: true # Allow users to create new documents in this collection
    slug: "{{slug}}" # Filename template, e.g., YYYY-MM-DD-title.md
    fields: # The fields for each document, usually in front matter
      - { label: "Avatar", name: "avatar", widget: "image", i18n: "duplicate" }
      - { label: "Person", name: "person", widget: "string", i18n: "duplicate" }
      - { label: "Company", name: "company", widget: "string", i18n: "duplicate" }
      - { label: "Stars", name: "stars", widget: "number", i18n: "duplicate" }
      - { label: "Date", name: "date", widget: "datetime", i18n: "duplicate" }
      - { label: "Relevant For", name: "relevantFor", widget: "select", i18n: "duplicate", multiple: false, options: ${JSON.stringify(TestimonialRelevance.options)} }
      - { label: "Homepage Order", name: "homepageOrder", widget: "number", i18n: "duplicate" }
      - { label: "Testimonial", name: "testimonial", widget: "markdown", i18n: true }
`
  )
}