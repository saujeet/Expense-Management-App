import ExpenseDate from "./ExpenseDate"
import "./ExpenseItems.css";
import React, { useState } from "react";
import Card from "../UI/Card";

function ExpenseItem({ date, heading, price }) {
    const [title, setTitle] = useState(heading);
    // title = heading;
    const clickHandler = () => {
        setTitle("Updated");
        console.log(title);
    };
    return (
        <>
            <Card className="expense-item">
                {/* <div> {date.toISOString()} </div> */}
                <ExpenseDate date={date} />
                <div className="expense-item__description">
                    <h2>{title}</h2>
                    <div className="expense-item__price">{price}</div>
                </div>
                <button onClick={clickHandler}>Change Title</button>
            </Card>
        </>
    );
}
export default ExpenseItem;



// {items.map(value => (
//     <div key={value}>{value}</div>
// ))}
