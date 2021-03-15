import React, { createContext, useReducer } from 'react';
import { TransactionList } from '../components/transactionList';
import AppReducer from './AppReducer';



const initialState = {
transaction:[
      { id: 1, text: 'Flower', amount: -20 },
      { id: 2, text: 'Salary', amount: 300 },
      { id: 3, text: 'Book', amount: -10 },
      { id: 4, text: 'Camera', amount: 150 }
    ]
}
export const GlobalContext = createContext(initialState);

export const GlobelProvider = ({ children }) => {
 const [state,dispatch] = useReducer(AppReducer, initialState);
 function deleteTrans(id) {
     dispatch({
         type: 'DELETE_TRANSACTION',
         paylod: id
     })
 }
 function addtransaction(transaction) {
    dispatch({
        type: 'ADD_TRANSACTION',
        paylod: transaction
    })
}


 return ( <GlobalContext.Provider value={{transaction: state.transaction, deleteTrans,addtransaction}}>
     {children}
 </GlobalContext.Provider> )
}
