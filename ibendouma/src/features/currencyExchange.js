import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currency: "EUR",
};

export const currencyExchangeSlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    addNewCurrencyExchange: (state, action) => {
      state.currency = action.payload;
    },
  },
});

export const { addNewCurrencyExchange } = currencyExchangeSlice.actions;

export default currencyExchangeSlice.reducer;
