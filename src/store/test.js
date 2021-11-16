import { createSlice } from "@reduxjs/toolkit";
const testSlice = createSlice(
    {
        name: 'tests',
        initialState:{summary:null,result:null,isTestOver:false},
        reducers:{
            updateSummary(state,action){
                return {...state,summary:action.payload}
            },
            updateResult(state,action){
                return {...state,result:action.payload}
                
            },
            updateIsTestOver(state,action){
                return {...state,isTestOver:action.payload}

            }

        }
    }
)
export const testActions = testSlice.actions;
export default testSlice.reducer;
