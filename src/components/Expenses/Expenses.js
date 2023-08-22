import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItems";
import "./Expenses.css";

function Expenses({ expenses, date, heading, price }) {
    return (
        <Card className="expenses">
            {expenses.map(({ id, date, title, amount }) => (
                <ExpenseItem key={id} date={date} heading={title} price={amount} />
            ))}
        </Card>
    );
}

export default Expenses;
