import "./Card.css";

function Card({ className, children }) {
    let classes = className + " card";
    return <div className={classes}>{children}</div>;
}

export default Card;