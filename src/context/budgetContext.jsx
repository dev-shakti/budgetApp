import { createContext, useReducer } from "react";
import { budgetReducer } from "./budgetReducer";


const initialState = {
    budget: 2000,
    expenses: [
        { id: 1, name: "Gaming", cost: 200 },
        { id: 2, name: "Child Care", cost: 900 },
        { id: 3, name: "Insurance", cost: 400 },
    ]
}

export const budgetContext = createContext();

export const BudgetContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(budgetReducer, initialState)

    return (
        <budgetContext.Provider value={{...state,dispatch}}>
        {children}
    </budgetContext.Provider>
    ) 
}