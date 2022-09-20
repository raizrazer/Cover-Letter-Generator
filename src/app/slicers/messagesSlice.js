import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: `This is a placeholder letter. Please remove.

  $date
  
  $address
  
  Dear $company_name:
  
  Please use the id above the input field to be replaced. example for Name field $[name] without the brackets
  
  With 5 years of full-stack web development experience for global businesses, I offer the technical expertise you are seeking for your web developer position advertised on Monster.
  
  $name`,
};

export const messagesSlice = createSlice({
  name: "messagesSlice",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.value = (action.payload)
    },
  },
});


// Action creators are generated for each case reducer function
export const { addMessage } = messagesSlice.actions

export default messagesSlice.reducer
