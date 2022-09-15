import { createStore, applyMiddleware } from 'redux'
import { rootReducer, AppState } from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk, { ThunkMiddleware } from "redux-thunk";

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const store = createStore(
   rootReducer,
   composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<AppState>)
   ))