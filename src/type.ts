import type { Image } from "newt-client-js";

export interface NewtLogo {
	id: string;
	name: string;
	image: Image;
	isOfficial: boolean;
	url?: string;
	downloadUrl?: string;
	termsUrl?: string;
}
