import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();
// this will help us to push and pul information from data base

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {/* ///reducer:- listion any kind of action when you shoot to a database layer */}
        {/* initalState :- pervious data look alike */}
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
// go had and grab data from data base