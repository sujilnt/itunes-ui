import { createAsyncThunk, createSlice, type PayloadAction, type SerializedError } from "@reduxjs/toolkit";
import type { GetItunesRequest, Itunes } from "@api";
import api from "@services/api";

export interface ItunesState {
  itunes: Itunes;
  isLoading: boolean;
  isLoadingMore: boolean;
  hasMore: boolean;
  error: SerializedError | null;
  filters: GetItunesRequest
}

const initialState: ItunesState = {
  itunes: {
    resultCount: 0,
    results: [],
  },
  isLoading: false,
  isLoadingMore: false,
  hasMore: true,
  error: null,
  filters: {
    limit: 10,
    term: ""
  }
}


export const fetchItunes = createAsyncThunk<Itunes, GetItunesRequest>(
  "itunes/fetchItunes",
  async (params) => api.itunes.getItunes(params)
)




const itunesSlice = createSlice({
    name: "itunes",
    initialState,
    reducers: {
        setItunes(state, action: PayloadAction<Itunes>) {
            state.itunes = action.payload;
        },
        setFilters(state, action: PayloadAction<Partial<GetItunesRequest>>) {
           state.filters = {
            ...state.filters,
            ...action.payload,
           };
        },
        reset(){
          return initialState;
        }

    },
    extraReducers: (builder) => {
        builder.addCase(fetchItunes.pending, (state, action) => {
            const isLoadingMore = (action.meta.arg.offset ?? 0) > 0;
            if (isLoadingMore) {
              state.isLoadingMore = true;
            } else {
              state.isLoading = true;
            }
            state.error = null;
        });

        builder.addCase(fetchItunes.fulfilled, (state, action) => {
            const isAppend = (action.meta.arg.offset ?? 0) > 0;
            const newResults = action.payload.results ?? [];
            
            if (isAppend) {
              state.itunes.results = [...(state.itunes.results ?? []), ...newResults];
            } else {
              state.itunes.results = newResults;
            }
            state.itunes.resultCount = action.payload.resultCount;
            state.isLoading = false;
            state.isLoadingMore = false;
            state.hasMore = newResults.length >= (state.filters.limit ?? 10);
        });

        builder.addCase(fetchItunes.rejected, (state, action) => {
            state.isLoading = false;
            state.isLoadingMore = false;
            state.error = action.error;
        });
    }
})


export const itunesReducer = itunesSlice.reducer;
export const { setFilters, setItunes,reset } = itunesSlice.actions;


