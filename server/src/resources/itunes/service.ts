import axios from "axios";

export interface SearchParams {
	term?: string;
	limit?: number;
	offset?: number;
}

export interface Itunes {
	wrapperType: "audiobook";
	artistId: number;
	collectionId: number;
	artistName: string;
	collectionName: string;
	collectionCensoredName: string;
	artistViewUrl: string;
	collectionViewUrl: string;
	artworkUrl60?: string;
	artworkUrl100?: string;
	collectionPrice?: number;
	collectionExplicitness?: string;
	trackCount?: number;
	copyright?: string;
	country?: string;
	currency?: string;
	releaseDate?: string; // ISO string
	primaryGenreName?: string;
	previewUrl?: string;
	description?: string;
}

export interface ItunesResponse {
	resultCount: number;
	results: Itunes[];
	error: ItunesServiceError;
}

export interface ItunesServiceError {
	message: string;
	status?: number;
}

export type ItunesServiceResult = ItunesResponse;

class ItunesService {
	private readonly ITUNES_API_URL = "https://itunes.apple.com/search";

	async getItunes(searchParams: SearchParams): Promise<ItunesServiceResult> {
		const { term, limit, offset } = searchParams;

		try {
			const response = await axios.get<ItunesResponse>(this.ITUNES_API_URL, {
				params: { term, limit, offset },
				headers: {
					Accept: "application/json",
				},
			});
			return response.data;
		} catch (error) {
			if (axios.isAxiosError(error)) {
				return {
					resultCount: 0,
					results: [],
					error: {
						message: `iTunes API request failed: ${error.message}`,
						status: error.response?.status,
					},
				};
			}

			return {
				resultCount: 0,
				results: [],
				error: {
					message: `Unexpected error: ${(error as Error).message}`,
					status: 500,
				},
			};
		}
	}
}

export default new ItunesService();
