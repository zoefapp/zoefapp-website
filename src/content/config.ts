import { defineCollection, z } from 'astro:content';

const blogSchema = z.object({
  title: z.string(),
  author: z.string(),
  translationCode: z.string().optional(),
  date: z.date(),
  language: z.enum(['nl', 'en']), // todo: use SUPPORTED_LANGUAGE˜S
})

const blogCollection = defineCollection({
  type: 'content',
  schema: blogSchema
});
export type Blog = z.infer<typeof blogSchema>;

export const collections = {
  'blog': blogCollection
};


export type ContentCollection = keyof typeof collections

