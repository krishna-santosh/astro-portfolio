import { z, defineCollection } from "astro:content"

const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.string(),
        heroImage: z.string(),
        tags: z.array(z.string()).optional(),
        draft: z.boolean().default(false)
    })
})

const projectsCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.string(),
        heroImage: z.string(),
        projectURL: z.string().url(),
        badge: z.string().optional(),
    })
})

export const collections = {
    'blog': blogCollection,
    'projects': projectsCollection
}
