import React, { useContext } from 'react';
import {GlobalContext} from '../context/GlobalState';

const Transaction = ({transactions}) => {
   
    const {deleteTrans} = useContext(GlobalContext);
 
    const sign = transactions.amount < 0 ? '-' : '+';
    return ( <li className={transactions.amount <0 ? 'minus' : 'plus'}>
    {transactions.id},{transactions.text}<span>{sign}${Math.abs(transactions.amount)}</span><button className="delete-btn" >x</button>
  </li>  );
}
 
export default Transaction;