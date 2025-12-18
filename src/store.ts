import { configureStore } from "@reduxjs/toolkit";  
import { itunesReducer } from "./features/itunesSlice";
import {useSelector, type TypedUseSelectorHook, useDispatch} from "react-redux";


export const store = configureStore({
    reducer: {
        itunes: itunesReducer,
    }
});

export type ApplicationState = ReturnType<typeof store.getState>;
export type ApplicationDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<ApplicationState> = useSelector; 
export const useAppDispatch: ()=> ApplicationDispatch = useDispatch;  