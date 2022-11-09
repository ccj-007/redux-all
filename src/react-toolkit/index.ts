import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./count";
import { useDispatch, useSelector } from "react-redux"; 
import { TypedUseSelectorHook  } from "react-redux";
import { pokemonApi } from "./request";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(pokemonApi.middleware);
  } 
})
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () =>  AppDispatch = useDispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector