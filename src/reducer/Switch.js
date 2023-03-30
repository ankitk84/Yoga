import { createSlice } from "@reduxjs/toolkit";

const Switchfun=createSlice({
    name:"switch",
    initialState:-1
,
reducers:{
    setSwitch:(state,action)=>{
        return action.payload
    }
}})

export default Switchfun.reducer
export const {setSwitch}=Switchfun.actions 