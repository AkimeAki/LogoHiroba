import { z, defineCollection } from "astro:content";

const logoCollection = defineCollection({
	type: "content",
	schema: z.object({
		name: z.string(),
		url: z.string(),
		downloadUrl: z.string(),
		termsUrl: z.string()
	})
});

export const collections = {
	logo: logoCollection
};
