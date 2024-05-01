import { z, defineCollection } from "astro:content";

const logoCollection = defineCollection({
	type: "content",
	schema: z.object({
		name: z.string(),
		url: z.string(),
		downloadUrl: z.string().optional(),
		termsUrl: z.string().optional(),
		unofficial: z.boolean().optional()
	})
});

export const collections = {
	logo: logoCollection
};
