import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    { title: "Date", id: "$date", inputvalue: "February 04/20/2069"},
    { title: "Company Name", id: "$company_name", inputvalue: "Baller Media"},
    { title: "Name", id: "$name", inputvalue: "Champ"},
    { title: "Address", id: "$address", inputvalue:"Money Crib", multilined: true },
  ],
};

export const inputsSlice = createSlice({
  name: "inputsSlice",
  initialState,
  reducers: {
    addInput: (state, action) => {
      const newID = "$" + action.payload.value.replace(/ /g, "_").toLowerCase();
      state.value.push({ title: action.payload.value, id: newID, inputvalue: "" });
    },
    deleteInput: (state, action) => {
      state.value = state.value.filter(
        (item, index) => !(index === action.payload.id)
      );
    },
    addInputValue: (state, action) => {
      const title = action.payload.title;
      const value = action.payload.inputvalue;
      state.value.forEach((input) => {
        if (input.title === title) {
          input.inputvalue = value;
        }
      });
      // console.log(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addInput, deleteInput, addInputValue } = inputsSlice.actions;

export default inputsSlice.reducer;
