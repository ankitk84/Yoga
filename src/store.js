import { configureStore } from "@reduxjs/toolkit";
import OptionReducer from "./reducer/Option";
import Switch from "./reducer/Switch";

 const store=configureStore({
    reducer:{
        option:OptionReducer,
        switch:Switch,
    }
})
export  default store