import Expenses from "./Components/Expensef/Expenses";

function App() {
  const expense =[
{
  title:'Car insurance',
  amount: 200,
  date : new Date(2021 , 6,23)
},
{
  title:'Book',
  amount: 180,
  date : new Date(2021 , 7,21)
},
{
  title:'Milk',
  amount:26,
  date : new Date(2021 , 9,23)
}
  ]
  return (
<div>
 <Expenses items = {expense}></Expenses>
</div>
  );
}

export default App;
