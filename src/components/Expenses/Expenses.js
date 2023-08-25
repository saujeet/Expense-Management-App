import { useState, React } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
    const [filteredYear, setFilteredYear] = useState("2020");
    // const [filterInfoText, setFilterInfoText] = useState("2019, 2021 & 2022");
    let filterInfoText = "2019, 2021 & 2022";
    if (filteredYear === "2019") {
        filterInfoText = "2020, 2021 & 2022";
    } else if (filteredYear === "2021") {
        filterInfoText = "2019, 2020 & 2022";
    } else {
        filterInfoText = "2019, 2020 & 2021";
    }
    const filterHandler = (selectedYear) => {
        // console.log(`Expenses.js`);
        // console.log(selectedYear);
        setFilteredYear(selectedYear);
    };
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={filteredYear}
                    onChangeFilter={filterHandler}
                />
                <p>Data for year {filterInfoText} is hidden.</p>
                {/* <h2>Let's get started!</h2> */}

                {/* Using array.map */}

                {expenses.map(({ id, title, amount, date }) => (
                    <ExpenseItem key={id} title={title} amount={amount} date={date} />
                ))}
            </Card>
        </div>
    );
};
export default Expenses;
