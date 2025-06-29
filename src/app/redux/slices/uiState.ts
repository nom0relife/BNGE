import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
    query: string;
}

const initialState: UIState = {
  query: '',
};

const uiStateSlice = createSlice({
  name: 'uiState',
  initialState,
  reducers: {
    setQuery(
      state,
      action: PayloadAction<string>) {
      state.query = action.payload;
    },
    clearQuery(state) {
      state.query = '';
    },
  },
});

export const { setQuery, clearQuery } = uiStateSlice.actions;
export default uiStateSlice.reducer;
