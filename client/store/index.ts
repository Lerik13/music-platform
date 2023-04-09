import { Context, createWrapper, MakeStore } from "next-redux-wrapper";
//import { AnyAction } from "redux";
import {Store, AnyAction, applyMiddleware, createStore} from "redux";
import { reducer, RootState } from "./reducers";
//import { configureStore } from '@reduxjs/toolkit'
import thunk, {ThunkDispatch} from 'redux-thunk';

// create a makeStore function
//const makeStore: MakeStore<RootState>
//	= (context: Context) => configureStore({ reducer, middleware: [thunk] });
	
const makeStore: MakeStore<RootState>
	= (context: Context) => createStore(reducer, applyMiddleware(thunk));

// export an assembled wrapper
//export const wrapper = createWrapper<RootState>(makeStore, {debug: true});
export const wrapper = createWrapper<Store<RootState>>(makeStore, {debug: true});

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>