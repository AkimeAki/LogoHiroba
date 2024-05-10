import { createClient } from "newt-client-js";

const client = createClient({
	spaceUid: import.meta.env.SPACE_UID,
	token: import.meta.env.API_TOKEN,
	apiType: "api"
});

export const getAllContentsList = async <T>(app: string, model: string) => {
	const res = await client.getContents<T>({
		appUid: app,
		modelUid: model
	});

	return res;
};
