import React, { createContext, useReducer } from "react" 
//createContext: A function from React that creates a Context object. Context provides a way to pass data through the component tree without having to pass props down manually at every level.
//useReducer: A hook that manages state based on a reducer function.

import { initialState, reducer } from "../../utils/reducer" //IThe initialState is the default state for the context, and the reducer is a function that defines how the state should change in response to actions.


//: A component that uses useReducer to provide state and dispatch to its children via context.
export const DataContext = createContext();
//provides the context
function DataProvider({children}) {
  return (
    <DataContext.Provider value={useReducer(reducer, initialState)}>
        {children}
        </DataContext.Provider>
  )
}

//DataContext.Provider: Wraps child components to provide them access to the state and dispatch function.
//children: Any components wrapped by DataProvider can access the context values.
export default DataProvider;

