import { configureStore } from "@reduxjs/toolkit";
import mockReducer from './mocks';
const store = configureStore({
    reducer: { mock:mockReducer},
  });
  
  export default store;