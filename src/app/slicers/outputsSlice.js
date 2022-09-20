import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: []
}

export const outputsSlice = createSlice({
  name: 'outputs',
  initialState,
  reducers: {
    addOutput: (state,action) => {
      state.value.push({companyname: action.payload.companyname,message:action.payload.message})
    },
    deleteOutput: (state,action) => {
      state.value = state.value.filter((item,index) => (index!==action.payload.id))
    },
  },
})

export const { addOutput,deleteOutput } = outputsSlice.actions

export default outputsSlice.reducer