import type { ActionReducerMapBuilder, AsyncThunk } from "@reduxjs/toolkit";

interface ThunkKeys<S> {
  dataKey: keyof S;
  loadingKey: keyof S;
  errorKey: keyof S;
}

export const addThunkReducers = <S, R, A>(
  builder: ActionReducerMapBuilder<S>,
  thunk: AsyncThunk<R, A, object>,
  keys: ThunkKeys<S>
): void => {
  const b = builder as ActionReducerMapBuilder<Record<string, unknown>>;
  const { dataKey, loadingKey, errorKey } = keys as ThunkKeys<Record<string, unknown>>;

  b.addCase(thunk.pending, (state) => {
    state[loadingKey] = true;
    state[errorKey] = null;
  });

  b.addCase(thunk.fulfilled, (state, action) => {
    state[dataKey] = action.payload;
    state[loadingKey] = false;
  });

  b.addCase(thunk.rejected, (state, action) => {
    state[loadingKey] = false;
    state[errorKey] = action.error;
  });
};