import { defineCollection, z } from 'astro:content';

const schema = z.object({
	title: z.string(),
	description: z.string(),
	// Transform string to Date object
	pubDate: z.coerce.date().optional(),
	updatedDate: z.coerce.date().optional(),
	heroImage: z.string().optional(),
})

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema
});

export const collections = { blog };
