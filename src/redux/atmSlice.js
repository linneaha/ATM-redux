import { createSlice } from "@reduxjs/toolkit";

const atmSlice = createSlice({
  name: "atm",
  initialState: {
    balance: 1000,
    amount: 0,
    showATM: false,
  },
  reducers: {
    showATMBtn: (state) => {
      state.showATM = !state.showATM;
    },
    selectedAmount: (state, action) => {
      state.amount = +action.payload;
    },
    withdrawMoney: (state, action) => {
      if (state.balance >= action.payload) {
        state.balance -= action.payload;
        state.amount = 0;
      } else {
        alert("Not enough money");
        state.amount = 0;
      }
    },
    depositMoney: (state, action) => {
      state.balance += action.payload;
      state.amount = 0;
    },
  },
});

export const { showATMBtn, selectedAmount, withdrawMoney, depositMoney } =
  atmSlice.actions;

export default atmSlice.reducer;
