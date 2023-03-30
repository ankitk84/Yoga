import { createSlice } from "@reduxjs/toolkit";

const setOption=createSlice({
    name:"option",
    initialState:-1,
    reducers:{
        setOpt:(state,action)=>{
            
          return action.payload
        }
    }
})

export default setOption.reducer
export const { setOpt } =setOption.actions