import { configureStore } from "@reduxjs/toolkit";
import testReducer from './test';
import mockReducer from './mocks';
const store = configureStore({
    reducer: { mock:mockReducer,test:testReducer},
  });
  
  export default store;