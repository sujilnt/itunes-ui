import type { ConfigurationParameters } from "@api";
import { Configuration, ItunesApi } from "@api";

declare const API_URL: string;

class API {
	public itunes: ItunesApi;

	private static readonly CONFIG: ConfigurationParameters = {
		basePath: API_URL,
		credentials: "include" as RequestCredentials,
	};

	constructor() {
		const config = new Configuration(API.CONFIG);
		this.itunes = new ItunesApi(config);
	}
}

export default new API();
