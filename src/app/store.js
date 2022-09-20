import { configureStore } from '@reduxjs/toolkit';
import inputsReducer from './slicers/inputsSlice'
import outputsReducer from './slicers/outputsSlice'
import messageReducer from './slicers/messagesSlice'
export const store = configureStore({
  reducer: {
    inputs : inputsReducer,
    message: messageReducer,
    outputs: outputsReducer,
  },
});
