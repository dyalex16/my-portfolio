import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    summary: z.string(),           // one-line problem statement
    stack: z.array(z.string()),    // tech tags shown on the card
    liveUrl: z.union([z.string().url(), z.literal('')]).optional(),
    repoUrl: z.string().url(),
    image: z.string().optional(),  // path under /public/projects/
    featured: z.boolean().default(false),
    order: z.number().default(0),
  }),
});

export const collections = { projects };
