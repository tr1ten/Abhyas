import { createSlice } from "@reduxjs/toolkit";
import {initialState} from './dummydata';
const mockSlice = createSlice(
    {
        name: 'mocks',
        initialState:initialState,
        reducers:{
            
            fetchItems(state){
                
            }
        }
    }
)
export const mockActions = mockSlice.actions;
export default mockSlice.reducer;
