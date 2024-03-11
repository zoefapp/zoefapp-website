import { defineCollection, z } from 'astro:content';
import { FaqSchema } from '~/lib/faq';
import { TestimonialSchema } from '~/lib/testimonial';


/// BLOG
const blogSchema = z.object({
  title: z.string(),
  author: z.string(),
  translationCode: z.string().optional(),
  date: z.date(),
  language: z.enum(['nl', 'en']), // todo: use SUPPORTED_LANGUAGE˜S
  tags: z.array(z.string()),
})
export type Blog = z.infer<typeof blogSchema>;

const blogCollection = defineCollection({
  type: 'content',
  schema: blogSchema
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


// EXPORTS
export const collections = {
  'blog': blogCollection,
  'faq': faqCollection,
  'testimonial': testimonialCollection
};
export type ContentCollection = keyof typeof collections

