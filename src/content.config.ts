import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const pages = defineCollection({
	loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/pages' }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		category: z.string().optional(),
		order: z.number().optional(),
	}),
});

export const collections = { pages };
