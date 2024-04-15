import { defineCollection, z } from 'astro:content';
import { BlogSchema } from '~/lib/blog';
import { FaqSchema } from '~/lib/faq';
import { PageProps } from '~/lib/page';
import { TestimonialSchema } from '~/lib/testimonial';

/// page content
const pageCollection = defineCollection({
  type: 'content',
  schema: PageProps
})

/// BLOG
const blogCollection = defineCollection({
  type: 'content',
  schema: BlogSchema
});

/// FAQ
const faqCollection = defineCollection({
  type: 'data',
  schema: FaqSchema,
})

/// FAQ
const testimonialCollection = defineCollection({
  type: 'data',
  schema: TestimonialSchema,
})

/// FAQ
const howitworksCollection = defineCollection({
  type: 'data',
  schema: z.object({
    order: z.number(),
    title: z.string(),
    description: z.string(),
    image: z.string()
  }),
})


// EXPORTS
export const collections = {
  'blog': blogCollection,
  'faq': faqCollection,
  'testimonial': testimonialCollection,
  'howitworks': howitworksCollection,
  'pages': pageCollection
};
export type ContentCollection = keyof typeof collections

