
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';

function ExpenseItem(props){

    return(
<Card className='expense-item '>

<div>
   <ExpenseDate date = {props.date} ></ExpenseDate>
   
</div>

<div className='expense-item__description'>
<h2>{props.title}</h2>
<div className='expense-item__price '>${props.amount}</div>
</div>

</Card>

    );
}
export default ExpenseItem;