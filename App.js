  import './App.css';
import ExpenseItems from './components/ExpenseItem';

function App() {

  const expense = [
    {date : new Date(),
     title : 'Car Insurance',
     price : 250},

    {date : new Date(),
     title : 'Bike Insurance',
     price : 100},

    {date : new Date(),
     title : 'Health Insurance',
     price : 500},
     
    {date : new Date(),
     title : 'Home Insurance',
     price : 1050}
  ];

  return (
    <div className="App">
        <h2>Lets get started!!</h2>
        <ExpenseItems 
        date={expense[0].date.toDateString()} 
        title={expense[0].title}
        price={expense[0].price}
        ></ExpenseItems>
        <ExpenseItems 
        date={expense[1].date.toDateString()} 
        title={expense[1].title} 
        price={expense[1].price
        }></ExpenseItems>
        <ExpenseItems 
        date={expense[2].date.toDateString()} 
        title={expense[2].title} 
        price={expense[2].price}
        ></ExpenseItems>
        <ExpenseItems 
        date={expense[3].date.toDateString()} 
        title={expense[3].title} 
        price={expense[3].price}
        ></ExpenseItems>
    </div>
  );
}

export default App;
