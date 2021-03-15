
import './App.css';
import Header from './components/header';
import Balance from './components/balance';
import Incomeexpence from './components/incomeexpences';
import {TransactionList} from './components/transactionList';
import Addtransection from './components/addtransection';
import { GlobelProvider } from './context/GlobalState';

function App() {
  return (
    <GlobelProvider>
        <Header />
       <div className="container">
         <Balance />
         <Incomeexpence />
         <TransactionList />
         <Addtransection />
       </div>
     
    </GlobelProvider>
  );
}

export default App;
