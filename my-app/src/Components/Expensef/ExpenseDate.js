import './ExpenseDate.css';
import Card from '../UI/Card';
function ExpenseDate(props){
    const month= props.date.toLocaleString('en-US',{month:'long'});
    const day = props.date.toLocaleString('en-US',{day:'numeric'});
    const year = props.date.getFullYear();
    return(

        <Card className='expense-date'>
            <day className='expense-date__day'>{day}</day>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
        </Card>
    );
}
export default ExpenseDate;