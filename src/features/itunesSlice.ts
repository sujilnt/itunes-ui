import { createAsyncThunk, createSlice, type PayloadAction, type SerializedError } from "@reduxjs/toolkit";
import type { GetItunesRequest, Itunes } from "@api";
import api from "@services/api";
export const MAX_LIMIT = 200;
export interface ItunesState {
  itunes: Itunes;
  isLoading: boolean;
  error: SerializedError | null;
  filters: GetItunesRequest
}

export const initialState: ItunesState = {
  itunes: {
    resultCount: 0,
    results: [],
  },
  isLoading: false,
  error: null,
  filters: {
    // Note itunes api dont support offset or pagination
    limit: MAX_LIMIT,
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
            state.isLoading = true;
            state.error = null;
        });

        builder.addCase(fetchItunes.fulfilled, (state, action) => {
            state.itunes.results = action.payload.results;
            state.itunes.resultCount = action.payload.resultCount;
            state.isLoading = false;
        });

        builder.addCase(fetchItunes.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error;
        });
    }
})


export const itunesReducer = itunesSlice.reducer;
export const { setFilters, setItunes,reset } = itunesSlice.actions;


